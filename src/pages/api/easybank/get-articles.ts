import { NowRequest, NowResponse } from "@now/node";

export interface articleCard {
  img: string;
  author: string;
  title: string;
  description: string;
}
export const articlesCards: articleCard[] = [
  {
    img: "image-currency.jpg",
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    img: "image-restaurant.jpg",
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    img: "image-plane.jpg",
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want your to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
  },
  {
    img: "image-confetti.jpg",
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
  },
];

export default (req: NowRequest, res: NowResponse) => {
  res.json(articlesCards);
};
