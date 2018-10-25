function ciasteczka_z_hannah(a)
{
  if(a>0)
    {
      document.cookie='ciasteczka_z_hannah=1; expires=15-Dec-2048 12:00:00 GMT; path=/';
      document.getElementById('ciasteczka_alert').style.display='none';
    }
  else
    {
      if(document.cookie.indexOf("ciasteczka_z_hannah=1")>=0)
        document.getElementById('ciasteczka_alert').style.display='none';
      else
        document.getElementById('ciasteczka_alert').style.display='block';
    }
}
