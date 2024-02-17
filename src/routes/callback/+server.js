import { redirect } from "@sveltejs/kit";
import { getTokens } from "../../lib/auth/services";

export const GET = async (event) => {
    const redirectTo = await getTokens(event);
    throw redirect(302, redirectTo);
};