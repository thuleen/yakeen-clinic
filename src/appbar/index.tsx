import HomeAppbar from "./home";

type MenuAppBarProps = {
  handleNew: () => void;
  handleLogout: () => void;
};

export default function MenuAppBar(props: MenuAppBarProps) {
  return (
    <HomeAppbar handleNew={props.handleNew} handleLogout={props.handleLogout} />
  );
}