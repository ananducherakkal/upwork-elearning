import React from "react";
type CloseMenuScreenProps = {
  closeMenu: () => void;
  show?: boolean;
};

function CloseMenuScreen(props: CloseMenuScreenProps) {
  const { closeMenu, show = false } = props;

  if (show) {
    return (
      <div
        className="bg-black/10 fixed w-screen h-screen top-0 left-0 z-40 cursor-pointer"
        onClick={closeMenu}
      ></div>
    );
  }
  return <></>;
}

export default CloseMenuScreen;
