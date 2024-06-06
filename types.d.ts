// Blog
interface post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: Array<string>;
  reactions: number;
}

interface articleProps {
  article: post;
}
// Prodacts
interface productElement {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

interface cardProps {
  card: productElement;
  handleClick: (card: productElement) => void;
}

interface params {
  id: number;
  locale: string;
}

interface paramsObj {
  params: params;
}

interface childrenProps {
  children: React.ReactNode;
  params: params;
}

interface searchProps {
  isSorted: boolean;
  setIsSorted: Dispatch<SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

interface TextExpanderProps {
  children: string;
  collapsedNumWords: number;
  expandButtonText: string;
  colapsButtonText: string;
  buttonColor: string;
  expanded?: boolean;
  className: string;
  marginLeft: string;
}

interface form {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
}

interface User {
  id: number;
  name: string;
  age: string;
  email: string;
}

interface SelectedProduct {
  id: number;
  count: number;
  selectedCard: productElement;
}

export interface ProfileData {
  email: string;
  userSub: string;
  name: string;
}
