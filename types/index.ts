export interface CustomButtonProps{
    title:string

};


export interface CustomServiceCardProps{
    title:String,
    icon:String,
    desc:String
};
export interface CustomChoiseServices{
    title:String,
    img:String,
    desc:String
};
// export interface CustomProductProps{
//     product:Object
// };

export interface ProductType {
    id: string,
    name:string,
    desc?:string,
    images: { url: string}[],
    category:string;
    price: number,
    ratings:number
    stock:number
  };
  