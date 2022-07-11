import HomeAppbar from "./home";

type MenubarProps = {
  handleNew: () => void;
  handleLogout: () => void;
};

export default function Menubar(props: MenubarProps) {
  return (
    <HomeAppbar handleNew={props.handleNew} handleLogout={props.handleLogout} />
  );
}
