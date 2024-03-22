// This line is part of a Service Worker script.
// It retrieves a client (such as a web page) that has a specific ID.
sw.clients.get(source.id).then(client => {
  // 'client' is now a reference to the matched client.
  // You can now interact with the client here.
});
