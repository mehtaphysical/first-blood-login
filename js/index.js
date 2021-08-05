const params = new URLSearchParams(window.location.search);

const near = new nearApi.Near({
  keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),
  networkId: 'mainnet',
  nodeUrl: 'https://rpc.mainnet.near.org',
  walletUrl: 'https://wallet.near.org'
});

const wallet = new nearApi.WalletConnection(near, 'first-blood-login');

document.getElementById('login').addEventListener('click', () => {
  wallet.requestSignIn({
    contractId: 'near',
    callbackUrl: params.get('callbackUrl')
  });
});
