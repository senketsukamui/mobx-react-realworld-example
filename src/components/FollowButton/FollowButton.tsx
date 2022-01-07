import clsx from "clsx";
import React from "react";

interface IFollowButtonProps {
  disabled: boolean;
  onClick: () => void;
  following: boolean;
  username: string;
}

function FollowButton({
  disabled,
  onClick,
  following,
  username,
}: IFollowButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={clsx("btn btn-sm action-btn", {
        "btn-outline-secondary": !following,
        "btn-secondary": following,
      })}
    >
      <i className="ion-plus-round" />
      &nbsp; {following ? "Unfollow" : "Follow"} {username}
    </button>
  );
}

export default FollowButton;
