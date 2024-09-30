import { auth } from "@clerk/nextjs/server";

const allowedIds = [
  "user_2mS9n2wa0ub8fSNE5NdUUmVcmrk", // carsonharp.fullstack
  "user_2mXwPLtoDobfgT3lpRMApQy8jdW", // questline.carson
];

export const getIsAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }
  return allowedIds.indexOf(userId) !== -1;
};
