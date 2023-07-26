import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";

const DAY_IN_MS = 86_400_000;

// One day in milliseconds.

export const checkSubscription = async () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
        where: {
            userId
        },
        select: {
            stripeCurrentPeriodEnd:true,
            stripeCustomerId:true,
            stripePriceId:true,
            stripeSubscriptionId:true,
        }
    });

    if (!userSubscription) {
        return false;
    }

    const isValid = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

    return !!isValid; //is valid is always a boolean
}