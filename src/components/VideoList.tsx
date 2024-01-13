import Video, { PropsVideo } from "./Video"
import uuid from 'react-uuid';

interface PropsList {
    list: PropsVideo[];
}

const VideoList = ({list}:  PropsList) => {
    
    return (
        <div>
            {list.map((item: { url : string; date: string; }) => <Video key={uuid()} url={item.url} date={item.date}/>)}
        </div>
   
    )
}

export default VideoList;