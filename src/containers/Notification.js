import React from 'react'
import { withRouter } from 'react-router-dom'
class Notification extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // var constraints = { audio: true, video: true }
        // navigator.mediaDevices.getUserMedia(constraints)
        //     .then(function (stream) {
        //         console.log("Device: " + stream)
        //         document.querySelector('#device').innerHTML = "Device: " + stream
        //         /* 使用这个stream stream */
        //     })
        //     .catch(function (err) {
        //         console.log("errorMedia: "+err)
        //         /* 处理error */
        //     });
      
        window.addEventListener("DOMContentLoaded", function () {
            // Grab elements, create settings, etc.
            var canvas = document.getElementById("canvas"),
                context = canvas.getContext("2d"),
                video = document.getElementById("video"),
                videoObj = { "video": true },
                errBack = function (error) {
                    console.log("Video capture error: ", error);
                };

            // Put video listeners into place
            console.log(navigator.webkitGetUserMedia)
            console.log(navigator.mediaDevices.ondevicechange)

            if (navigator.getUserMedia) { // Standard
                navigator.getUserMedia(videoObj, function (stream) {
                    video.src = stream;
                    video.play();
                }, errBack);
            } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
                navigator.webkitGetUserMedia(videoObj, function (stream) {
                    video.src = window.webkitURL.createObjectURL(stream);
                    video.play();
                }, errBack);
            }
            else if (navigator.mozGetUserMedia) { // Firefox-prefixed
                navigator.mozGetUserMedia(videoObj, function (stream) {
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                }, errBack);
            }
        }, false);

        // 触发拍照动作
        document.getElementById("snap")
            .addEventListener("click", function () {
                context.drawImage(video, 0, 0, 640, 480);
            });
        // await fetch(`https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=Mn43M8fvJE1MlrxIxoPvND&redirect_uri=http://192.168.1.161:8000/Test&scope=notify&state=abcde`,
        //     {
        //         method: "GET",
        //     })
        //     .then(res => res.json()
        //     )
        //     .then(data => {
        //         console.log(data)
        //         // Data.Product = data.products.concat(data.products);
        //         // Data.Product = data.products;
        //         // return data.products
        //     })

        //     .catch(function (res) { console.log(res) })
    }
    render() {
        return (
            <div className="homepage_container" >
                <video id="video" width="640" height="480" autoplay></video>
                <button id="snap">Snap Photo</button>
                <canvas id="canvas" width="640" height="480"></canvas>
                <div id="device" style={{ width: "100%", height: 200, position: "absolute", top: "10%", left: "5%" }}></div>
            </div>


        )
    }
}
export default withRouter(Notification)