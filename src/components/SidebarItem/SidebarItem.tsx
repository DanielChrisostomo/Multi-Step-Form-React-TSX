import { Link } from "react-router-dom";
import * as C from "./styles";
import ProfileIcon from "../../assets/profile.svg?react";
import BookIcon from "../../assets/book.svg?react";
import MailIcon from "../../assets/mail.svg?react";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

const SidebarItem = ({ title, description, icon, path, active }: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "profile" && (
            <ProfileIcon fill="white" width={24} height={24} />
          )}
          {icon === "book" && <BookIcon fill="white" width={24} height={24} />}
          {icon === "mail" && <MailIcon fill="white" width={24} height={24} />}
        </C.IconArea>
        <C.Point active={active} />
      </Link>
    </C.Container>
  );
};

export default SidebarItem;
