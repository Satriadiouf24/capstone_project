import DATA_ENDPOINT from"../../config/dataEndPoint";const fungsiLogin=async(e,t)=>{try{const o=await fetch(DATA_ENDPOINT.LOGIN,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}),a=await o.json();if(o.ok){swal({title:"Success",text:"Login berhasil!",icon:"success",button:"OK"}).then((()=>{window.location.href="/#beranda"}));const e=new Date;e.setTime(e.getTime()+6048e5),document.cookie=`token=${a.data.user.id}; expires=${e}; path=/`,document.cookie=`role=${a.data.user.role_id}; expires=${e}; path=/`,document.cookie=`name=${a.data.user.name}; expires=${e}; path=/`}else swal({title:"Gagal",text:"Login gagal!",icon:"error",button:"OK"})}catch(e){swal({title:"Gagal",text:"Login gagal!",icon:"error",button:"OK"})}};export default fungsiLogin;