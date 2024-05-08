a = prompt("ingresar a:");
b = prompt("ingresar b:");
c = prompt("ingresar c:");
D = b**2-4*a*c;
alert()
if(D>0){
    raiz1=(-b + Math.sqrt(D))/(2*a);
    raiz2=(-b - Math.sqrt(D))/(2*a);
    document.write("La ecuacion tiene dos raices reales:"+ "<br>");
    document.write("Raíz 1: " + raiz1 + "<br>");
    document.write("raiz2:", raiz2);
}
else if(D==0){
    raiz= -b/(2*a);
    document.write("La ecuacion tiene una raiz real:");
    document.write("raiz:",raiz);
}
else{
    document.write("La ecuacion no tiene raices reales")
}
