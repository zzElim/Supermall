<template>
  
 <div class="wrapper" >

  <div class="content" >
    <ul >
  <li>内容1</li>
  <li>内容2</li>
  <li>内容3</li>
  <li>内容4</li>
  <li>内容5</li>
  <li>内容6</li>
  <li>内容7</li>
  <li>内容8</li>
  <li>内容9</li>
  <li>内容10</li>
  <li>内容11</li>
  <li>内容12</li>
  <li>内容13</li>
  <li>内容14</li>
  <li>内容15</li>
  <li>内容16</li>
  <li>内容17</li>
  <li>内容18</li>
  <li>内容19</li>
  <li>内容20</li>
  <li>内容21</li>
  <li>内容22</li>
  <li>内容23</li>
  <li>内容24</li>
  <li>内容25</li>
  <li>内容26</li>
  <li>内容27</li>
  <li>内容28</li>
  <li>内容29</li>
  <li>内容30</li>
  <li>内容31</li>
  <li>内容32</li>
  <li>内容33</li>
  <li>内容34</li>
  <li>内容35</li>
  <li>内容36</li>
  <li>内容37</li>
  <li>内容38</li>
  <li>内容39</li>
  <li>内容40</li>
  <li>内容41</li>
  <li>内容42</li>
  <li>内容43</li>
  <li>内容44</li>
  <li>内容45</li>
  <li>内容46</li>
  <li>内容47</li>
  <li>内容48</li>
  <li>内容49</li>
  <li>内容50</li>
  <li>内容51</li>
  <li>内容52</li>
  <li>内容53</li>
  <li>内容54</li>
  <li>内容55</li>
  <li>内容56</li>
  <li>内容57</li>
  <li>内容58</li>
  <li>内容59</li>
  <li>内容60</li>
  <li>内容61</li>
  <li>内容62</li>
  <li>内容63</li>
  <li>内容64</li>
  <li>内容65</li>
  <li>内容66</li>
</ul>
  </div>

  

 </div>
  

</template>

<script>
import BScroll from 'better-scroll'

export default {
  // created(){
  //   new BScroll('.wrapper',{

  //   })
  // }
  // data(){
  //   return{
  //     scroll:null
  //   }
  // },
  mounted(){
   const BS = new BScroll(document.querySelector('.wrapper'),{
    mouseWheel: true,
    probeType:3,
    pullUpLoad:true,
   })
   BS.on('scroll',(position)=>{
    // console.log(position);
   })
   BS.on('pullingUp',()=>{
    console.log('上拉加载');
   })
   
  }
 

}
</script>

<style>
.wrapper{
  height: 100px;
  background-color: red;
 /* overflow: scroll; */
 overflow: hidden; 
}


</style>