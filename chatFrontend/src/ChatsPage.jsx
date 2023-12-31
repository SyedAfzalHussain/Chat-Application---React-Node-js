import { PrettyChatWindow } from "react-chat-engine-pretty";


const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="PROJECT_ID_HERE"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;
