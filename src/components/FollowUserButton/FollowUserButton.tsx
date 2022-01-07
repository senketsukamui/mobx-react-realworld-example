import { IUserProfile } from "@/stores/user/types";
import { useStores } from "@/useStores";
import { observer } from "mobx-react";
import React, { FunctionComponent } from "react";
import FollowButton from "../FollowButton";

interface IFollowProfileButtonProps {
  profile: IUserProfile;
}

const FollowProfileButton: FunctionComponent<IFollowProfileButtonProps> = ({
  profile,
}) => {
  const { userStore } = useStores();

  const action = () => {
    if (profile.following) {
      userStore.unfollowUser(profile.username);
    } else {
      userStore.followUser(profile.username);
    }
  };

  return (
    <FollowButton
      disabled={userStore.loading}
      following={profile.following}
      username={profile.username}
      onClick={action}
    />
  );
};

export default observer(FollowProfileButton);
