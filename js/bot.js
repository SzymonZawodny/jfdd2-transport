$('button').click(function()
{
    if(Confirm())
    {
        alert('Form submitted');
        /* perform a $.post() to php */
    }
    else
    {
        alert('Form not submitted');
    }
});
function Confirm()
{
    var _question = confirm('Are you sure about this?');
    var _response = (_question) ? true : false;
    return _response;
}