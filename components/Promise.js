class Promise extends React.Component {

    constructor(props) {
        super(props);
    }
 
    build() {
        var form_promise = new Form(null, "Executer Promesse");
        var promise_resolved = "promise is resolved";
        form_promise.submit(function (e, data) {
            (async() => {
                let data_bar = document.getElementById('promise_bar');
                let count = 0;
                var timer = await setInterval(function (resolve) {
                    count += 1;
                    data_bar.setAttribute('value', `${count}`);
                    console.log(count);
                    if (count >= 100) {
                        clearInterval(timer);
                        alert(promise_resolved);
                    }
                }, 50);
            })().then(()=> {
                //console.log("ok");
            });
 
        });
        return React.createElement('div', null, [
            form_promise,
            React.createElement('progress', {id: "promise_bar", max: "100", value: "0"})
 
        ]);
    }
 }