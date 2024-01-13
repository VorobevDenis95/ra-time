import DateTime from "./DateTime";
import DateTimePretty from "./HOC/DateTimePretty";



interface PropsVideo {
        date: string;
        url?: string;
}

interface PropsItemVideo {
  item: PropsVideo;   
}

const Video = ({url, date}: PropsVideo) => {
    return (
        <div className="video">
            <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={date}/>
            
        </div>
    )
}

export default Video;
export type {PropsVideo, PropsItemVideo};