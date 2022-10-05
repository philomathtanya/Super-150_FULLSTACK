function tell()
{
    let age = Number(document.getElementById("id1").value);
    if (age < 13)
    {
        document.write("Ap bacche ho abhi padai likhai karo!!");
    }
    else if (age < 20 && age > 12)
    {
        document.write("Ap nibba nibbi ho abhi!!");
    }
    else {
        document.write("You are Mature!");
    }
    let a = age < 100 ? "you are alive" : "you dead";// ternary conditional operator
    alert(a);
}
