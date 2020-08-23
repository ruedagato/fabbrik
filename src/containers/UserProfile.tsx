import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import LinearProgress from "@material-ui/core/LinearProgress";

export const UserContext = React.createContext<firebase.User>(null);

interface IUserProfile {
  user: firebase.User | null;
  complete: boolean;
}

class UserProfile extends React.Component<any, IUserProfile> {
  constructor(props: any) {
    super(props);
    this.state = {
      complete: false,
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((usr) => {
      this.setState({ user: usr, complete: true });
    });
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.state.complete ? this.props.children : <LinearProgress />}
      </UserContext.Provider>
    );
  }
}

export default UserProfile;
