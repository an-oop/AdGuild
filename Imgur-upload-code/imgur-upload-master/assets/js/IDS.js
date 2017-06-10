                var self     = this,
                    xhttp    = new XMLHttpRequest(),
                    status   = document.querySelector('.status'),
                    fd       = new FormData();

                fd.append('image', file);
                xhttp.open('POST', 'https://api.imgur.com/3/image');
                xhttp.setRequestHeader('Authorization', 'Client-ID 2e0241b09b30b44'); //Get yout Client ID here: http://api.imgur.com/
                xhttp.onreadystatechange =
                	function () {
                    if (xhttp.status === 200 && xhttp.readyState === 4) {
                        var res = JSON.parse(xhttp.responseText);
                        var link, p, t;

//                        self.remove(status);

                        link = res.data.link;

                        p    = self.create('p');

                        t    = document.createTextNode(link);

                        p.appendChild(t);
                        status.appendChild(p);
                    }
                };
                xhttp.send(fd);




// Code to open a file using Javascript

var xhr = new XMLHttpRequest();
xhr.open('GET', '/my/image/name.png', true);
//xhr.open(type, url, async, username, password);
xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
  // response is unsigned 8 bit integer
  // Replace this with the function the Imgur guys have written..
};

xhr.send();
