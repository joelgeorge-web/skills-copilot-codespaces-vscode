function skillsMember()
{
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    if (memberValue == "yes")
    {
        var skills = document.getElementById("skills");
        skills.style.display = "block";
    }
    else
    {
        var skills = document.getElementById("skills");
        skills.style.display = "none";
    }
}