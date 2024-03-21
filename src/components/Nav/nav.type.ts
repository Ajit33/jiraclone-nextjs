export interface NavGroupinterface{
    id:number;
    items:NavItemInterface[];

}

enum NavTypes{
    LOGO="logo",
    Item="item",
    AVATAR="avatar",
    THEME_TOGGLE="themeToggle"
}
 export interface NavItemInterface{
   id:number;
   type:NavTypes;
   content?:String;
}

 export type NavDataType=NavGroupinterface[];