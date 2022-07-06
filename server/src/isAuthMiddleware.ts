import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { MyContext } from "./MyContext";

// bearer 2312423
export const isAuthMiddleware: MiddlewareFn<MyContext> = (
  { context },
  next
) => {
  const authorization = context.req.headers["authorization"];
  if (!authorization) {
    throw new Error("not authenticated");
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (error) {
    console.log(error);
    throw new Error("not authenticated");
  }
  // next tells that we have done with current middleWare logic and now we can go resolvers
  return next();
};
