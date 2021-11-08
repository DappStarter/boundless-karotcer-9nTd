require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile pulp gesture nature tackle short'; 
let testAccounts = [
"0x45035b8be9701fb33a4413c1074729d99fcb6956e013405582e17c56a972a656",
"0x80f75b26b5b0987d153f26cead497302e436750f2fae98df7d89bce802e17c4e",
"0x83d1105f70de823c77c6e4ca2bc7b984e440df9b52fb708f77081ea33f5425a5",
"0xb87a7b492fb8296baf399d28f16c57fedb15e89aab9f8ac344ae8f26db65fa39",
"0x7dde5802d6c236e2f03a87cdb291988eaee280d4a9f114ce0a0b3a7664029329",
"0xd8db60f63f11d9360558a8c8eb2d82c7ae86ffa5df9f389e5234b656a0152328",
"0x37f2cc3de8ee5e0a76acd7ab083cb4f5c2f7fe3ae2a55ba8c503ab316d02d361",
"0x71590aab1fdd9265f0bdb2bbfb3428365b7bccb5bf812d0356a1dd06a493979b",
"0x4bffe6a3a586e9f12ca1ed2257ee8d80c76eae4dcb99df5d5705a1cddbb990a5",
"0x8129c32df0f0d44cb65d63579f1caf5ce3375578cc6951da1f2da7ae3bbedc1e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


