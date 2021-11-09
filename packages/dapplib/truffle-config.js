require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan rifle tape punch harvest forest forget general'; 
let testAccounts = [
"0x5d84d7c8003fdf3b6c302ddadc422bb0f40aa5fff63e5657dfe82e9e6b1339a6",
"0xda033fa93e1b03848eea7cc5b194511fce9596e88580684b5690d4dabfb27cb3",
"0xf03fd40185e033539fdbf2f60425e9d979cba4a16468d08e2ec5c41b96ce6d55",
"0x5f1046e3b4c36c27a220908c639f7e9c6850fa93a9a49a8b2aa1c4ae9bc12c52",
"0x613eb3145f605f99499951834c3e096462c5bb504df180b7c17671eb5a4c6487",
"0x6ccd1f4a8dec6caa5bf3de4f3d077b36100dcb58d108fbb6474c68a2fa0a7697",
"0x2361e8ce2355651fd7fba81309a33c7d37608ce95015e937724bccdf553ef5ce",
"0xe371997310e94eb2ba738216cdf1dea028b8f112bec052e5389ec65902864f06",
"0x590b4836da3744d2bf803901fc2173f40f15603373722a22521ce2f7f7b511e8",
"0xdad55b64dfa8b0ebb9b4d5a33389f9153af98208bcc2143451266e9d46e3d5c1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

