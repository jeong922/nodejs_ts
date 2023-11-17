type Tweet = {
  id: string;
  text: string;
  createdAt: Date;
  name: string;
  username: string;
  url?: string;
};

const tweets: Tweet[] = [
  {
    id: '1',
    text: '❤❤❤❤❤',
    createdAt: new Date(),
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: '2',
    text: 'hi',
    createdAt: new Date(),
    name: 'Jeong',
    username: 'jeong',
  },
];

export async function getAll(): Promise<Tweet[]> {
  return tweets;
}
