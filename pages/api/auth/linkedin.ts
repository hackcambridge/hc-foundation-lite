import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { NEXT_PUBLIC_LINKEDIN_CLIENT_ID } = process.env;
  const redirectUri = encodeURIComponent(process.env.LINKEDIN_REDIRECT_URI || '');

  const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${NEXT_PUBLIC_LINKEDIN_CLIENT_ID}&redirect_uri=${redirectUri}&scope=r_liteprofile`;

  res.redirect(authorizationUrl);
}
