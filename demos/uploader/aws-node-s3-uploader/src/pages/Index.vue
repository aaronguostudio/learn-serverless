<template>
  <q-page class="flex flex-center">
    <q-uploader
      method='PUT'
      url="https://econirman-uploads.s3.amazonaws.com/fbeff99b-5ff8-45b6-8b52-bbeee56a66f1.jpg?Content-Type=multipart%2Fform-data&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA46DFI4MV63GQENUQ%2F20190927%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190927T055924Z&X-Amz-Expires=900&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICMLdNlN0ei7Pyw2bRBf0eVk9RAOUPQa251oTPBDIN2LAiEAjcSX1ZBG%2BcixGUia8FSgHCI40A4mWpFbRIRXQBQjKBAqmgIIbxAAGgw4ODkyNzA2MjUwNjciDJ3DcdMyJwdPnyHiFSr3AdnaENmDPDlFm2sOkfSnwalw2GQ0Lf2NKJZb79b1AyvrJ6YcGhsBSQT0QPrYe%2FaRUuEWar6jypd02Hh%2FrvR8PtTWW0SC1NoB8ayiY%2FqRSSuOZkZzjEPyFpVG3gdJ%2BWks%2BGwO45PSV2CBONPnAXL9Q%2BRxqipsEjtxrbDhfw0Ahl9I1%2FhfB0whFyMWQjP75zUxZofXbEsuy93YzJ3C%2F28n7hhGlJNWsKnb4YFZ4C1QQc1W6Q0G4uLHlP41fe6zOwsGmG6zVWuUxho61joTYXSIQrs9neCxVsGV8cJo3BTEbbfAsW02ND%2Fqs%2FZIh18ykm4JRCG0qg1KVw0wi8K27AU6tAGEXKp2WM4nM9WdA7CnXrdcihqL0%2F9Ugan%2Bn74u6rKeTB%2FJlTOfc%2F5yF86mEVBRLzAmoFXlPSxDfK2hj1at8bhj8jrPkMdaWh8FWtNmF4WCnMaEpXMHa%2B6jHehdi%2F0OnhdVgLaonxVx9nNvpa%2F3N6Ek6uSr3W%2B0NP4XM%2FU3OcPPfNEoBiWrUpB3P5HnXt%2FiBv464tq10cCAXfOYAHkwFc5e33odR7m87U12FmuVjeAC0cZt0hc%3D&X-Amz-Signature=e055e552f1aa15a82d0dda5ca68ac358a25ebbf518fc1b4ffdc45506a69d0c1a&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read"
      multiple
      style="max-width: 300px"
    />
  </q-page>
</template>

<script>
/*
  TODO multi-images uploading
  - Using a loop to retrive url for each upload
  - After the upload is done, invalid the used pre-signed url
    - reference: https://serverless.com/blog/s3-one-time-signed-url/
*/
export default {
  name: 'PageIndex'
}
</script>
