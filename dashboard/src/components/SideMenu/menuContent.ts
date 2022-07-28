type IMenu =  { 
  icon: string,
  name: string,
  focus: boolean,
  path: string,
}[]

export const menuContent: IMenu = [
  {
    icon: "",
    name: "Home",
    path: "/",
    focus: true
  },
];