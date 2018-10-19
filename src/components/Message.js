import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions/index'
import classnames from 'classnames'

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
    }

    onSend() {
        this.props.sendMessage(this.state.text)
        this.setState({ text: '' })
    }

    render() {
        return (
            <div className="container">
                <label>
                    <h3>Message</h3>
                </label>
                <input
                    type="text"
                    placeholder="chat"
                    onChange={e => this.setState({ text: e.target.value })}
                    value={this.state.text}
                />
                <button onClick={() => this.onSend()}>Send</button>
                {this.props.message.messageList.map((item, index) => {
                    return (
                        <div
                            className={classnames(
                                'clearfix',
                                {
                                    'sender-you': item.sender === 'You'
                                },
                                {
                                    'sender-bot': item.sender === 'Bot'
                                }
                            )}
                            key={index}
                        >
                            <h3 key={index} className="float-left">
                                {item.message}
                            </h3>
                            <p className="float-right">{item.sender}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(
    mapStateToProps,
    { sendMessage }
)(Message)
