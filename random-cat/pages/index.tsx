import { GetServerSideProps,NextPage } from "next";
import { useState }from "react";
import style from "./index.module.css";
import Image from "next/image";

type Props = {
   initialImageUrl: string;
};

const IndexPage: NextPage<Props> = ({initialImageUrl}) => {
    const [imageUrl,setImageUrl] =useState("");
    const [loading,setLoading] = useState(true);

   // useEffect(()=> {
     //   fetchImage().then((newimage)=>{
       //     setImageUrl(newimage.url);// 画像URLの状態を更新する
         //   setLoading(false);
       // });
   // },[]);
/*useEffectは2つの引数を指定しています。第1引数は処理内容、
第2引数はどのタイミングで処理内容を実行するかの指定です。第2引数は空の配列[]になっています。
空配列であるため一見すると不要そうに見えますが、
これには「コンポーネントがマウントされたときのみ実行する」という重要な役割があるので
省略しないでください。 */

const handleClick  = async () =>{
  setLoading(true);
  const newImage  = await fetchImage();
  setImageUrl(newImage.url);
  setLoading(false);
};
  return (
  <div className= {style.page}>
    <button onClick={handleClick} className={style.button}>変更</button>
    <div className={style.frame}>{loading || <img src={imageUrl} className={style.img}/>}</div>
  </div>
  );
};
export default IndexPage;

export const getServerProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return{
    props: {
      initialImageUrl: image.url,
    },
  };
 };
 
const fetchImage = async (): Promise<any> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};
 