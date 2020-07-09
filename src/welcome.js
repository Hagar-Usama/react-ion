import Welcome from 'react-welcome-page'
  

render(){

return(
<div id='my-container'>
<Welcome
        loopDuration={1100}
        data={[
        {
        image: require('./image_path/mypic1.png),
        text: 'My Quote',
        imageAnimation: 'flipInX',
        textAnimation: 'bounce',
        backgroundColor: '#FF3354',
        textColor: '#002134'
        },
        {
        image: require('./image_path/mypic2.png),
        text: 'My Quote',
        },
        {
        image: require('./image_path/mypic3.png),
        textAnimation: 'rotateIn'
        }
    ]}

/>



  
</div>
)}