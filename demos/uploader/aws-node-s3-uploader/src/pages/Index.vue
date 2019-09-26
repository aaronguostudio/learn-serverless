<template>
  <q-page class="flex flex-center">
    <q-uploader
      method='PUT'
      url="https://econirman-uploads.s3.amazonaws.com/24e11d16-3684-466e-9fda-34ad8109e4fe.jpg?Content-Type=image%2Fjpg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA46DFI4MV4A4M27DN%2F20190926%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190926T123035Z&X-Amz-Expires=900&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICNhs8YI3ynPBNu9tPk1DbWKexF%2BX9jSoNpLeCPk7Yq6AiEAjazt%2Fr0eXQbBFGFKjhJ9BnX47%2BJ5Zc%2BK%2BJdMPBjZEqIqmgIIXhAAGgw4ODkyNzA2MjUwNjciDBPba%2FHkVCh1l5hirir3AbYRUMZFbCsrCvwl0K%2FnV6h5xa4FAtUcmv%2BCf%2F8nau5%2B6nfFdXZAB2oCHjq1Blavq828D%2FIh254cReJxFRGU9YUlt9VXrU%2BXFQCxdxV9o31NHmwTd0WjL4Bq63Og4EIew2xGRQbkYv5kPqOp8kcBsREclFsbLQDSv7%2FukCkTkF1XEl5dyoUBHsW%2BRALFYH0mxjkfEVnkYIbUuWhXyeLSxyAl7eTTq%2FWcqzC8p%2FVdaBRBjbcwULmPYr6xDV6eBE7XuZU8WFH2fgE5J0hrsLobX6v%2BpDuOc9p%2FDFB7eVBgEzuhc28G%2BeVDQ0xTxD46i1sjvfI5i%2FBL%2F38wr9uy7AU6tAGBCrM9G9qarb44jPNOowxaEi%2FDaKkwmwunzJgl7gOlK4KxG2l4IfuZCTISQNO3LXJdv2jL0mLdkkKmsIP1iMKClLRGCzPnCtaCT41TfptMSybAJxVCXiW2ZDEUWop4JTi5JLM%2Bdf8YKXuwKDDW9gQImNkXeG%2FnXL9BK61L%2F39GeNaeL5c0%2BmICzLChJcc1FHjqR3THUhBbSQBDgLuPhf68M24A7MiADmU1g3SlMQs9nWudPh8%3D&X-Amz-Signature=fff1512b1b521d168eeae3b918bb742de44ecf1ce3bda154d1e6b106c01137e4&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read"
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
