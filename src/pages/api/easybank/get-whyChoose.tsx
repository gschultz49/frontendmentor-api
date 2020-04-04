import { NowRequest, NowResponse } from "@now/node";

export interface whyChooseCard {
  img: string;
  title: string;
  description: string;
}

const whyChooseCards: whyChooseCard[] = [
  {
    img: "icon-online.svg",
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  },
  {
    img: "icon-budgeting.svg",
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
  },
  {
    img: "icon-onboarding.svg",
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances in the right way."
  },
  {
    img: "icon-api.svg",
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from your account. Tracking your money has never been easier."
  }
];

export default (req: NowRequest, res: NowResponse) => {
  res.json(whyChooseCards);
};
