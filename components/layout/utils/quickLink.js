import Link from "next/link";

const QuickLink = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a className={`quickLink`}>{text}</a>
    </Link>
  );
};

export default QuickLink;