import React from "react";
import * as dayjs from 'dayjs';
import DateTime from "../DateTime";
import relativeTime from 'dayjs/plugin/relativeTime';
import { JSX } from "react/jsx-runtime";

const withNewDate = (Component: JSX.IntrinsicAttributes) => {
    return class extends React.Component {
        state= {};
        componentDidMount(): void {
            const {date} = this.props;
            dayjs.extend(relativeTime);
            const newDate= dayjs(date).fromNow();
            this.setState(() => {
                return {date: newDate}
            });
        }

        render() {
            return <Component {...this.props} date={this.state.date} />
        }
    }
}

const DateTimePretty = withNewDate(DateTime);

export default DateTimePretty;
export {DateTimePretty};

