import User from './User';

const If = () => {
  let content;

  if (isLoggedIn) {
    content = <User></User>;
  } else {
    content = <User />;
  }
  return <div>{content}</div>;
};

export default If;
