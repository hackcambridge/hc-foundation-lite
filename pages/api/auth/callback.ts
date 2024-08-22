import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('No code provided');
  }

  const { HCF_COMPANY, LINKEDIN_CLIENT_SECRET, NEXT_PUBLIC_LINKEDIN_CLIENT_ID, LINKEDIN_REDIRECT_URI } = process.env;

  try {
    // Step 1: Exchange authorization code for access token
    const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: LINKEDIN_REDIRECT_URI,
        client_id: NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
        client_secret: LINKEDIN_CLIENT_SECRET,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token } = tokenResponse.data;

    // Step 2: Fetch the user profile data with positions
    const profileResponse = await axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        projection: '(id,firstName,lastName,profilePicture(displayImage~:playableStreams),positions)',
      },
    });

    const userProfile = profileResponse.data;

    // Step 3: Verify if the user is part of your organization
    const companyID = HCF_COMPANY;
    const isMember = userProfile.positions.values.some((position: any) => position.company.id === companyID);

    if (isMember) {
      // If user is a member, allow them to proceed
      const profilePicture =
        userProfile.profilePicture['displayImage~'].elements[0].identifiers[0].identifier;
      res.redirect(`/profile?picture=${encodeURIComponent(profilePicture)}`);
    } else {
      // If not, deny access
      res.status(403).send('You are not a part of the organization.');
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve access token or profile data' });
  }
}
