## [6.64.0](https://github.com/leather-io/extension/compare/v6.63.0...v6.64.0) (2025-02-24)


### Features

* stx transfer sip10 ft, closes LEA-1962 ([5911b95](https://github.com/leather-io/extension/commit/5911b9559b53c0adcd47e3a45873919695c853c2))
* use leather provider ([70bd419](https://github.com/leather-io/extension/commit/70bd419ac3c78b9bdf1e19ddf0740e245f339636))


### Bug Fixes

* failing onboarding integration test ([3aea4ef](https://github.com/leather-io/extension/commit/3aea4ef1929952a5e89d917dddcf75085bf7ecd3))
* update fn arg serialization, closes LEA-2166 ([84515c6](https://github.com/leather-io/extension/commit/84515c687aa8d5271305fb43a60747cf9fc8e6bd))


### Internal

* use stacks descriptor ([ba3cbe8](https://github.com/leather-io/extension/commit/ba3cbe8baed666729add21a3ca2be2a40f54215e))

## [6.63.0](https://github.com/leather-io/extension/compare/v6.62.0...v6.63.0) (2025-02-20)


### Features

* enable notifications by default ([799eb6a](https://github.com/leather-io/extension/commit/799eb6a5f14d9cd8062fbad8a92a3fab9f697c6c))
* implement tx notification settings toggle ([57bfc3c](https://github.com/leather-io/extension/commit/57bfc3c67190399bcd9b205fd15026c714fee39f))


### Bug Fixes

* **rpc:** broken sign message events, closes LEA-2151 ([f7378fd](https://github.com/leather-io/extension/commit/f7378fda94fd175755eb352ef68880c85f82f421))


### Internal

* minor sbtc updates, closes LEA-1992 ([6c51272](https://github.com/leather-io/extension/commit/6c51272db58d60893b5b3eaa8460944ed35cda66))
* post-release merge back ([fe1881e](https://github.com/leather-io/extension/commit/fe1881e6e2fb56517f9725857749715495fbe884))

## [6.62.0](https://github.com/leather-io/extension/compare/v6.61.0...v6.62.0) (2025-02-17)


### Features

* add item to spam filter ([53c7fdf](https://github.com/leather-io/extension/commit/53c7fdf36b224ca116de0b3627b743238e438a58))
* **rpc:** stx_transferStx method support, closes LEA-1966 ([9e27507](https://github.com/leather-io/extension/commit/9e275076f279d03093e7db75b81ed592146747b7))
* stx deploy contract, closes LEA-1956 ([7a2154e](https://github.com/leather-io/extension/commit/7a2154e30d9a7243d6b4ded891fe01b7403a9dde))


### Bug Fixes

* add default for post condition mode ([ec3fe92](https://github.com/leather-io/extension/commit/ec3fe928593ff338c4ac6decf68458c1c45cabf1))
* call contract types ([9ae8f79](https://github.com/leather-io/extension/commit/9ae8f799df15c032d166c9f5973a1a568bf4d510))


### Internal

* post-release merge back ([463604c](https://github.com/leather-io/extension/commit/463604c1c3df9c06e0414f4b4e5764d374cb7528))
* rename stx sign transaction ([526c58f](https://github.com/leather-io/extension/commit/526c58f941677efdf3c4f80b01fff050c4d0ab2f))
* rpc package usage ([8ba2a9e](https://github.com/leather-io/extension/commit/8ba2a9ec9db561486f4c4b0f39bf1fde6fab5933))
* share rpc sip30 broadcast tx ([aa75d72](https://github.com/leather-io/extension/commit/aa75d72075cab846f9fa6825453b5d5a135825b7))

## [6.61.0](https://github.com/leather-io/extension/compare/v6.60.1...v6.61.0) (2025-02-12)


### Features

* add forgot password flow, LEA-487 ([e4e6120](https://github.com/leather-io/extension/commit/e4e61205e3ef688075cca1cd053a2f72447a4dd1))
* add stx_signStructuredMessage, closes LEA-1960 ([691180a](https://github.com/leather-io/extension/commit/691180ae74bd71ea4a5d52b7470157fe10795b57))
* address monitor and btc tx notifications ([aa3d64a](https://github.com/leather-io/extension/commit/aa3d64af811f65c6ae9ace3b819feb12e2cca7ee))
* disable bitcoin tx notifications ([c9b3234](https://github.com/leather-io/extension/commit/c9b3234e1d3d68d2a4489b09ea52606d6f7c2716))
* **rpc:** stx_getAddresses, closes LEA-1958 ([cb53bf5](https://github.com/leather-io/extension/commit/cb53bf528be9c45e633471583b558c24b763a024))
* sip30 stx call contract, closes LEA-1954 ([ea68e3c](https://github.com/leather-io/extension/commit/ea68e3cd3050766568fd7ce18bcc912de4a5f3e1))
* use spam filter with whitelist ([6bf33a6](https://github.com/leather-io/extension/commit/6bf33a6c54ac407e3276266ea0700d06cf439abb))


### Bug Fixes

* prevent tab index to embedded elements ([d84b503](https://github.com/leather-io/extension/commit/d84b5034b2c144b89996f0da2a79297179a9ad73))
* stacks js v6 mock broadcast tx for swaps ([2562313](https://github.com/leather-io/extension/commit/256231301a171fdea75f991c7542ae5a2ce5d768))


### Internal

* post-release merge back ([55643a6](https://github.com/leather-io/extension/commit/55643a6bd2537c1eb6dd24e3bec3cc061a3e6bac))
* upgrade stacks js, closes LEA-1989 ([9972d22](https://github.com/leather-io/extension/commit/9972d22542500c137ecf77501cdc21b3dc7309b8))

## [6.60.1](https://github.com/leather-io/extension/compare/v6.60.0...v6.60.1) (2025-02-05)


### Bug Fixes

* add network validation ([5fd025f](https://github.com/leather-io/extension/commit/5fd025f75bc1fba75a35a8308809607be41b9834))
* show available metadata for stacks nfts, ref leather-io/extension[#5349](https://github.com/leather-io/extension/issues/5349) ([30a2d8e](https://github.com/leather-io/extension/commit/30a2d8ee5f7f16a909eafa7fd149939b373248d5))
* **signPsbt:** window not closing ([13ca4b4](https://github.com/leather-io/extension/commit/13ca4b42d6750ef510f63668202d564de619a5a7))


### Internal

* address breaking changes in ui badge ([a96407a](https://github.com/leather-io/extension/commit/a96407afd0bb954cb94871d315ff792c0c04aad8))
* post-release merge back ([bdde723](https://github.com/leather-io/extension/commit/bdde723696463c9f965e25ca8dabb0973ae4302a))
* remove redundant icon prop ([8895b99](https://github.com/leather-io/extension/commit/8895b99f240535d114ba897fd440a0f85d8633f0))

## [6.60.0](https://github.com/leather-io/extension/compare/v6.59.2...v6.60.0) (2025-01-28)


### Features

* **signPsbt:** add txid to return payload, closes [#5292](https://github.com/leather-io/extension/issues/5292) ([c19a902](https://github.com/leather-io/extension/commit/c19a90219cc6f13e5f1731a948612fe8cae9d11d))


### Bug Fixes

* allow users to send btc to themselves, ref leather-io/extension[#5349](https://github.com/leather-io/extension/issues/5349) ([a04841d](https://github.com/leather-io/extension/commit/a04841d3804836021faa33534e84bd5024db41ed))
* go close ledger action navigation, LEA-2078 ([a950b32](https://github.com/leather-io/extension/commit/a950b3241aefec4f6e4ee6bb233b540858644a74))
* **rpc:** use SIP-30 format for `stx_signTransaction` ([99b84d3](https://github.com/leather-io/extension/commit/99b84d3cc1debc48bdd8127a34a002c5ccab0392))
* sbtc swap validation ([7de260e](https://github.com/leather-io/extension/commit/7de260ef6ee2fdcc2d08849a866a27b2da804512))
* stx available balance issues ([6f054bb](https://github.com/leather-io/extension/commit/6f054bb328377f0d598f6bd8e9b3a67ca9c0b0ea))


### Internal

* post-release merge back ([2b43e49](https://github.com/leather-io/extension/commit/2b43e4998240ca0bd9a08b275053033e9f3d5461))
* update path-to-regexp to fix ci audit ([9e4544d](https://github.com/leather-io/extension/commit/9e4544d0a3ba84ce18f268245526383a52824c6e))
* upgrade utils package ([6e6d17e](https://github.com/leather-io/extension/commit/6e6d17e8dc9c2b6bb4ad4b217a04a4e8ec7e4def))

## [6.59.2](https://github.com/leather-io/extension/compare/v6.59.1...v6.59.2) (2025-01-17)


### Bug Fixes

* change swap test timeout time ([43bd1b2](https://github.com/leather-io/extension/commit/43bd1b2935270761109c443a4701c6a5ce822a6a))
* possible issue introduced with testnet4 ([6adb427](https://github.com/leather-io/extension/commit/6adb427e6b55d13ad9261374d579113c0412ab4b))


### Internal

* post-release merge back ([060fd66](https://github.com/leather-io/extension/commit/060fd66b6a3ecf6b12ffa29af6fd680955fca6ec))

## [6.59.1](https://github.com/leather-io/extension/compare/v6.59.0...v6.59.1) (2025-01-16)


### Bug Fixes

* rendering the correct src20 image, closes LEA-1993 ([f935e47](https://github.com/leather-io/extension/commit/f935e47c3d645d7556d152ffe01422a8bacb1612))


### Internal

* post-release merge back ([54e8f7d](https://github.com/leather-io/extension/commit/54e8f7d48af1941179259c8181ebd9264df17b0a))
* remove width prop and move to new directory ([42ae048](https://github.com/leather-io/extension/commit/42ae048e53d83b7913c94df60e9c28bd679548f3))

## [6.59.0](https://github.com/leather-io/extension/compare/v6.58.1...v6.59.0) (2025-01-15)


### Features

* add rpc send transfer test ([19ec3fe](https://github.com/leather-io/extension/commit/19ec3fe0884b8b3150c3f91e5cfbd11bad1d42b7))
* display proper image for src20 tokens ([e7da017](https://github.com/leather-io/extension/commit/e7da0172aea8f45fe48ae2f180c924a095717dc9))


### Bug Fixes

* btc balance ([05132fe](https://github.com/leather-io/extension/commit/05132fe7fa6afa4c2359fd72b5e3021653b5061b))
* inscription settings btn styles ([1e3dda7](https://github.com/leather-io/extension/commit/1e3dda7e733a98c535a22ccb5db3e616a7db036b))
* is multisig condition ([36eb6da](https://github.com/leather-io/extension/commit/36eb6dac51809f258584ff14d491cc746a4b8b37))
* **stacks:** default to clarity 3, closes [#5983](https://github.com/leather-io/extension/issues/5983) ([38f6907](https://github.com/leather-io/extension/commit/38f690707d72c8df3401c88d434931256ec3b2d1))
* upgrade query pkg ([aebd822](https://github.com/leather-io/extension/commit/aebd822a1ea5d8c06b20aa541a20030e16128869))


### Internal

* bitcoin swaps ([d8dc2fc](https://github.com/leather-io/extension/commit/d8dc2fc526796dd4eaef2f099ddf6492707ca029))
* post-release merge back ([34d5508](https://github.com/leather-io/extension/commit/34d5508a29b608146864539c00a4ce985d8ea3c4))
* post-release merge back ([34d6e0d](https://github.com/leather-io/extension/commit/34d6e0de064341aea1cd4f122a44feeaf2aa2dc7))
* remove gaia account look up ([59945c5](https://github.com/leather-io/extension/commit/59945c51df990a063a19667d850fa535b7951c17))
* stx available balance ([58dbf85](https://github.com/leather-io/extension/commit/58dbf85eb8288031484e5d0a96ae7f30faabfc0f))
* update query package ([c2938a5](https://github.com/leather-io/extension/commit/c2938a5c77e3c6e12596a25293be8d6c2e685076))

## [6.58.1](https://github.com/leather-io/extension/compare/v6.58.0...v6.58.1) (2024-12-27)


### Bug Fixes

* is multisig condition ([907729a](https://github.com/leather-io/extension/commit/907729a4c66bd79d008ca5dd54a320346672804d))

## [6.58.0](https://github.com/leather-io/extension/compare/v6.57.0...v6.58.0) (2024-12-26)


### Features

* add sip10s to account total balance ([0ddf20e](https://github.com/leather-io/extension/commit/0ddf20e8820c0e51b4b373017ee772d386bafa98))
* granular utxo protection feature ([fbb2fed](https://github.com/leather-io/extension/commit/fbb2fede4512e4dd63ad4e4f686d5c3d9c3f3e76))


### Bug Fixes

* account addresses separator ([be6d99e](https://github.com/leather-io/extension/commit/be6d99e186f504146d928b9d942ad1b93804d5fc))
* avaliable balance tooltip ([6b2ccb6](https://github.com/leather-io/extension/commit/6b2ccb6f7c656f348c2ad36150f2770f8197e7c5))
* issue with zindex over iframe inscriptions ([881fca3](https://github.com/leather-io/extension/commit/881fca37aaa534f63222830946b973b9a744b76a))
* styles for inscription options ([48af27a](https://github.com/leather-io/extension/commit/48af27ac1b0d552107a4225ddfe042812ba1b435))
* utxo protection dropdown ([062eede](https://github.com/leather-io/extension/commit/062eede840de9506057392dc5d1f19b5cac36d2b))


### Internal

* post-release merge back ([281d3a5](https://github.com/leather-io/extension/commit/281d3a5a329d2474177a9e44c863a21930e0ced6))
* post-release merge back ([94fa068](https://github.com/leather-io/extension/commit/94fa068e9e7e10cd6ab8a57c6c7d77a577af2dd9))

## [6.57.0](https://github.com/leather-io/extension/compare/v6.56.1...v6.57.0) (2024-12-23)


### Features

* add sip10s to account total balance ([a180644](https://github.com/leather-io/extension/commit/a18064431d2752f5687031be350c3a195ad6061b))
* granular utxo protection feature ([0f55fc9](https://github.com/leather-io/extension/commit/0f55fc978ce48933f23218d1166a53ac7d9d874c))


### Bug Fixes

* styles for inscription options ([d3955fe](https://github.com/leather-io/extension/commit/d3955fed264b7a9bcf1a8c14555c3d682c0e96bc))

## [6.56.1](https://github.com/leather-io/extension/compare/v6.56.0...v6.56.1) (2024-12-21)


### Bug Fixes

* add src20 image types, ref leather-io/mono[#724](https://github.com/leather-io/extension/issues/724) ([a11d4b7](https://github.com/leather-io/extension/commit/a11d4b7ecff2913def201effe272e818cfe79e05))
* broken sbtc supply cap check ([3b22334](https://github.com/leather-io/extension/commit/3b223348a6f3f7f52d74aa8d7a5a45bbb441f03a))
* sbtc swap updates and bugs ([3703202](https://github.com/leather-io/extension/commit/3703202054cb064d1504109f595cd73d13af7c21))


### Internal

* post-release merge back ([49405c5](https://github.com/leather-io/extension/commit/49405c50b00db0d2fde328e4285a6d35024a92b8))
* update platform to extension ([7660e93](https://github.com/leather-io/extension/commit/7660e935190e5cb019172a1cbdbd966678ffc64f))

## [6.56.0](https://github.com/leather-io/extension/compare/v6.55.0...v6.56.0) (2024-12-18)


### Features

* add default set fees, closes [#5930](https://github.com/leather-io/extension/issues/5930) ([e5fb4a8](https://github.com/leather-io/extension/commit/e5fb4a8e1b7b713186b4dd4bd806b3ad9a38a110))
* add mock alex prices ([e096ff2](https://github.com/leather-io/extension/commit/e096ff27bb97c0d27414cdbf886103f63b6211f0))
* adds BNS punycode support gobally ([5c7f1e1](https://github.com/leather-io/extension/commit/5c7f1e1798f45081391ff450a231bb73906ee4b6))
* convert rpc-methods to [@leather](https://github.com/leather).io/rpc types ([238cb11](https://github.com/leather-io/extension/commit/238cb11880297f9f08ec115e230b8706fe5f3416))
* migrate legacy auth request to approver ux ([5153b22](https://github.com/leather-io/extension/commit/5153b2227ea1aee15521b3645860a84f7d55c87b))
* redesign send rpc transfer flow ([9c95c58](https://github.com/leather-io/extension/commit/9c95c5851a77f84915b5f3500df00f2089e03119))
* sbtc integration ([fc1897a](https://github.com/leather-io/extension/commit/fc1897a0d8c3fb2be5df711c6ce5a46a4e82bb6b))
* sponsored sbtc txns ([2fc9629](https://github.com/leather-io/extension/commit/2fc9629524ee0af0f4da651ee42d37a0ebe652c9))


### Bug Fixes

* broken integration test ([3a2535b](https://github.com/leather-io/extension/commit/3a2535b8fb0bd77b092e1189833a299ce746b6cb))
* disable ledger btc swap ([cff46da](https://github.com/leather-io/extension/commit/cff46da739b54078926d81bf1f5e84d6e474ba90))
* endless loading in ledger mode ([33881cc](https://github.com/leather-io/extension/commit/33881cc5595cbf161e9552a3574b7357e86fca14))
* insufficient funds in send max btc flow ([41d75da](https://github.com/leather-io/extension/commit/41d75dab4601a4a4925ec2a2bef9524055fda633))
* **ledger:** increase fee ([d92081e](https://github.com/leather-io/extension/commit/d92081e873309a706a4d5a44eed3e68c492263bb))
* **ledger:** legacy auth flow ([788ba20](https://github.com/leather-io/extension/commit/788ba200218642cd7714be8c6c19e0a6e69f4923))
* manage tokens toggle, closes [#5974](https://github.com/leather-io/extension/issues/5974) ([e25f351](https://github.com/leather-io/extension/commit/e25f3512a76c16e16c597d68ffe684791d2d8b81))
* review screen errors ([f96b3b6](https://github.com/leather-io/extension/commit/f96b3b6516df9d9809615148f0d6f8602b8660ce))
* show loading state until total balance is fully loaded ([91cf37f](https://github.com/leather-io/extension/commit/91cf37f44335b3b89033589ccc8dfe5747262719))
* support regtest address validation ([720fa86](https://github.com/leather-io/extension/commit/720fa86e740d47e388a2b027de82db213c7f9adf))
* update earn banner ([d0c2efc](https://github.com/leather-io/extension/commit/d0c2efc30ec6c5debcc579866d36e5d3f82f7e5d))
* virtuoso list fixed height, closes [#5975](https://github.com/leather-io/extension/issues/5975) ([6704ac5](https://github.com/leather-io/extension/commit/6704ac569d8070c63a7ac1dc864798aa8110f475))


### Internal

* activity list deposit status ([1f61746](https://github.com/leather-io/extension/commit/1f617461a046b676ac1aeef36539b3fe9ea5cbf8))
* fix chrome eslint warning ([50ab064](https://github.com/leather-io/extension/commit/50ab06482893c67118a56478b713630037302408))
* fix links in readme ([742b38d](https://github.com/leather-io/extension/commit/742b38d1015c3ec997896541ebc590787c3d8502))
* fix unused exports ([90ec152](https://github.com/leather-io/extension/commit/90ec1525a0044485f68d5d66503a53a4b545431a))
* generic network name validator ([dda886f](https://github.com/leather-io/extension/commit/dda886f0752b5ccba78de23cfb56325db51efbc9))
* post-release merge back ([0afa9ce](https://github.com/leather-io/extension/commit/0afa9ce6d543b1477a612ca10bb9bc45ccdbf640))
* post-release merge back ([2fb0203](https://github.com/leather-io/extension/commit/2fb020390ed5d50694f61182e7bdf176d80391dc))
* post-release merge back ([490d5c7](https://github.com/leather-io/extension/commit/490d5c7c89f5223fcae67cd09fec100be55e3e21))
* restore @chrome/types ([2533000](https://github.com/leather-io/extension/commit/2533000984fc846440acff314a0c75f30d36e087))
* update version of leather/rpc ([cae6c9a](https://github.com/leather-io/extension/commit/cae6c9a8bd83fbd2bc5ebee80bc78121aa883012))
* upgrade storybook ([678b033](https://github.com/leather-io/extension/commit/678b0333a7fdb01dc5035eb02d4abd78b13084b0))
* use zod for rpc validation ([c38725a](https://github.com/leather-io/extension/commit/c38725aeec071f7bdf983372b7ceb6ba63dc44cb))

## [6.55.0](https://github.com/leather-io/extension/compare/v6.54.0...v6.55.0) (2024-12-17)


### Features

* **sbtc:** update contracts with mainnet addresses ([cd58bce](https://github.com/leather-io/extension/commit/cd58bce6ac63e01495c985971a52cf40bed0b641))

## [6.54.0](https://github.com/leather-io/extension/compare/v6.53.0...v6.54.0) (2024-11-25)


### Features

* add default set fees, closes [#5930](https://github.com/leather-io/extension/issues/5930) ([95cc7c9](https://github.com/leather-io/extension/commit/95cc7c9430dfdbb727c75dd78c638252a40db203))
* add mock alex prices ([56502b7](https://github.com/leather-io/extension/commit/56502b7fe6b67fb048c6769a6a519780d9172e4c))


### Bug Fixes

* insufficient funds in send max btc flow ([531fd94](https://github.com/leather-io/extension/commit/531fd942a81d8daf7f34f626b0e6d9ac84b0d9c3))
* manage tokens toggle, closes [#5974](https://github.com/leather-io/extension/issues/5974) ([b515bd9](https://github.com/leather-io/extension/commit/b515bd93f0dd38d34c0ed8633c7e73d010ec975d))
* support regtest address validation ([33715d1](https://github.com/leather-io/extension/commit/33715d1d984613c2b8a83512c69a3723f217fa01))
* virtuoso list fixed height, closes [#5975](https://github.com/leather-io/extension/issues/5975) ([2987bde](https://github.com/leather-io/extension/commit/2987bde02dc7f5de1eafd639ebdde285c0e7b807))


### Internal

* generic network name validator ([64a6aac](https://github.com/leather-io/extension/commit/64a6aac951e2285663ca6c895ac7a757337eaf08))
* upgrade storybook ([359a17d](https://github.com/leather-io/extension/commit/359a17d7bddbc277406f162746d5e64a23f479ad))
* use zod for rpc validation ([6bbd9b1](https://github.com/leather-io/extension/commit/6bbd9b1eb9211f6f0176e3aa0b2e8407d3fd6c87))

## [6.53.0](https://github.com/leather-io/extension/compare/v6.52.0...v6.53.0) (2024-11-15)


### Features

* change stacks bns name owner fetch fn ([efb409c](https://github.com/leather-io/extension/commit/efb409ca3de5ece98050c24f4065272827afb215))
* fetch zonefile data from bns v2 api ([a677d4f](https://github.com/leather-io/extension/commit/a677d4fccf4f8a9e5b3592984ec49d5bcaa79d14))


### Bug Fixes

* bns overflow issue ([542ee27](https://github.com/leather-io/extension/commit/542ee27354b6f01a90b2ee5bd0e56ad9807c573b))
* do not dismount inscription content on viewport exit ([c7fb8ac](https://github.com/leather-io/extension/commit/c7fb8acaad200bfdc3be0a82e7c94e9cf53e17c7))
* go back from btc and stx choose fee step ([e3cfac7](https://github.com/leather-io/extension/commit/e3cfac7c84bdca6fe22af29eccf9bbcdd7ce857d))


### Internal

* post-release merge back ([744820e](https://github.com/leather-io/extension/commit/744820ed7acbeeb3c6610bf56c235f5c4886e76c))

## [6.52.0](https://github.com/leather-io/extension/compare/v6.51.1...v6.52.0) (2024-11-11)


### Features

* add bash script to run code checks simultaneously ([e38af3e](https://github.com/leather-io/extension/commit/e38af3e57bcca2e8f36dedb835785c098052a9d3))
* add bns v2 names integration test ([fb8cf66](https://github.com/leather-io/extension/commit/fb8cf66c2399f8b0e6106f691872dc3330f41e0e))
* add cancel transaction, ref LEA-958 ([7e16463](https://github.com/leather-io/extension/commit/7e164630277b124966c33c57f115615a333e8b9f))
* add error analytics ([8625fe7](https://github.com/leather-io/extension/commit/8625fe7d9b29386e39839df05d26122ca7b9aa69))
* add sip10 tokens send test ([2b5a954](https://github.com/leather-io/extension/commit/2b5a954e07c2ecc9a8a316d05df8668d9a4ea9ad))
* fetch bns name from bns v2 api, closes LEA-1659 ([f7aaec3](https://github.com/leather-io/extension/commit/f7aaec39c7aab80698f8fba1164b3435cc586ece))
* hide bns archive collectible ([7ef1703](https://github.com/leather-io/extension/commit/7ef170372a8ce2c23d2de983c412f4940325896e))
* remove stacks tx estimated time, LEA-1686 ([fe2a20b](https://github.com/leather-io/extension/commit/fe2a20baaf8af1930cd85ea5db197f402e7258dd))


### Bug Fixes

* codeblock colors ([5cd2b81](https://github.com/leather-io/extension/commit/5cd2b81eeefa35ca01a9c2350fc5a2f898942253))
* manage tokens performance ([e2c4ed8](https://github.com/leather-io/extension/commit/e2c4ed846481f97807f82e203d88c521148255c9))
* multisig transfer send amount, closes [#5941](https://github.com/leather-io/extension/issues/5941) ([e464419](https://github.com/leather-io/extension/commit/e464419a4df67655445c7fa0f47f6923ed2d27a8))
* polyfill storybook webpack node deps ([4ffef3b](https://github.com/leather-io/extension/commit/4ffef3b5cc5591be6df328413b7b60476f1e3de4))
* propagate contract preview handler, closes [#5059](https://github.com/leather-io/extension/issues/5059) ([1da243a](https://github.com/leather-io/extension/commit/1da243a928f0105ff5b160740bff942d0c3b1943))
* update AddressDisplayer occurrences to reflect changes from the ui library ([3e09e9e](https://github.com/leather-io/extension/commit/3e09e9e0747f2ee6a56a3a39b8c2372376f95dc1))
* use correct Fira Code weights ([ddbafe8](https://github.com/leather-io/extension/commit/ddbafe843bd45f2a7f73dad2f3424fe41947f14d))


### Internal

* apply mono package updates ([ec1f44b](https://github.com/leather-io/extension/commit/ec1f44ba12ae99128f0020caad4d6e4feb28f603))
* **ordinals:** remove use of recursive look up of inscriptions ([5a77d53](https://github.com/leather-io/extension/commit/5a77d537ce8092e9390887fa2a8f23933d468971))
* post-release merge back ([27e05c4](https://github.com/leather-io/extension/commit/27e05c497a3d1dbf3bc3b0b8d02becd191d1eef4))
* update deps and type issues ([632a554](https://github.com/leather-io/extension/commit/632a5549d4194cacf9ee9602bb4e4092edf5a403))
* upgrade playwright ([a20ef73](https://github.com/leather-io/extension/commit/a20ef734480d56f7c58dbd67f771e376d15703ea))

## [6.51.1](https://github.com/leather-io/extension/compare/v6.51.0...v6.51.1) (2024-10-28)


### Bug Fixes

* ledger test ([6d18460](https://github.com/leather-io/extension/commit/6d1846086bad94869bea454ec1a5e6189b18b974))
* update failing support test link ([a1d8a7f](https://github.com/leather-io/extension/commit/a1d8a7fde0e94f18bf40a0db1f559f78a01475fa))


### Internal

* post-release merge back ([bdabd61](https://github.com/leather-io/extension/commit/bdabd61c987da09b34c8d250ff8a0d15fb0ca2b0))
* update query package ([68255a1](https://github.com/leather-io/extension/commit/68255a124b3b7e7c5d19ee9f166df0637498584b))

## [6.51.0](https://github.com/leather-io/extension/compare/v6.50.0...v6.51.0) (2024-10-24)


### Features

* change gaia related requests priority levels ([0de2060](https://github.com/leather-io/extension/commit/0de206019f843203377ea05663ae14d0573c4b78))


### Internal

* post-release merge back ([6b95c08](https://github.com/leather-io/extension/commit/6b95c08b721c264d172de8e8a51dc7dd1ccb33ae))

## [6.50.0](https://github.com/leather-io/extension/compare/v6.49.0...v6.50.0) (2024-10-23)


### Features

* support testnet 4, closes LEA-1406 ([399b185](https://github.com/leather-io/extension/commit/399b185c368cffe3d5df15fc0d83d9e78d770cf0))


### Bug Fixes

* contractid missing ([4de6b1e](https://github.com/leather-io/extension/commit/4de6b1e58e15af79446a65a0f77eb19119f643ae))


### Internal

* post-release merge back ([2128d41](https://github.com/leather-io/extension/commit/2128d416b36af2c73657c9fa4ec113f7517e97ae))

## [6.49.0](https://github.com/leather-io/extension/compare/v6.48.1...v6.49.0) (2024-10-22)


### Features

* add manage tokens, closes [#5643](https://github.com/leather-io/extension/issues/5643) ([7d3ac6f](https://github.com/leather-io/extension/commit/7d3ac6faaf91cb82dd6dc7889804c10701ea85c2))


### Internal

* post-release merge back ([775adf8](https://github.com/leather-io/extension/commit/775adf8387ad81621da211284f904b861955ea22))
* remove un-needed p-queue package, ref LEA-1500 ([1df5138](https://github.com/leather-io/extension/commit/1df5138e73a008bbbf8519c89381477e68b5fb1b))

## [6.48.1](https://github.com/leather-io/extension/compare/v6.48.0...v6.48.1) (2024-10-11)


### Bug Fixes

* adjust feedback button display ([be3cf4d](https://github.com/leather-io/extension/commit/be3cf4d7f8ac1ed8af02949a5be448002516d994))
* get addresses focus behaviour, closes [#5899](https://github.com/leather-io/extension/issues/5899) ([8090d45](https://github.com/leather-io/extension/commit/8090d455ec85efe0b937781e23656fe94db3c4d4))


### Internal

* post-release merge back ([749908e](https://github.com/leather-io/extension/commit/749908e80afa8e29d95132dfd44d363b3a47138c))

## [6.48.0](https://github.com/leather-io/extension/compare/v6.47.1...v6.48.0) (2024-10-07)


### Features

* add inscription send flow testing, closes leather-io/issues[#191](https://github.com/leather-io/extension/issues/191) ([54fce3e](https://github.com/leather-io/extension/commit/54fce3e0bcb019d7375ab03334537c90dfbce4ee))
* add option to hide balance, closes leather-io[#5096](https://github.com/leather-io/extension/issues/5096) ([32b064f](https://github.com/leather-io/extension/commit/32b064f7e4f0fef0bbc588ae09280fdeffb42ab6))
* bitflow implemenation, closes leather-io/issues[#99](https://github.com/leather-io/extension/issues/99) ([9c0a6e8](https://github.com/leather-io/extension/commit/9c0a6e82ad579411c394b290629ae06dda12ba45))
* redesign connection flow, closes leather.io/issues[#283](https://github.com/leather-io/extension/issues/283) ([0717b12](https://github.com/leather-io/extension/commit/0717b127fd00c9d5fab4e58c99774a48a4fbb462))


### Bug Fixes

* **analytics:** initial route only used in report analytics ([a253390](https://github.com/leather-io/extension/commit/a2533901962498eb6895a1c3ea9b8108ef6228dc))
* broken styles ([cc6edb5](https://github.com/leather-io/extension/commit/cc6edb56997b3563783b1d4901bc7dde4e020320))
* edit network urls, closes leather-io/extension[#5795](https://github.com/leather-io/extension/issues/5795) ([7256379](https://github.com/leather-io/extension/commit/7256379728d3fb04025c457447952fd722edcd8a))
* path-to-regexp vulnerability GHSA-9wv6-86v2-598j ([36a84dc](https://github.com/leather-io/extension/commit/36a84dc5ea72044b918ea2ab20fdd26809580935))
* refactor add network to use card footer, closes leather-io/issues[#313](https://github.com/leather-io/extension/issues/313) ([68de602](https://github.com/leather-io/extension/commit/68de602240f0fb83899babea56402f5dd28bd4b7))
* secret key stored cleartext in memory ([e0bdec9](https://github.com/leather-io/extension/commit/e0bdec96f9414db28e741baba7f68c224d9339f6))
* security audit failures ([d4c8b48](https://github.com/leather-io/extension/commit/d4c8b48c4cd072f59c9f64eeb323b5c12bd2e978))
* show transaction amount above Increase Fee, closes [#5826](https://github.com/leather-io/extension/issues/5826) ([0a61651](https://github.com/leather-io/extension/commit/0a61651146c32ab0c1826c17a951e6bd3e9e4972))
* storybook icons, closes leather-io/issues[#294](https://github.com/leather-io/extension/issues/294) ([a0b30eb](https://github.com/leather-io/extension/commit/a0b30ebac1632fe827209245148048b6463ee89e))
* update manifest description, closes leather-io/issues[#310](https://github.com/leather-io/extension/issues/310) ([3450e0a](https://github.com/leather-io/extension/commit/3450e0aa26f9a41cad51f361bc392c576812d547))


### Internal

* blockchain model ([6bbb1fa](https://github.com/leather-io/extension/commit/6bbb1faba45f5d28bc44d87637c161cef9a191b8))
* currency model imports ([54e2865](https://github.com/leather-io/extension/commit/54e286551601e77b82b2866cf67dc6b9c8bfc9e5))
* pin node < v22 ([27f3b67](https://github.com/leather-io/extension/commit/27f3b67499eeb71c321784497c02f56476f41bbf))
* post-release merge back ([2b6bc91](https://github.com/leather-io/extension/commit/2b6bc91d7a63fe8d6314dca982152f395c8abc97))
* remove brc20 send flow code ([ad2d69f](https://github.com/leather-io/extension/commit/ad2d69f8d000b905dccffd02c355c28b31e143e1))
* update wbip004 method name, closes [#5866](https://github.com/leather-io/extension/issues/5866) ([d0873e8](https://github.com/leather-io/extension/commit/d0873e8e9877b43afe15adb8b3e3919cc2761f93))
* update webpack ([da58aa7](https://github.com/leather-io/extension/commit/da58aa74c716d52a67eae0648a03a51848901fc4))
* upgrade pnpm ([fb5a46f](https://github.com/leather-io/extension/commit/fb5a46fe8d1e45562f67fb673a63beb2789cc4a3))

## [6.47.1](https://github.com/leather-io/extension/compare/v6.47.0...v6.47.1) (2024-09-03)


### Bug Fixes

* adjust BigTitle padding and close, ref leather-io/extension[#5802](https://github.com/leather-io/extension/issues/5802) ([6b9566a](https://github.com/leather-io/extension/commit/6b9566ad5b3c983ea629cf139057030a4f456279))
* don't show send in header ([d8ed76a](https://github.com/leather-io/extension/commit/d8ed76ab9dec573add48337ac21d88d8d513824d))
* only show Send title above small view, ref [#5802](https://github.com/leather-io/extension/issues/5802) ([f45fedf](https://github.com/leather-io/extension/commit/f45fedf499c6305a0c6470269e6ff40f0c5c290c))
* remove px for all page headers above sm, ref [#5802](https://github.com/leather-io/extension/issues/5802) ([dae0f47](https://github.com/leather-io/extension/commit/dae0f47bdc911a21f34c64f9a00dc22b8060389d))
* send inscription formatting and InfoCardButton icon colour, ref leather-io/extension[#5828](https://github.com/leather-io/extension/issues/5828) ([afc50d5](https://github.com/leather-io/extension/commit/afc50d5a6433ff95e552062c54ad8f756ac7d0dc))
* update padding of onboarding header to align buttons, ref [#5802](https://github.com/leather-io/extension/issues/5802) ([203629d](https://github.com/leather-io/extension/commit/203629d7028eeca076c12a10a7cc680ae98a529d))


### Internal

* fix padding of asset list items in activity, ref [#5802](https://github.com/leather-io/extension/issues/5802) ([3e4d8a2](https://github.com/leather-io/extension/commit/3e4d8a2f322628cbd8f18658f112076765e35324))
* improve open API and add tests, ref leather-io/issues[#5800](https://github.com/leather-io/extension/issues/5800) ([9d52d9e](https://github.com/leather-io/extension/commit/9d52d9e026d2f001d5f4a30cedabc08df17a40fc))
* post-release merge back ([e554376](https://github.com/leather-io/extension/commit/e5543766dd45a1ec24f1aa7a8b1356555cf2b744))
* update link to docs on open, ref [#5800](https://github.com/leather-io/extension/issues/5800) ([003a6ad](https://github.com/leather-io/extension/commit/003a6ad3f88664a67611f47f880420bcdf30838a))

## [6.47.0](https://github.com/leather-io/extension/compare/v6.46.0...v6.47.0) (2024-08-28)


### Features

* add link and unlink mono script ([29f2174](https://github.com/leather-io/extension/commit/29f21741fa526358c5533caf4c0532559122f8f4))
* add mono link ui script ([717737c](https://github.com/leather-io/extension/commit/717737caa2d6d99d043f9d961af901a35a2be055))
* mock hiro ft requests ([6987609](https://github.com/leather-io/extension/commit/69876097a566263a25feecadfef24511b3ace0d4))
* mock nfts and txs hiro requests ([318378d](https://github.com/leather-io/extension/commit/318378d5ad0b3e2d6581517da6760de8e653d228))


### Bug Fixes

* disable brc-20 sends, ref leather-io/issues[#5773](https://github.com/leather-io/extension/issues/5773) ([aafd992](https://github.com/leather-io/extension/commit/aafd99216fd161321a35be33c52d50ca8a17768e))
* rename dialog as sheet, closes ref leather-io/issues[#268](https://github.com/leather-io/extension/issues/268) ([ec64755](https://github.com/leather-io/extension/commit/ec64755288ae61b256bfc0f8d3988511d51c3d17))


### Internal

* add open API, ref leather-io/issues[#5800](https://github.com/leather-io/extension/issues/5800) ([3df62f7](https://github.com/leather-io/extension/commit/3df62f72659b172dadef1c0dd89189f285326b3b))
* icons using ui lib svgs, closes leather-io/issues[#123](https://github.com/leather-io/extension/issues/123) ([3e8314e](https://github.com/leather-io/extension/commit/3e8314ea8bfc4b7ce4b2550b23531b42fe3a0f36))
* post-release merge back ([56d021b](https://github.com/leather-io/extension/commit/56d021bbca81ffbc8bfc0156a609a82f07d1ad0d))
* show BRC-20 tokens on ledger, ref [#5797](https://github.com/leather-io/extension/issues/5797) ([bcc40f7](https://github.com/leather-io/extension/commit/bcc40f775338c1c3d7378da1fd7d3ac4cf8ef4f4))

## [6.46.0](https://github.com/leather-io/extension/compare/v6.45.2...v6.46.0) (2024-08-26)


### Features

* change balance load logic, closes leather-io/issues[#227](https://github.com/leather-io/extension/issues/227) ([faf71fb](https://github.com/leather-io/extension/commit/faf71fb52497a926f17ffd7516687863dc0843a4))


### Bug Fixes

* add default true to show settings to make sure it shows for locked screens, closes [#5777](https://github.com/leather-io/extension/issues/5777) ([96b2990](https://github.com/leather-io/extension/commit/96b2990463ecdffafa19d0a06d2c7bedb1526957))
* do not capitalise add network ([5258d7e](https://github.com/leather-io/extension/commit/5258d7e2dd6c5aae4915e3aa587706e48ee21480))
* empty space in settings dropdown ([d33df6f](https://github.com/leather-io/extension/commit/d33df6fa992cd5650fb88f08ccefaeb0e3e47ea6))
* failing ledger test ([67799fe](https://github.com/leather-io/extension/commit/67799febae1a374854d4f2d44f223aeadc55f878))
* fix formatting of add network ui, closes leather-io/issues[#5735](https://github.com/leather-io/extension/issues/5735) ([8a76b5f](https://github.com/leather-io/extension/commit/8a76b5fe738845b156cbcf7e34834ff0d6e69861))
* fix issues with alignment of page headers ([ea76352](https://github.com/leather-io/extension/commit/ea763521f979a3c272355514b3b4de0f76c16456))
* **ledger:** support stx_signMessage, closes [#5756](https://github.com/leather-io/extension/issues/5756) ([92a99ed](https://github.com/leather-io/extension/commit/92a99ed6c4ded046f0cb85dc3d55a561d4761fe2))
* make headers more composable, prevent logo hover, closes leather-io/issues[#4597](https://github.com/leather-io/extension/issues/4597) ([3f2e359](https://github.com/leather-io/extension/commit/3f2e35963d9d4d9a2b5e8d8fa08bd3ad73260c7a))
* minimum bitcoin spend, closes [#5739](https://github.com/leather-io/extension/issues/5739) ([34405f6](https://github.com/leather-io/extension/commit/34405f661d9b42bd3d5820fd96157dcd7f51a176))
* prevent illegal constructor error ([a774b66](https://github.com/leather-io/extension/commit/a774b66dcc5e7bb9a0cdef6394fe133d4d77c63a))
* remove blockstream from tests and add network form ([86af370](https://github.com/leather-io/extension/commit/86af370bab40367b0dc84b8aeb50d182ff4fd0ad))
* remove card from retrieve taproot ui ([27ca424](https://github.com/leather-io/extension/commit/27ca424be15ed89a764e34f7ac9e2f77294a5cab))
* **sentry:** sample performance units, closes leather-io/issues[#249](https://github.com/leather-io/extension/issues/249) ([3b6a5d8](https://github.com/leather-io/extension/commit/3b6a5d8e82d3491e09f14be309c878bced2d102a))
* tool to clear submitted tx state ([1e6f63d](https://github.com/leather-io/extension/commit/1e6f63ddfaab88debf3233506b6c37a3bedeebcf))
* update ui library and deprecate footer ([0f5cfa2](https://github.com/leather-io/extension/commit/0f5cfa2346abd9055a5913867bae85e9a284344d))
* validate dom nesting console error ([fe21fa8](https://github.com/leather-io/extension/commit/fe21fa812dcf7a478ca6b98bc9503a54dfc8d297))


### Internal

* differentiate action popup and popup, improve responsiveness and refactor footers, ref [#5260](https://github.com/leather-io/extension/issues/5260) ([2cae2a2](https://github.com/leather-io/extension/commit/2cae2a280b68a18feb19a8eec29f2c3dc77d9bdd))
* hide lock option if wallet already locked ([b43cf8b](https://github.com/leather-io/extension/commit/b43cf8b10f2bb7e47358dc32def1e7c94501e852))
* post-release merge back ([686a823](https://github.com/leather-io/extension/commit/686a8238cd40c2900ae606ba0b727c7dfa05af6a))
* remove back button on unlock screen and remove fragment ([9bc13ab](https://github.com/leather-io/extension/commit/9bc13ab71d2e4360d073d66122799ff98ad78dbd))
* update monorepo dependancies ([427f82f](https://github.com/leather-io/extension/commit/427f82f7a4a1cc529c4e6db1c315e7676e97b741))
* update prettier ([9e7d404](https://github.com/leather-io/extension/commit/9e7d4041fd18e3d16bcfce3d9d53756be17a5c48))
* update tanstack libraries ([1486f5c](https://github.com/leather-io/extension/commit/1486f5cb43ccae805ef922a25a08533e185ee631))

## [6.45.2](https://github.com/leather-io/extension/compare/v6.45.1...v6.45.2) (2024-08-12)


### Bug Fixes

* use stacks package ([937c0e2](https://github.com/leather-io/extension/commit/937c0e23a08c66de1c0833c477a674ba33224f32))


### Internal

* post-release merge back ([85db0cc](https://github.com/leather-io/extension/commit/85db0cc578cbf56e0caf78c9da5bffdc14188219))

## [6.45.1](https://github.com/leather-io/extension/compare/v6.45.0...v6.45.1) (2024-08-12)


### Bug Fixes

* schema fail tracking ([de977cb](https://github.com/leather-io/extension/commit/de977cbcf290f55f8a757199ce35a212fc96e310))


### Internal

* post-release merge back ([1f9fc20](https://github.com/leather-io/extension/commit/1f9fc20db189c44fbd203c2c809c5ec1c96cbf2e))

## [6.45.0](https://github.com/leather-io/extension/compare/v6.44.2...v6.45.0) (2024-08-08)


### Features

* add handle network item menu, closes [#5124](https://github.com/leather-io/extension/issues/5124) ([7a778a1](https://github.com/leather-io/extension/commit/7a778a1aa3155a5be47f167726cacd587f6a3c79))
* **analytics:** background analytics event ([967f7b1](https://github.com/leather-io/extension/commit/967f7b1e0e2c3744fadd6a47983ad8d695585e91))
* implement mempool api, closes leather-io/issues[#215](https://github.com/leather-io/extension/issues/215) ([0608cb8](https://github.com/leather-io/extension/commit/0608cb82b728acc814849caacb2ae30d6eddfdf2))


### Bug Fixes

* account change in open frames ([ac21ff8](https://github.com/leather-io/extension/commit/ac21ff8d6183284abb38ea4b2fc5693bde262ec2))
* default to first account as useCurrentStacksAccount returns undefined, ref [#5683](https://github.com/leather-io/extension/issues/5683) ([d67d238](https://github.com/leather-io/extension/commit/d67d2388ceaa6f3bb2c1cfa64a8d2f0609c069c6))
* disable stx transfer if form is not valid ([8c9dc16](https://github.com/leather-io/extension/commit/8c9dc16c491f5b32765557d547fdda1e4f0749ca))
* empty logo in popup mode ([10af7db](https://github.com/leather-io/extension/commit/10af7db287374daced7a5d58344077b6d7093eea))
* fix visual bug on hover of PSBT copy, ref [#4972](https://github.com/leather-io/extension/issues/4972) ([64d2fb6](https://github.com/leather-io/extension/commit/64d2fb68950c18062ee6906703fccd30c9f066f9))
* logo box show ([0cf3dae](https://github.com/leather-io/extension/commit/0cf3dae876595739c906d1fa39b8db81fff47ed2))
* mainnet faker contract address ([17d71a8](https://github.com/leather-io/extension/commit/17d71a80134deceb5e5d30ce8ff84e027fd807df))
* remove sign out if there are no keys ([051b1b5](https://github.com/leather-io/extension/commit/051b1b546fab11305dc3b4433628212ea6cd8b9d))


### Internal

* force resolution of fast-xml-parser ([bbded02](https://github.com/leather-io/extension/commit/bbded0279fa9da87c76180ba264890cc06cdb8c8))
* import DialogHeader from monorepo ([1878330](https://github.com/leather-io/extension/commit/187833081ccbbccb76839a28b214ee8ddc33dba4))
* post-release merge back ([8a77da4](https://github.com/leather-io/extension/commit/8a77da45c08268bdefbeb6eb54e46299b85cd2c1))
* readd fragments to help escape single quote ([8ac4349](https://github.com/leather-io/extension/commit/8ac4349a1e051569baef9990c49f428c73cec37e))
* refactor containers to make them more composable, ref [#4370](https://github.com/leather-io/extension/issues/4370) ([231842f](https://github.com/leather-io/extension/commit/231842f59a60b8d5e7ca447ff0bf8cd7cc7ebd31))
* refactor switch-account to use shared context ([10254d9](https://github.com/leather-io/extension/commit/10254d931070536f4251d5dbe17de4d2dec3742f))
* refactor TwoColumn to remove unneeded fragments ([b5b7988](https://github.com/leather-io/extension/commit/b5b7988fd6332f316cad1d87784a1b3519bd7f5e))
* update org name ([da5cc05](https://github.com/leather-io/extension/commit/da5cc05b1e2be631282ca3f29dc5527f26dc0214))
* update react-virtuoso package ([c874c00](https://github.com/leather-io/extension/commit/c874c00e80d71f25730230502eb12a3370846e12))
* update ui and query packages ([5e2547c](https://github.com/leather-io/extension/commit/5e2547c7b15f5fd78dd000b59871fade2babd36b))

## [6.44.2](https://github.com/leather-io/extension/compare/v6.44.1...v6.44.2) (2024-07-29)


### Bug Fixes

* inscription send error state layout ([f955408](https://github.com/leather-io/extension/commit/f95540896174e4e1a6b2697e4aa72b27066a48d7))
* **rpc:** return stxPublicKey from getAddresses ([4972a54](https://github.com/leather-io/extension/commit/4972a54e46279e2670a6d826ffd3800ad55dd14d))
* send inscription review button ([c353367](https://github.com/leather-io/extension/commit/c353367ee9c49c5314d15be9115ef4a17030e14c))


### Internal

* post-release merge back ([3c81db3](https://github.com/leather-io/extension/commit/3c81db384318ab70740ea362c6483ebe66ba28e3))
* update packages ([0353b33](https://github.com/leather-io/extension/commit/0353b33844f4ae7ed6a2e4619f7c5aad63173539))

## [6.44.1](https://github.com/leather-io/extension/compare/v6.44.0...v6.44.1) (2024-07-25)


### Bug Fixes

* handle long token names gracefully, ref leather-wallet/extension[#5673](https://github.com/leather-io/extension/issues/5673) ([3110f7e](https://github.com/leather-io/extension/commit/3110f7ef7b36862441b9afef5748234d7b794e78))
* rate limiting on testnet ([f4258cd](https://github.com/leather-io/extension/commit/f4258cde47540998f3a546fbc4e27cb9a04d032a))
* security vulnerability with ip pkg in storybook ([85d34b3](https://github.com/leather-io/extension/commit/85d34b3f7a9b870d516a559be5cd6da3c56fdf46))
* send inscription flow validation error ([8030d3a](https://github.com/leather-io/extension/commit/8030d3afbdadc062211b4adea4cb53c1eece2cd8))
* stx fallback btn show on load ([95d6ea5](https://github.com/leather-io/extension/commit/95d6ea5e307e13a4d6feab66e939bb7591344247))
* update popup headers to show account info, ref leather-wallet/issues[#157](https://github.com/leather-io/extension/issues/157) ([93ad45f](https://github.com/leather-io/extension/commit/93ad45f3f93120c0556bf1b01afe52aab38d3764))


### Internal

* bitcoin queries, closes leather-io/issues[#94](https://github.com/leather-io/extension/issues/94) and leather-io/issues[#101](https://github.com/leather-io/extension/issues/101) ([1187acf](https://github.com/leather-io/extension/commit/1187acf3bbd43332f89c151c1926288d04b8c093))
* **release:** 6.44.0 ([9fc4eb4](https://github.com/leather-io/extension/commit/9fc4eb4d34a95e3d94a4dca9086f4be44a79a16b)), closes [#5300](https://github.com/leather-io/extension/issues/5300) [#5440](https://github.com/leather-io/extension/issues/5440) [#5626](https://github.com/leather-io/extension/issues/5626) [#5244](https://github.com/leather-io/extension/issues/5244) [#69](https://github.com/leather-io/extension/issues/69)
* stacks queries ([5041cfb](https://github.com/leather-io/extension/commit/5041cfbf820c29b7eb63246e7df311b0fb96e995))

## [6.44.0](https://github.com/leather-io/extension/compare/v6.43.0...v6.44.0) (2024-07-17)


### Features

* add debug command to log hiro limiter data ([52a0c15](https://github.com/leather-io/extension/commit/52a0c15c8919e86b7414309585cedfc3e6b01c81))
* add runes fiat balance, closes [#5300](https://github.com/leather-io/extension/issues/5300) ([0a175f7](https://github.com/leather-io/extension/commit/0a175f7edaf4d002cb26da62b25513b88f1fe683))
* auto-scale balance font-size to avoid line-break ([b25d5bc](https://github.com/leather-io/extension/commit/b25d5bc43b68991da9dece4fe4ebdd835896074e))


### Bug Fixes

* **analytics:** remove query error tracking, too many events ([f3de110](https://github.com/leather-io/extension/commit/f3de110f65d0165d9cfef591a1a690b78ad075e3))
* **analytics:** segment not passing context to mixpanel ([52a6fb2](https://github.com/leather-io/extension/commit/52a6fb2487a59687535104e9dbbcb696fa4c915c))
* send forms address error, closes [#5440](https://github.com/leather-io/extension/issues/5440) ([0b99130](https://github.com/leather-io/extension/commit/0b991308e5e050165fb067bda9e673c9a1aaf66a))
* show brc20 token fiat balance, closes [#5626](https://github.com/leather-io/extension/issues/5626) ([adf8c19](https://github.com/leather-io/extension/commit/adf8c190e756dfe7467ec6421a1a45115f040f72))
* stx balance loading condition ([37686a4](https://github.com/leather-io/extension/commit/37686a4508fd35636193e195e278a02e4390b282))


### Internal

* post-release merge back ([db89bdd](https://github.com/leather-io/extension/commit/db89bddea0627884b532bca402993313c3ac1270))
* remove bitcoin contracts, closes [#5244](https://github.com/leather-io/extension/issues/5244) and leather-io/issues[#69](https://github.com/leather-io/extension/issues/69) ([1b9f9a2](https://github.com/leather-io/extension/commit/1b9f9a28dbd25665524dbd7f6acc2e541d4bb3dc))
* update query cache with known data ([69a4e0c](https://github.com/leather-io/extension/commit/69a4e0c5e1e1f6e24879f01aaccf9dbceb781bb5))
* update query package ([98beec5](https://github.com/leather-io/extension/commit/98beec57b4cd0647058c2f28a91d03691dea4f0d))

## [6.43.0](https://github.com/leather-io/extension/compare/v6.42.2...v6.43.0) (2024-07-15)


### Features

* add Leather to WBIP004 array, closes [#5615](https://github.com/leather-io/extension/issues/5615) ([e38f6ab](https://github.com/leather-io/extension/commit/e38f6ab36e8e0c333571adeefbac3c57b00b7c8c))
* mock mainnet btc blockstream requests ([16d751c](https://github.com/leather-io/extension/commit/16d751c7b10e2ba056f99256286ddd4d2f36ce32))


### Bug Fixes

* choose account prevent bug, closes [#5509](https://github.com/leather-io/extension/issues/5509) ([89500a8](https://github.com/leather-io/extension/commit/89500a807095c31b275d279b4c86fc5760cee096))
* collectible hover, closes [#4971](https://github.com/leather-io/extension/issues/4971) ([7728eeb](https://github.com/leather-io/extension/commit/7728eeb356904244a3b484da2d9c649ea8b58143))
* confine clickable area of account switcher to account name and chevron, closes [#5621](https://github.com/leather-io/extension/issues/5621) ([472c7e4](https://github.com/leather-io/extension/commit/472c7e4b416e42ff2bedf1d1f786a6bb2aa5b8e6))
* dust change amounts, closes [#4979](https://github.com/leather-io/extension/issues/4979) ([8b40ea7](https://github.com/leather-io/extension/commit/8b40ea79680323479889e35f3a1e31ce941abfdf))
* increase zIndex of tooltip to prevent it being obscured, closes [#5622](https://github.com/leather-io/extension/issues/5622) ([a1f86bb](https://github.com/leather-io/extension/commit/a1f86bbab9b6af8e03d4ec40475519e61ab6992b))
* show account name in signPsbt and signBip322 header, ref [#4657](https://github.com/leather-io/extension/issues/4657) [#4859](https://github.com/leather-io/extension/issues/4859) ([71f2565](https://github.com/leather-io/extension/commit/71f2565d19392a88901380a74961f9cece6301b6))


### Internal

* add new analytics events ([3f9548e](https://github.com/leather-io/extension/commit/3f9548e3eb2a56eb9e3a5e7cc43fbc7c9f852d86))
* post-release merge back ([c1bbf89](https://github.com/leather-io/extension/commit/c1bbf89ba86ff86f190edf8687a9441433fca7cb))
* reenable swaps, closes leather-io/issues[#98](https://github.com/leather-io/extension/issues/98) ([5faba22](https://github.com/leather-io/extension/commit/5faba22cd6aa32bfee2b2eac2d08d88473b9ebeb))

## [6.42.2](https://github.com/leather-io/extension/compare/v6.42.1...v6.42.2) (2024-07-02)


### Bug Fixes

* add ledger test for bitcoin api calls, close leather-io/issues[#114](https://github.com/leather-io/extension/issues/114) and [#5574](https://github.com/leather-io/extension/issues/5574) ([26b6b4f](https://github.com/leather-io/extension/commit/26b6b4f70b3c847f98bdd389ec5f8af2934b8089))
* add network form bitcoin network selector ([2169065](https://github.com/leather-io/extension/commit/21690654c92d522e47753754c7016e193868cc12))
* adjust collectible arrow hover transparancy, closes [#4971](https://github.com/leather-io/extension/issues/4971) ([4571ad7](https://github.com/leather-io/extension/commit/4571ad75089b0a81f504ed2b7a5b2cb8020327cb))
* apply spamFilter to all crypto captions and titles, ref leather-wallet/issues[#5589](https://github.com/leather-io/extension/issues/5589) ([ed284b9](https://github.com/leather-io/extension/commit/ed284b937f217aa4f2b40ce385d908e4b8e07840))
* asset row skeleton loader, closes [#5466](https://github.com/leather-io/extension/issues/5466) ([9b1c8c7](https://github.com/leather-io/extension/commit/9b1c8c755d9302d4d9a843c69af7d22445852060))
* integrate tabs, toast, avatar, address  ref leather-wallet/issues[#64](https://github.com/leather-io/extension/issues/64) ([930c125](https://github.com/leather-io/extension/commit/930c1252582da270ef58ae29e30c2d40157bc8c3))
* ledger bitcoin query ([a11f6a6](https://github.com/leather-io/extension/commit/a11f6a6919d173f129ff1f4dab78a1a958377851))
* refactor dialog to use IconButton to fix title without affecting header, closes [#5470](https://github.com/leather-io/extension/issues/5470) ([a5011ec](https://github.com/leather-io/extension/commit/a5011ece72a27c399fbf2e0b0ae5f9082c7b495f))
* remove extra div, ref leather-io/issues[#5469](https://github.com/leather-io/extension/issues/5469) ([abdaab5](https://github.com/leather-io/extension/commit/abdaab58f00fab948f56bbdaee211414b3e771b9))
* responsive width for popup ([c61ced0](https://github.com/leather-io/extension/commit/c61ced083873444430700249b61aef1c28e08647))
* roll back import of dropdown menu,  ref leather-wallet/issues[#64](https://github.com/leather-io/extension/issues/64) ([b03d6af](https://github.com/leather-io/extension/commit/b03d6afa5ee1054ab7fc9dba38e746fc0a5d95fc))
* stx send form high fee warning, closes [#5362](https://github.com/leather-io/extension/issues/5362) ([0af3ae9](https://github.com/leather-io/extension/commit/0af3ae9e25473c66e3fe62979716babae74e70ff))
* **ui:** center header, ref leather-io/issues[#5470](https://github.com/leather-io/extension/issues/5470) ([53d1e6c](https://github.com/leather-io/extension/commit/53d1e6ca7609fece3717bec6efbb9d3b7cfcaf9f))
* use dialog from monorepo,  ref leather-wallet/issues[#108](https://github.com/leather-io/extension/issues/108) ([de2b5a0](https://github.com/leather-io/extension/commit/de2b5a094904f90b8896670c1061b3c8ce06076b))
* use DropDown menu from monorepo for Settings,  ref leather-wallet/issues[#102](https://github.com/leather-io/extension/issues/102) ([65131b0](https://github.com/leather-io/extension/commit/65131b02c4e19eb04fa7f6a00fb28bc187a44d09))


### Internal

* **analytics:** use uniform api with middlewear, remove wrapper fns ([c82ed26](https://github.com/leather-io/extension/commit/c82ed263c09ba30834b5a4b30fc774ae90b93bcf))
* install @leather-wallet/ui package, ref leather-wallet/issues[#64](https://github.com/leather-io/extension/issues/64) ([12dca36](https://github.com/leather-io/extension/commit/12dca36cdebd0a2ff9f9df35f56ce0e633a1056c))
* post-release merge back ([834d399](https://github.com/leather-io/extension/commit/834d39938043dca81bf160606da919399cf6d849))
* remove radix-ui base css styles, ref leather-wallet/issues[#104](https://github.com/leather-io/extension/issues/104) ([d5ebb6b](https://github.com/leather-io/extension/commit/d5ebb6b48d3d67a974a4606be866c215d2a09462))
* rename github org ([5d42eeb](https://github.com/leather-io/extension/commit/5d42eebed0bb2763cd607293e83cd488a04f251e))
* rename npm package scope ([7851c44](https://github.com/leather-io/extension/commit/7851c44d3ab19fe4acac566a2b062e088b009604))
* specify resolution for ws ([ff74653](https://github.com/leather-io/extension/commit/ff74653717d10e87c1cf2a63d3310f347e204378))
* undo width change ([d3595f4](https://github.com/leather-io/extension/commit/d3595f48baebb41b075c42244964a5f06308c436))
* update dependancies ([62500b8](https://github.com/leather-io/extension/commit/62500b8626568c8b25d5fe0687f556ea7fd9252c))
* update monorepo dependancies ([7ec537b](https://github.com/leather-io/extension/commit/7ec537bd2131185210a691e470541de3852ca971))
* update monorepo packages ([263adcd](https://github.com/leather-io/extension/commit/263adcd6a722aa3ef85f985d0657141faafad7c9))
* upgrade react query to v5 ([6184a3d](https://github.com/leather-io/extension/commit/6184a3da33aba1bb1957b43b45bc8504de20171e))

## [6.42.1](https://github.com/leather-wallet/extension/compare/v6.42.0...v6.42.1) (2024-06-17)


### Bug Fixes

* add crypto pkg ([4136b4a](https://github.com/leather-wallet/extension/commit/4136b4a3be7dc8efe723220659f240b33d60cebd))
* relocated stacks fee types ([d8be118](https://github.com/leather-wallet/extension/commit/d8be118165f6bcf3964282ca27fc28b6ec408682))
* remove early test return ([e888a71](https://github.com/leather-wallet/extension/commit/e888a719186ea1a08eceb6d677a45a84ffe3b5c3))
* sign out unknown wallet type error ([89ebaa3](https://github.com/leather-wallet/extension/commit/89ebaa3b9db9b10f81de6848081c94dbc401a085))
* **ui:** disable pointer events on label ([22f727e](https://github.com/leather-wallet/extension/commit/22f727e6d5efb931dcd491b6e4bebe3cf22f7b4e))


### Internal

* add constants package to extension ([5048be3](https://github.com/leather-wallet/extension/commit/5048be3be28c7b3dd5d3a2715a3d33385c913a70))
* post-release merge back ([34134a0](https://github.com/leather-wallet/extension/commit/34134a07af9e5ca1f59f782cfa25d6c503b0f7a8))
* post-release merge back ([3ef09f1](https://github.com/leather-wallet/extension/commit/3ef09f12305b8f3f405794e440f70c8e38a9bfc2))
* remove stacks and bitcoin tx models out of extension ([8754ecc](https://github.com/leather-wallet/extension/commit/8754eccd5f3455d0ab4fd97f4308ff64bae483a9))
* remove survey banner ([2c2aa5f](https://github.com/leather-wallet/extension/commit/2c2aa5fd7161be861c3c284e7af12c24c669dd30))
* remove unused ecpair pkg ([52025c6](https://github.com/leather-wallet/extension/commit/52025c6826676ab07317ffee766fd4b74126ec87))
* update cbpay ([6ed7969](https://github.com/leather-wallet/extension/commit/6ed7969dd8e4575155711c4efe877f29088ec23e))
* use bitcoin methods from mono, closes leather-wallet[#47](https://github.com/leather-wallet/extension/issues/47) ([af77063](https://github.com/leather-wallet/extension/commit/af770631e3fa5289efd10173b689b8c7f602df64))
* use stacks query pkg, closes [#68](https://github.com/leather-wallet/extension/issues/68) and [#5070](https://github.com/leather-wallet/extension/issues/5070) ([9c67eaf](https://github.com/leather-wallet/extension/commit/9c67eaf97bdbadfad42be7601379249b0ec50bc9))

## [6.42.0](https://github.com/leather-wallet/extension/compare/v6.41.1...v6.42.0) (2024-06-06)


### Features

* add query error analytics ([f46cc89](https://github.com/leather-wallet/extension/commit/f46cc89f2fb355dbb25f041d8f35517a17e7d2f4))
* panda preset package, ref leather-wallet/issues[#62](https://github.com/leather-wallet/extension/issues/62) ([36e5238](https://github.com/leather-wallet/extension/commit/36e52388cbf4d765942d228e776d334fbf44984f))
* update error page ([4fd1dbe](https://github.com/leather-wallet/extension/commit/4fd1dbed8da1a51715ebe1df01073745adf83a71))
* use bitcoin queries from monorepo + inscriptions from monorepo ([2f113fc](https://github.com/leather-wallet/extension/commit/2f113fccf61457dff0f9c43b1c823e8e6fb32642))


### Bug Fixes

* align DialogHeader title on center, ref [#5419](https://github.com/leather-wallet/extension/issues/5419) ([2e7fd2d](https://github.com/leather-wallet/extension/commit/2e7fd2d87c2fd6f30b7e5e19d62b1b11119bc86e))
* always set memo for SIP10, ref [#5436](https://github.com/leather-wallet/extension/issues/5436) ([40f6059](https://github.com/leather-wallet/extension/commit/40f605935d99d8fa375c3fb1937d99fcb1ecab96))
* asset list formatted balance, closes [#5452](https://github.com/leather-wallet/extension/issues/5452) ([81f4fa8](https://github.com/leather-wallet/extension/commit/81f4fa861475b4a2eabb5f0a5039d1f476ced0eb))
* asset models contractid inconsistencies ([d023622](https://github.com/leather-wallet/extension/commit/d02362221411e2d15538598b1679321644ab32a3))
* close button still showing in breakpoint ([632a32d](https://github.com/leather-wallet/extension/commit/632a32d7247f10761993df3747a44bdbfe9b171b))
* display runes balance, closes [#5434](https://github.com/leather-wallet/extension/issues/5434) ([aa50a08](https://github.com/leather-wallet/extension/commit/aa50a08b0250e1cb1748da8143995369f332f21a))
* extension build workflow, ref leather-wallet/issues[#72](https://github.com/leather-wallet/extension/issues/72) ([a24c6de](https://github.com/leather-wallet/extension/commit/a24c6de2a3e8e9cf87cb924dd6c4c08c3ad03c02))
* handle undefined memo type for SIP10, ref [#5436](https://github.com/leather-wallet/extension/issues/5436) ([b98a5e7](https://github.com/leather-wallet/extension/commit/b98a5e749abb34dc0b16b7283a4921e279c231d9))
* inconsistent typing with txValue ([56d4fa2](https://github.com/leather-wallet/extension/commit/56d4fa238d71878c05561a2c5154f9e88a8a819e))
* integration tests setup ([ea2d8ea](https://github.com/leather-wallet/extension/commit/ea2d8eacef89aad169633389cc338afd38e5d760))
* **long-bns-names:** truncate BNS names ([a45024a](https://github.com/leather-wallet/extension/commit/a45024a4f2dac631a54713755d4531445573b35f))
* merge main conflicts ([176b0d8](https://github.com/leather-wallet/extension/commit/176b0d8128de015685c2522445dd9bcd8b80fb29))
* reenable compliance checks ([e9d7ed2](https://github.com/leather-wallet/extension/commit/e9d7ed206c90f7cb4f9501ae8e3b9b61d20e7f00))
* remove hover style in sign out button, ref [#5406](https://github.com/leather-wallet/extension/issues/5406) ([3656acf](https://github.com/leather-wallet/extension/commit/3656acfb64ab77d698c835324fdcfc5a4c77c1ec))
* scroll in settings menu popup ([348d688](https://github.com/leather-wallet/extension/commit/348d6883aa2f74f36ef2b42d897a85cc0f0d728a))
* set pointer events to none in toast viewport ([093856e](https://github.com/leather-wallet/extension/commit/093856edc3c1c3fb58aebcb84227e3f60b3c0f1b))
* tests using test app ([51e05fb](https://github.com/leather-wallet/extension/commit/51e05fb302bf649843f37dccba2ae841ae79cf0d))
* warn users against using support tool for help ([755448f](https://github.com/leather-wallet/extension/commit/755448ff25eadc612880b305ab47940680df25c1))


### Internal

* **deps:** bump @leather-wallet/tokens from 0.0.14 to 0.4.0 ([8b26fdd](https://github.com/leather-wallet/extension/commit/8b26fddd94d5566b32a4b615d6fcfa211e09fb1d))
* move fees models out of extension ([a48ba01](https://github.com/leather-wallet/extension/commit/a48ba01b0ca1c9797ccef507acc7fd830ffd0d4d))
* move money and market utils out of extension ([ab7fb16](https://github.com/leather-wallet/extension/commit/ab7fb16365a8be5be1eafa1dfb62e6f7411bf74b))
* post-release merge back ([281e718](https://github.com/leather-wallet/extension/commit/281e71862f306e30bbb62abaf5918691acaf57d4))
* update panda + panda-preset ([8489f69](https://github.com/leather-wallet/extension/commit/8489f69330dbdf74404a91b3ba1522e405d4dcc5))
* update pnpm ([b3411dc](https://github.com/leather-wallet/extension/commit/b3411dc41ef468e20b24ab0a6a33e58ec5bf1a71))
* upgade @stacks/* packages, closes [#5184](https://github.com/leather-wallet/extension/issues/5184) ([3f53051](https://github.com/leather-wallet/extension/commit/3f530515ffa014a88b5bd08b7b2140dff6478b4a))
* upgrade @noble/* packages ([aea1c99](https://github.com/leather-wallet/extension/commit/aea1c99e196f8ddcda29ca98ccf6a3d89ecedb37))
* upgrade leather packages ([b117fab](https://github.com/leather-wallet/extension/commit/b117fab0b1d5b63881557690e9044ebdf69ebc92))
* upgrade various dependencies ([16b7567](https://github.com/leather-wallet/extension/commit/16b75672c9af7da6aed26942f2dbd1484cf78f19))
* **utils:** migrate money utils out of extension ([43ad127](https://github.com/leather-wallet/extension/commit/43ad127197c64437f61810ffbca5e54bb4954d03))
* **utils:** mirgrate more utils out of extension ([d8e0088](https://github.com/leather-wallet/extension/commit/d8e0088e97fbe8c195c6040c05764322c112faf4))
* **utils:** use utils package, closes leather-wallet[#73](https://github.com/leather-wallet/extension/issues/73) ([53430a7](https://github.com/leather-wallet/extension/commit/53430a717d3108389ab0c8aeddbc04f0a1d05520))

## [6.41.1](https://github.com/leather-wallet/extension/compare/v6.41.0...v6.41.1) (2024-05-24)


### Bug Fixes

* always set memo for SIP10, ref [#5436](https://github.com/leather-wallet/extension/issues/5436) ([9a8d965](https://github.com/leather-wallet/extension/commit/9a8d965ffdeec6462cf58c314a788e26e44fa043))
* display runes balance, closes [#5434](https://github.com/leather-wallet/extension/issues/5434) ([76ee219](https://github.com/leather-wallet/extension/commit/76ee21911182fdb9b1f06777972888bd19675d6c))
* handle undefined memo type for SIP10, ref [#5436](https://github.com/leather-wallet/extension/issues/5436) ([613ab55](https://github.com/leather-wallet/extension/commit/613ab5525b0e5f316966b08990043236a08463ee))

## [6.41.0](https://github.com/leather-wallet/extension/compare/v6.40.0...v6.41.0) (2024-05-22)


### Features

* remove increase fee summary page, closes [#5305](https://github.com/leather-wallet/extension/issues/5305) ([2db97bd](https://github.com/leather-wallet/extension/commit/2db97bd23547985a94d03104836c00b7bda562dc))


### Bug Fixes

* fix padding on back button, ref leather-wallet/issues[#25](https://github.com/leather-wallet/extension/issues/25) ([3a42fc9](https://github.com/leather-wallet/extension/commit/3a42fc9848c124e37035ce8d3a41b82eac998450))
* investigate stx fee issues ([c5e04c1](https://github.com/leather-wallet/extension/commit/c5e04c144789d94bcdabcea767fa63ce09f98da8))
* missing token color ([caa4c88](https://github.com/leather-wallet/extension/commit/caa4c88ae8fc5f1e71a7090c34565d3e93598c32))
* regtest address generation, closes [#5401](https://github.com/leather-wallet/extension/issues/5401) ([0c6c4d1](https://github.com/leather-wallet/extension/commit/0c6c4d17f2dc12ac1c84a644f9a2586e3f44dded))
* sip10 token send form fees bug ([5903a7b](https://github.com/leather-wallet/extension/commit/5903a7bd35d85328920085fbad0c7196ced39780))
* stamp error reporting ([9b77421](https://github.com/leather-wallet/extension/commit/9b77421b2c920dd75de57323ceb5a4af09428df7))
* tsconfig update for tokens pkg ([9699d76](https://github.com/leather-wallet/extension/commit/9699d761064bfaa451b30ffbcee68e15272bac2a))


### Internal

* add defensive code and better analytics for broadcast errors, ref [#5118](https://github.com/leather-wallet/extension/issues/5118) ([a36dae4](https://github.com/leather-wallet/extension/commit/a36dae45740d597b30e210d63744b14c247ae912))
* post-release merge back ([ca9cf0b](https://github.com/leather-wallet/extension/commit/ca9cf0bd288fcdc60489d1b9d22a7d7087f2a217))
* remove combined asset model, closes [#48](https://github.com/leather-wallet/extension/issues/48) ([a827b40](https://github.com/leather-wallet/extension/commit/a827b4033c80b95ecd1235c1a42b29e6acbd1760))

## [6.40.0](https://github.com/leather-wallet/extension/compare/v6.39.0...v6.40.0) (2024-05-17)


### Features

* add link in swaps disabled tooltip ([93f8964](https://github.com/leather-wallet/extension/commit/93f8964bf7d699335ea280e1b19739c069df8f12))
* enable btc retrieval, closes [#5067](https://github.com/leather-wallet/extension/issues/5067) ([92d9603](https://github.com/leather-wallet/extension/commit/92d9603b109c4f98ebbaba423e2d03727a6c8ab4))


### Bug Fixes

* brc20 sends software only ([4983476](https://github.com/leather-wallet/extension/commit/4983476113062279d136eedd7a625728f293fcfd))
* go back properly and don't allow user to close non cancellable ledger actions, closes [#5143](https://github.com/leather-wallet/extension/issues/5143) ([c28342b](https://github.com/leather-wallet/extension/commit/c28342bb165380848fb046ed1ea0ed3412f8fde5))
* **ledger:** use correct key number ([56100bf](https://github.com/leather-wallet/extension/commit/56100bf787a1521f4f60b6423d00af6ae1facf02))
* only decorate psbt inputs without an existing nonWitnessUtxo ([d47f87b](https://github.com/leather-wallet/extension/commit/d47f87b94e4b0e3699d793544ff88dd4a39b3396))
* show correct amount for nonWitnessUtxo, ref [#5113](https://github.com/leather-wallet/extension/issues/5113) ([65a4f52](https://github.com/leather-wallet/extension/commit/65a4f526fd1a670b0df5fef357e6be221f7b1433))
* show correct UI count for BTC addresses being pulled, ref [#4983](https://github.com/leather-wallet/extension/issues/4983) ([9f73b24](https://github.com/leather-wallet/extension/commit/9f73b24e6f16970f1d7355956dd918bec8bb5f85))
* utxos and transaction request cancellation, closes [#5058](https://github.com/leather-wallet/extension/issues/5058) ([ae1b04b](https://github.com/leather-wallet/extension/commit/ae1b04bdac3b8fcdb708f24adea39f9ad59c0c83))


### Internal

* add backgroundLocation for device busy step ([e288d41](https://github.com/leather-wallet/extension/commit/e288d412b890c1204a265e68aa527c82aa21ea6d))
* assets and asset list ([88939cc](https://github.com/leather-wallet/extension/commit/88939cc160d1a10927b329d728e6133a7e521909))
* btc balance ([bbc43d6](https://github.com/leather-wallet/extension/commit/bbc43d6e1f8a8e5c620d844e068832d863ade8b0))
* post-release merge back ([61b8171](https://github.com/leather-wallet/extension/commit/61b81716112fc081afc7a80e45c6e3782ee6ede0))
* refactor canclose ([d275ad7](https://github.com/leather-wallet/extension/commit/d275ad7f7fb1f1cd830068bd8faf726566d3fc21))
* stx balance ([4e3190f](https://github.com/leather-wallet/extension/commit/4e3190f45debd32f461d388f9ef097ef5d289b7d))
* temporarily disable swaps feature ([e34d5f3](https://github.com/leather-wallet/extension/commit/e34d5f33f9a0c4fcac09b9b2300d8063792a27e4))
* update packages ([c685b10](https://github.com/leather-wallet/extension/commit/c685b10d618744609135feb90f84573b7f408c54))

## [6.39.0](https://github.com/leather-wallet/extension/compare/v6.38.0...v6.39.0) (2024-05-14)


### Features

* hide asset list unsupported tokens in accordion, closes [#16](https://github.com/leather-wallet/extension/issues/16) ([f37bb1b](https://github.com/leather-wallet/extension/commit/f37bb1bf4c0714a1b51fd3b363665ae0b3a85649))


### Bug Fixes

* add schema validation for stamps ([7a89337](https://github.com/leather-wallet/extension/commit/7a8933765e0f5b479cfb83149e99223bb6ebfc1e))
* change default to pulling 10 keys ([b5c9c79](https://github.com/leather-wallet/extension/commit/b5c9c79811d3f7e2b599abeb698b3acba26c7727))
* compliance checks reenabled ([d0c17ec](https://github.com/leather-wallet/extension/commit/d0c17ec478fccdd4a1847906287006d52a41d8ba))
* constant retrying of metadata ([540c349](https://github.com/leather-wallet/extension/commit/540c3495a6ca034f6623e97f977fc17324564343))
* double stacks asset in ledger mode ([5d9895f](https://github.com/leather-wallet/extension/commit/5d9895f7beefdedf49c21e6c00b727ab4cbc6fcc))
* remove ledger add more keys route, ref [#4786](https://github.com/leather-wallet/extension/issues/4786) ([45c9968](https://github.com/leather-wallet/extension/commit/45c99682d13397e420bb58dd785ce044cc262f5b))
* use nakamoto testnet link when network is set to nakamoto testnet ([e522113](https://github.com/leather-wallet/extension/commit/e522113f590dd4636f2d9a3002c91488697a11dd))


### Internal

* input calc helper methods ([16a9e6e](https://github.com/leather-wallet/extension/commit/16a9e6e47306dada77843a5632c0400fe73f2a10))
* post-release merge back ([9caef96](https://github.com/leather-wallet/extension/commit/9caef965f3e73dbe3c0c53d98d2b96ba26fb9c50))
* remove multiple recipients components ([8f83bcc](https://github.com/leather-wallet/extension/commit/8f83bcc5438de77850f3bd064afd7bd2aeb946fa))

## [6.38.0](https://github.com/leather-wallet/extension/compare/v6.37.0...v6.38.0) (2024-05-02)


### Features

* stx-20 balances, closes [#5077](https://github.com/leather-wallet/extension/issues/5077) ([c5a32cf](https://github.com/leather-wallet/extension/commit/c5a32cfd69667982e9930af1ca8756d77ddbb49d))


### Bug Fixes

* bitcoin fees underestimation, closes [#4777](https://github.com/leather-wallet/extension/issues/4777) ([df936ea](https://github.com/leather-wallet/extension/commit/df936ea708c7bdaa3631ce1ce165504f61bbd700))
* colors.focus warning, closes [#5225](https://github.com/leather-wallet/extension/issues/5225) ([6b53a9a](https://github.com/leather-wallet/extension/commit/6b53a9a4ce8312de7b63a9c1f1a0c2b7ffbe33ed))
* disable swap test ([d0457fb](https://github.com/leather-wallet/extension/commit/d0457fbf52a61b17b65005442885c94415cce6dd))
* estimate higher tx size for inscription sends, closes [#5330](https://github.com/leather-wallet/extension/issues/5330) ([8ba6258](https://github.com/leather-wallet/extension/commit/8ba6258e254e61945b2c8e9c7ca12afb1ed59223))
* swap test ([7db0d97](https://github.com/leather-wallet/extension/commit/7db0d9755e39269885472beb1e68c6479a4c7521))


### Internal

* post-release merge back ([4391226](https://github.com/leather-wallet/extension/commit/439122610668934f26e25fec0fd5918785f3b2a4))
* prevent runtime error from lottie ([0722324](https://github.com/leather-wallet/extension/commit/0722324c34d8a1f431d4cde55cd3962f36ad87ba))
* rename estimated fee ([d12bb82](https://github.com/leather-wallet/extension/commit/d12bb827e0a73a3f9bec6744540b88a970b0808b))

## [6.37.0](https://github.com/leather-wallet/extension/compare/v6.36.0...v6.37.0) (2024-04-29)


### Features

* cache time infinity for txs request ([2c36395](https://github.com/leather-wallet/extension/commit/2c363955a959b21e0f44d5e95916e49c26c255ee))
* disable request diagnostics on install ([191dbd8](https://github.com/leather-wallet/extension/commit/191dbd8995ddf9bca8562c31ddaa0fef618b2dac))


### Bug Fixes

* add query options to runes queries ([5510d47](https://github.com/leather-wallet/extension/commit/5510d471f1be88ba5bfac4411db88519e24caed4))
* brc-20 fiat balance ([d25741b](https://github.com/leather-wallet/extension/commit/d25741bdf294a428a33d019a1ad44face73b0b1e))
* reset to mainnet on signout, closes [#5239](https://github.com/leather-wallet/extension/issues/5239) ([1bf16e4](https://github.com/leather-wallet/extension/commit/1bf16e478eb5f5ab574b1595cf27ecd27fcf1b45))
* runes formatted balance, closes [#5293](https://github.com/leather-wallet/extension/issues/5293) ([0830303](https://github.com/leather-wallet/extension/commit/0830303a14ae16be9fc71e2e405b553c75fd7a34))


### Internal

* post-release merge back ([549644e](https://github.com/leather-wallet/extension/commit/549644e702d28d0517566df6633859e98095d8c0))
* remove superflous and erroneous analytics tracking ([12e229d](https://github.com/leather-wallet/extension/commit/12e229df45ccdd9f7874e85f9386a1567a936e03))

## [6.36.0](https://github.com/leather-wallet/extension/compare/v6.35.1...v6.36.0) (2024-04-24)


### Features

* brc-20 token balances as fiat, [#4408](https://github.com/leather-wallet/extension/issues/4408) ([0942131](https://github.com/leather-wallet/extension/commit/0942131c63c7869349e6a63dcb101e4518271f4d))
* decrease num of addresses to fetch ([b0276ec](https://github.com/leather-wallet/extension/commit/b0276ec76e89af51b113a4ff320715874f88e789))
* increase hiro rate limiter ([51cf2c0](https://github.com/leather-wallet/extension/commit/51cf2c000a01f5b82661c388260d482aaf4e9760))


### Bug Fixes

* allow virtuoso to resize dynamically, ref [#5242](https://github.com/leather-wallet/extension/issues/5242) ([5d618aa](https://github.com/leather-wallet/extension/commit/5d618aab9bad8892976f132c869e296280e0cf2d))
* prevent form submit on tooltip click, ref [#5258](https://github.com/leather-wallet/extension/issues/5258) ([8735380](https://github.com/leather-wallet/extension/commit/8735380b07adc5c5c502abe385ff0eca85af4efd))
* problem with endless loading of balances and names ([15202f4](https://github.com/leather-wallet/extension/commit/15202f4c79133d991cfa0405f49802d2ee9f5ead))
* rpc send transfer params network validation, closes [#5284](https://github.com/leather-wallet/extension/issues/5284) ([a6f774c](https://github.com/leather-wallet/extension/commit/a6f774c6950b8378942d5b196197c1eb22ba5e23))
* rpc send transfer recipient default network ([4410185](https://github.com/leather-wallet/extension/commit/4410185f05b16b2bf5ddd4c4daf1bd7c5e09cc97))
* show hash formatting, ref [#5261](https://github.com/leather-wallet/extension/issues/5261) ([5264a99](https://github.com/leather-wallet/extension/commit/5264a99bcb9f84057db7f186930fc8aeb42fad6e))


### Internal

* post-release merge back ([6a53bff](https://github.com/leather-wallet/extension/commit/6a53bff45ce3742ea054da72badfbb1e732159ac))
* price as market data ([773421b](https://github.com/leather-wallet/extension/commit/773421befe38e506d0d61a2cc6524dcd2c4f898b))
* remove unneeded logger errors ([b4d73f8](https://github.com/leather-wallet/extension/commit/b4d73f83692129927e39df3c9a0f13020fcbbb21))

## [6.35.1](https://github.com/leather-wallet/extension/compare/v6.35.0...v6.35.1) (2024-04-20)


### Bug Fixes

* bitcoin fees missing isloading ([7fcb417](https://github.com/leather-wallet/extension/commit/7fcb4175a7ef3dc48f853ac6206bb0e4da20f46c))
* default to custom fee when no fees ([6022122](https://github.com/leather-wallet/extension/commit/602212212a0ca6da02259572a9f1af55bd5ede96))
* fix bug with sending ordinals from ledger, [#ref](https://github.com/leather-wallet/extension/issues/ref) 5253 ([06aef60](https://github.com/leather-wallet/extension/commit/06aef609614b775aec0e953a294230fa0065aabc))
* multiple recipient fee calc ([4b34089](https://github.com/leather-wallet/extension/commit/4b34089d03cf3556b734937e1532bff16f70ccbf))


### Internal

* add package installation instructions to readme ([f050237](https://github.com/leather-wallet/extension/commit/f0502371b9d8c31f902fa895e411ddee57e9c62d))
* enable runes for mainnet ([fbf2062](https://github.com/leather-wallet/extension/commit/fbf2062a33cb21cca84e483c40743f5c740deede))
* enable runes on mainnet ([0a17ad0](https://github.com/leather-wallet/extension/commit/0a17ad01e5e63ab0fbc51a267412721fe1b310ff))
* fix alignment of PSBT copy, ref [#5260](https://github.com/leather-wallet/extension/issues/5260) ([b9d8c9c](https://github.com/leather-wallet/extension/commit/b9d8c9ce17ce748c3801d0db28058c0d6a5e3bfb))
* post-release merge back ([3ad2b50](https://github.com/leather-wallet/extension/commit/3ad2b50b81420cf87fd14d0a7e4c28fcbc6dc39a))
* post-release merge back ([448c4c0](https://github.com/leather-wallet/extension/commit/448c4c0596fe9708efd60eb850c9d8ce94bc6858))
* update README ([f695261](https://github.com/leather-wallet/extension/commit/f695261b3a8847908dd5ce22eff5ae78e19bc01d))

## [6.35.0](https://github.com/leather-wallet/extension/compare/v6.34.0...v6.35.0) (2024-04-18)


### Features

* filter out runes utxos, closes [#5207](https://github.com/leather-wallet/extension/issues/5207) ([1e02992](https://github.com/leather-wallet/extension/commit/1e02992a7175ac9bbad2b18d2a467c6207ce7cd2))


### Bug Fixes

* add default runes symbol ([b3109ed](https://github.com/leather-wallet/extension/commit/b3109edabe011e5db62edf25c879fe6b4f9ae1af))
* check utxo fallback error, closes [#5250](https://github.com/leather-wallet/extension/issues/5250) ([321a00a](https://github.com/leather-wallet/extension/commit/321a00ad4635d75dec8572422bf509ae1806f547))
* duplicated connect btn, closes [#5255](https://github.com/leather-wallet/extension/issues/5255) ([2655c0f](https://github.com/leather-wallet/extension/commit/2655c0f031f11538a8ebcf0449d4f7e7029d471d))
* **ledger:** no signer breaking homepage ([7624c0a](https://github.com/leather-wallet/extension/commit/7624c0a2a01ca90fe2b0c11413418c628a2ebe1c))
* rpc send transfer data, closes [#5243](https://github.com/leather-wallet/extension/issues/5243) ([1858348](https://github.com/leather-wallet/extension/commit/1858348e7117fa2c396975e009ff7de1fbce008c))
* runes ui, closes [#5246](https://github.com/leather-wallet/extension/issues/5246) ([b4dcf87](https://github.com/leather-wallet/extension/commit/b4dcf874f074964f656a8c7e977fe4107dcd218a))


### Internal

* post-release merge back ([75c4f5d](https://github.com/leather-wallet/extension/commit/75c4f5d95c102a29e87a6631f471742f83c4153a))

## [6.34.0](https://github.com/leather-wallet/extension/compare/v6.33.0...v6.34.0) (2024-04-17)


### Features

* rune balances ([4e1de2c](https://github.com/leather-wallet/extension/commit/4e1de2cf8eea0ca0f379986547a041b8514ce7da))


### Bug Fixes

* always show full text ([dc8c8e4](https://github.com/leather-wallet/extension/commit/dc8c8e4f505fdef00ce3bb9bec3666ef72729516))
* change runes receive address to tr ([4c9c167](https://github.com/leather-wallet/extension/commit/4c9c16755b33eab8fde90b0eb3703a444932bcb2))
* rpc send transfer recipient choose fee ([1a5fb85](https://github.com/leather-wallet/extension/commit/1a5fb85f77f4acc8fdf2b311428c00b8a74e1169))
* wrong bns name while loading ([bc02c05](https://github.com/leather-wallet/extension/commit/bc02c05a577ef7b43e3b07275a2070ca73930e1e))


### Internal

* add bestinslot testnet for runes setup ([5aa7a20](https://github.com/leather-wallet/extension/commit/5aa7a2061a0e2cde7234630eb384b76e82104383))
* add BRC-20 and SRC-20 to collectibles ([3360f0c](https://github.com/leather-wallet/extension/commit/3360f0cd7a873266c63b021f612e9795e7593b07))
* add ns addresses for runes balances ([e26e5ba](https://github.com/leather-wallet/extension/commit/e26e5bacb711db7a1b2ed33c8333f370ed5c8bfd))
* post-release merge back ([250089e](https://github.com/leather-wallet/extension/commit/250089e761dcd4cfdc9f5383601788b50012677a))
* stop increase fee being cutoff when long contract name ([2b57f48](https://github.com/leather-wallet/extension/commit/2b57f48b32b2205a7107b9e3b8fc7eea1766f4cd))
* update packages ([212bff8](https://github.com/leather-wallet/extension/commit/212bff8abe0aa00d43938065b7b0a2fa59250bfe))
* update runes avatar icon ([f665707](https://github.com/leather-wallet/extension/commit/f665707a78465358f3f91a3d1b1d4069e3b5f00e))

## [6.33.0](https://github.com/leather-wallet/extension/compare/v6.32.1...v6.33.0) (2024-04-10)


### Features

* add balances shimmer loader, closes [#5119](https://github.com/leather-wallet/extension/issues/5119) ([5c1c284](https://github.com/leather-wallet/extension/commit/5c1c284074c2211e75d1c2f2054de488918126e2))
* add src-20 token balances, closes [#3751](https://github.com/leather-wallet/extension/issues/3751) ([fb859b6](https://github.com/leather-wallet/extension/commit/fb859b6ecb830af1455a344a22b3884dac9de82b))
* add stacks balance loader ([20418ab](https://github.com/leather-wallet/extension/commit/20418ababa5e8db8a8c8b82f30c19eb10d2864b4))
* change query persister to chrome storage, closes [#5153](https://github.com/leather-wallet/extension/issues/5153) ([1cd2625](https://github.com/leather-wallet/extension/commit/1cd26250dde7b46146e5da48fbe355e682b8c966))
* compliance checks ([6df0869](https://github.com/leather-wallet/extension/commit/6df086937edabb6993ee5c16de9a85c198c79480))
* stacks ft fiat values from alex-sdk, closes [#4653](https://github.com/leather-wallet/extension/issues/4653) ([0f7e44e](https://github.com/leather-wallet/extension/commit/0f7e44e730169a9de489f4a7e120106c87c3def4))
* support multiple recipients in rpc send transfer method, closes [#5174](https://github.com/leather-wallet/extension/issues/5174) ([a470a57](https://github.com/leather-wallet/extension/commit/a470a5757c081f54f40cb7fc3c7f5ab2c375701e))


### Bug Fixes

* add border to onboarding form ([a6bda2d](https://github.com/leather-wallet/extension/commit/a6bda2dd12afa0be0fc7d8c448819d5414f12cc5))
* container when resized ([909fa0c](https://github.com/leather-wallet/extension/commit/909fa0c724dfa847370a6f1aac1e586d219745dd))
* dependabot ([d927ec0](https://github.com/leather-wallet/extension/commit/d927ec02d8833c9404809c28b7d8be35bfb743f9))
* deprecate InfoCard to add border correctly ([b6864cd](https://github.com/leather-wallet/extension/commit/b6864cd774057cfe03ef7150855de7258456ebb8))
* fix routing issues with send flow ([f32151d](https://github.com/leather-wallet/extension/commit/f32151d272a970b61ff83116e4edfeeb0706ab53))
* only show messages on homepage ([8228c11](https://github.com/leather-wallet/extension/commit/8228c11c558ff31eca3df0e8319902b66a9d66fc))
* refetch brc20 tokens on window focus ([a985e0f](https://github.com/leather-wallet/extension/commit/a985e0f4da50713587a84a6ab0f2bdffc1b72c4e))
* shimmer styles import ([868ee71](https://github.com/leather-wallet/extension/commit/868ee717a6e33e3a266bc0e0fee3d8f8cb52c2d3))
* swap test ([85eb975](https://github.com/leather-wallet/extension/commit/85eb97595d93b95346ecf1f4680f05afb6b8465d))
* swap toggle with new routing ([f179f3e](https://github.com/leather-wallet/extension/commit/f179f3ef8e702bc5640de883e64964297ac695ad))
* use signed stacks account in transaction [#4923](https://github.com/leather-wallet/extension/issues/4923) ([6dca269](https://github.com/leather-wallet/extension/commit/6dca269b31dcd2ce63e093ea0c004ffe611c5220))


### Internal

* Add wallet user survey, adjust styling ([3c242cf](https://github.com/leather-wallet/extension/commit/3c242cfc08cf18d441a5de448589ef685c5c7407))
* disable compliance check ([b4b1d11](https://github.com/leather-wallet/extension/commit/b4b1d11be05f3c56c7f0adc3d9c97a33c282384c))
* fmt ([a937795](https://github.com/leather-wallet/extension/commit/a9377954f7b7bf077944a8471be4adee120889a0))
* implement fix to limit amount of accounts rendered ([629ef97](https://github.com/leather-wallet/extension/commit/629ef9788c4d54b98cd59bb38f9ac8d4208cb49e))
* post-release merge back ([3c9c0f8](https://github.com/leather-wallet/extension/commit/3c9c0f8cb9418398198ee406210c7fe91d84b2f5))
* replace drawer dialog, containers and global header footers, onboarding, settings, ref [#4371](https://github.com/leather-wallet/extension/issues/4371) ([6262267](https://github.com/leather-wallet/extension/commit/6262267ff11fdeaa3f0d995fb5f286debcbbfd17))
* swaps routes, closes [#4317](https://github.com/leather-wallet/extension/issues/4317) ([70c51a1](https://github.com/leather-wallet/extension/commit/70c51a1ad112d3c37811ae7fb4e469d700c41107))
* ugprade dev packages ([4ed8326](https://github.com/leather-wallet/extension/commit/4ed8326507156f30eb9c87495ae5ca8d9d1090ca))
* update express, ref [#5130](https://github.com/leather-wallet/extension/issues/5130) ([264bf8d](https://github.com/leather-wallet/extension/commit/264bf8db38d487b26a6c71661e4c2dc9495f405f))
* update prettier package ([e75990f](https://github.com/leather-wallet/extension/commit/e75990fc1670667ecd36912be2a14af3242b00b5))
* update stx avatar ([03fe093](https://github.com/leather-wallet/extension/commit/03fe0936d0f2d7af663f406f42da941400c27dd2))
* update undici, ref [#4956](https://github.com/leather-wallet/extension/issues/4956) ([8019e0d](https://github.com/leather-wallet/extension/commit/8019e0d106bd11c174b02513db42dd0990fca4a8))
* update webpack + axios, ref [#5090](https://github.com/leather-wallet/extension/issues/5090) ([77803f5](https://github.com/leather-wallet/extension/commit/77803f56ce4fd39bc0c13f0ef0e23da9277957f1))
* upgrade redux toolkit, redux ([2eb8090](https://github.com/leather-wallet/extension/commit/2eb8090cd88b32ae8b3d4eb3bbee2b3f7bb75bd5))

## [6.32.1](https://github.com/leather-wallet/extension/compare/v6.32.0...v6.32.1) (2024-03-27)


### Bug Fixes

* removes decimals from balances > $1,000 ([5db63de](https://github.com/leather-wallet/extension/commit/5db63de747f05af8f5e42bb0ba199a706e79c70f))
* send form max amount ([caae144](https://github.com/leather-wallet/extension/commit/caae144892a3d3691b41caca0f33d25f8171013a))
* wrong send stx validation msg ([926a90b](https://github.com/leather-wallet/extension/commit/926a90bac3507d0851068eaca816e0fe538e4b00))


### Internal

* post-release merge back ([541c27a](https://github.com/leather-wallet/extension/commit/541c27a30617b7f80d4a974fac3a60e2014d2cd3))

## [6.32.0](https://github.com/leather-wallet/extension/compare/v6.31.0...v6.32.0) (2024-03-26)


### Features

* add blockstream and hiro api rate limiters, closes [#4926](https://github.com/leather-wallet/extension/issues/4926) ([b1b2ec5](https://github.com/leather-wallet/extension/commit/b1b2ec5087023c598979bf7702a0a54c459214d8))


### Bug Fixes

* add new test for sign psbt ([d5d7cb7](https://github.com/leather-wallet/extension/commit/d5d7cb74226ad9beec5375b578c5da8020f326a1))
* add test for psbt wrong index failure ([7ec9744](https://github.com/leather-wallet/extension/commit/7ec9744a0cf52708325dea86397cca8dca63c57c))
* client side nested button error ([c800721](https://github.com/leather-wallet/extension/commit/c800721e1dc0046b25e81477eae7e181ee856bbb))
* increase swap hardcoded fee, closes [#4984](https://github.com/leather-wallet/extension/issues/4984) ([1eb268e](https://github.com/leather-wallet/extension/commit/1eb268e9c3a9840965eaddd2eda113e81a3fc17e))
* index bug and modify tests ([f9efae6](https://github.com/leather-wallet/extension/commit/f9efae6feba9462783035c790903219c9bd07ce8))
* input payment type, closes [#5076](https://github.com/leather-wallet/extension/issues/5076) ([5f558da](https://github.com/leather-wallet/extension/commit/5f558da2ddb797397dca73db736968d18bfb4ae7))
* missing regtest prefix in address check ([7e8549f](https://github.com/leather-wallet/extension/commit/7e8549f94597c21dc197663f62bb0cb80bfc48eb))
* modify input payment type index for ledger also ([17f57f3](https://github.com/leather-wallet/extension/commit/17f57f3d56a4083fae2bc766ec195bf17e1dffdd))
* swap arrow icon ([9dcd980](https://github.com/leather-wallet/extension/commit/9dcd9809fa00db12c398ef4701ec8d0caebf636f))
* swap duplicate toast, closes [#5068](https://github.com/leather-wallet/extension/issues/5068) ([5f08a9c](https://github.com/leather-wallet/extension/commit/5f08a9c21a98f92ef31449972d5d43c198e64f46))
* swapping welsh with alex sdk, closes [#5022](https://github.com/leather-wallet/extension/issues/5022) ([1f1216c](https://github.com/leather-wallet/extension/commit/1f1216cd91fa61a3b66a47d157a4b987de694f55))
* validation regtest addresses ([462ab8c](https://github.com/leather-wallet/extension/commit/462ab8c339857026a468c75502ce1c726e171a88))


### Internal

* add chromatic visual tests ([3ed207f](https://github.com/leather-wallet/extension/commit/3ed207f5443dfc87136d03b4a38059ad9da4cbbd))
* fix audit vulnerability ([f577570](https://github.com/leather-wallet/extension/commit/f577570fc3bccf62072cf4b7641ef517df9d486d))
* post-release merge back ([7ad58b1](https://github.com/leather-wallet/extension/commit/7ad58b1508ecbdd289daaf42f96e8dbd7ca2e0f2))
* update link to fee info ([0d0dc34](https://github.com/leather-wallet/extension/commit/0d0dc3462c95263fba31cf70991e7f0dd0220e33))
* update link to nonce info ([c79ddda](https://github.com/leather-wallet/extension/commit/c79ddda55411770b6aff8c4fcb5fab8e42ea11ad))
* upgrade signer packages ([9ddea5f](https://github.com/leather-wallet/extension/commit/9ddea5f173994f866e33e273ca7a851903e9acdd))
* upgrade storybook ([fb0ed2a](https://github.com/leather-wallet/extension/commit/fb0ed2a1c6631f20a1251dc37527ada50d03e1dc))

## [6.31.0](https://github.com/leather-wallet/extension/compare/v6.30.1...v6.31.0) (2024-03-19)


### Features

* add storybook preview to pr links ([0e0ca6f](https://github.com/leather-wallet/extension/commit/0e0ca6fbc0c9a6c6c4b1c10b533760818f2c2215))
* address displayer ([7f72f15](https://github.com/leather-wallet/extension/commit/7f72f15055518a5d2a2090ef61fbd81da9ecbeff))
* ord io inscription links, closes [#3980](https://github.com/leather-wallet/extension/issues/3980) ([0681c93](https://github.com/leather-wallet/extension/commit/0681c939ffe077a2c0da9015d598d2da534a1489))
* support gltf inscription type, closes [#5091](https://github.com/leather-wallet/extension/issues/5091) ([a303de4](https://github.com/leather-wallet/extension/commit/a303de45b983783ae18f2e6508ce284f13db2968))
* toast ([1284422](https://github.com/leather-wallet/extension/commit/12844220963336faf8a0829d66c4c9823a22d447))


### Bug Fixes

* brc20 send status update, closes [#4939](https://github.com/leather-wallet/extension/issues/4939) ([e49e7ec](https://github.com/leather-wallet/extension/commit/e49e7ec79115edd174b62f0366475fd4a60bceb3))
* gaia profile test ([1d87592](https://github.com/leather-wallet/extension/commit/1d87592570822f91dcf995f3f0644b7e0c6e3a8f))
* gaia profile test ([db6a1aa](https://github.com/leather-wallet/extension/commit/db6a1aa763ebf655d4bdf1fbc54cc6f286bc214b))
* send inputs in check utxos analytics event ([2190278](https://github.com/leather-wallet/extension/commit/219027881dc0ceca3d016a4dda820fe539ed18ef))
* sentry api upgrade, routing ([2d7b07e](https://github.com/leather-wallet/extension/commit/2d7b07ef8c590ec77c7833826cd7120c52509c0f))
* sip10 token default max length, closes [#4930](https://github.com/leather-wallet/extension/issues/4930) ([22b695e](https://github.com/leather-wallet/extension/commit/22b695e9bfea3e982153716318ab3989882d99a2))
* try retry action ([5590cd4](https://github.com/leather-wallet/extension/commit/5590cd45c3ea9321e4bdb2bfbef561621dfe6153))
* upgrade tokens package ([bdeb1c1](https://github.com/leather-wallet/extension/commit/bdeb1c18717ed487fedf5552f40e84f63032a5a3))


### Internal

* fix uncaught account 429 restore errors ([863904e](https://github.com/leather-wallet/extension/commit/863904ec5f232e77d8e96da3f2a26700d68e7582))
* fix uncaught gaia error ([456b8d0](https://github.com/leather-wallet/extension/commit/456b8d083cd03b30b0a73b336cf62f61d18d6800))
* item interactive to pressable ([faa3a79](https://github.com/leather-wallet/extension/commit/faa3a794e75556315e746be06aadb0ff8560929f))
* migrate to pnpm ([32de09b](https://github.com/leather-wallet/extension/commit/32de09b148a8fd9486da2012fe64bfbd6a5990b8))
* post-release merge back ([951ce43](https://github.com/leather-wallet/extension/commit/951ce43114bd915bc972b335b54c3c8b7befbd47))
* post-release merge back ([12c10da](https://github.com/leather-wallet/extension/commit/12c10da6e61ee2c245145b6013ebd34e8aa46269))
* remove warning banner ([53beaf0](https://github.com/leather-wallet/extension/commit/53beaf0b4d8e9ab85ab0744430574b9d46f784e6))
* temp skip profile test ([ea4b71a](https://github.com/leather-wallet/extension/commit/ea4b71a025e8d324d74975c680b13659de7b62c7))
* update post condition allow copy ([b0eb524](https://github.com/leather-wallet/extension/commit/b0eb5248fb946bbdcb1e55b663218ecbd89e2d83))

## [6.30.1](https://github.com/leather-wallet/extension/compare/v6.30.0...v6.30.1) (2024-03-08)


### Bug Fixes

* fetch brc20 balance from hiro ([69b13b6](https://github.com/leather-wallet/extension/commit/69b13b6a94530bac9ef41f961d69cfd148d5efff))
* regression on stacking layout ([0193986](https://github.com/leather-wallet/extension/commit/019398651c934d1c3b9bdaf653f2cd6356fbd57b))


### Internal

* fix page width issue ([c7edd05](https://github.com/leather-wallet/extension/commit/c7edd0554d7d54f0dc2cd02a9ad7f0b3d265de4d))
* internal clear storage tool fix ([f20a14b](https://github.com/leather-wallet/extension/commit/f20a14ba11c41f9a7c08f17b23ad3bf7db30d70d))
* post-release merge back ([d95baac](https://github.com/leather-wallet/extension/commit/d95baac8f936c2c5855c7813f3aa56a4465798ce))
* post-release merge back ([6702100](https://github.com/leather-wallet/extension/commit/6702100bdd0da98d43c6b5f498e3c5f92005b701))
* update wallet config ([1eb13bc](https://github.com/leather-wallet/extension/commit/1eb13bc537bcfe0f3c8632dd3781db13a9c10652))

## [6.30.0](https://github.com/leather-wallet/extension/compare/v6.29.0...v6.30.0) (2024-03-07)


### Features

* tag ([5b37691](https://github.com/leather-wallet/extension/commit/5b376919f70dfa8c7f9082ebcf60ba4887db3386))


### Bug Fixes

* tx calc unhandled errors, closes [#4941](https://github.com/leather-wallet/extension/issues/4941) ([150e7de](https://github.com/leather-wallet/extension/commit/150e7deb48cad69d2ff1b4d29de7dbbc5909e580))


### Internal

* add scam app warning ([caff01e](https://github.com/leather-wallet/extension/commit/caff01eab53f54427e3b8733ce4d8cbb965b7e1f))
* post-release merge back ([cc74de2](https://github.com/leather-wallet/extension/commit/cc74de2f80697da824845cc094632c5ed4b17e8e))
* post-release merge back ([769ac8f](https://github.com/leather-wallet/extension/commit/769ac8f441d703c4a22e28daba5d86a10220a0c6))

## [6.29.0](https://github.com/leather-wallet/extension/compare/v6.28.0...v6.29.0) (2024-03-05)


### Features

* add bestinslot api key ([105fedb](https://github.com/leather-wallet/extension/commit/105fedb4203b223713487a649575b42a1c15ac0a))
* avatar ([4fdeea4](https://github.com/leather-wallet/extension/commit/4fdeea4de139ee2b671fd180ff2f269848b9ba73))
* callout, closes [#4311](https://github.com/leather-wallet/extension/issues/4311) ([4214598](https://github.com/leather-wallet/extension/commit/4214598fce39f8859775eeefa7846733a6c756b0))
* upgrade brc-20 api to bestinslot v3, closes [#4970](https://github.com/leather-wallet/extension/issues/4970) ([bf58f6d](https://github.com/leather-wallet/extension/commit/bf58f6d04f1d5a9b2b0d2e6380f90cfae9c63f02))


### Bug Fixes

* brc-20 pending transactions, closes [#4990](https://github.com/leather-wallet/extension/issues/4990) ([dbd33ba](https://github.com/leather-wallet/extension/commit/dbd33ba7a24db86b0d25546c01eb23aa1f5f9eac))
* dropdown item padding ([f24f0a2](https://github.com/leather-wallet/extension/commit/f24f0a20308c1604dfe72e0e84fcde0bd11cb50e))
* item interactive margins ([0b565dd](https://github.com/leather-wallet/extension/commit/0b565ddb0396a3ed448599bd68b4e854285d65b6))
* **ledger:** stacks message signing, closes [#4945](https://github.com/leather-wallet/extension/issues/4945) ([cc19e40](https://github.com/leather-wallet/extension/commit/cc19e40e48589f632dcd29e768f20089fbe38121))
* recipient account margins ([95278ac](https://github.com/leather-wallet/extension/commit/95278ace3ef9ee2dda53ab207ab33788eb2faa65))
* settings btn ui ([b3146a2](https://github.com/leather-wallet/extension/commit/b3146a2333edaf1ce43c414f7840df79f6e1caee))
* warning banner, add fake app warning ([41a47ec](https://github.com/leather-wallet/extension/commit/41a47ec2ac7482440bd2abd64b0d6887e64bc875))


### Internal

* **dropdown:** unstyled trigger, separate button ([38146b3](https://github.com/leather-wallet/extension/commit/38146b3ee5c5a02edbbf5b7f908c0bb163c7b345))
* **dropdown:** update animations ([6656e05](https://github.com/leather-wallet/extension/commit/6656e059c3045434461226ad16372a84dd9f0d49))
* item interactive ([758d65d](https://github.com/leather-wallet/extension/commit/758d65ddab8b1a9197a5419ab637699272062920))
* post-release merge back ([a1fdbd2](https://github.com/leather-wallet/extension/commit/a1fdbd2d990406ccaec8ff369181bd150f9f951d))
* **send-form:** remove custom dropdown type ([5b6bbfc](https://github.com/leather-wallet/extension/commit/5b6bbfc301cfe501bcf5dd49ac519a17e1f2754b))

## [6.28.0](https://github.com/leather-wallet/extension/compare/v6.27.2...v6.28.0) (2024-02-26)


### Features

* add dark splash screen, ref [#4398](https://github.com/leather-wallet/extension/issues/4398) ([c4fb072](https://github.com/leather-wallet/extension/commit/c4fb0722c980ec67e51ca927930c6f0078c98318))
* check utxo ids for inscriptions, ref [#4920](https://github.com/leather-wallet/extension/issues/4920) ([86dd00d](https://github.com/leather-wallet/extension/commit/86dd00d1dea594f21d70e0b4425154a7b354d8c7))


### Bug Fixes

* attempt to fix failing test ([0ff7701](https://github.com/leather-wallet/extension/commit/0ff77014da4cc831cf51a7c9492c88e4465a2a66))
* broken color on welcome page ([384c947](https://github.com/leather-wallet/extension/commit/384c9471664fdd8de11399f35fb35ab8262c0b42))
* memo using old input ([8829a2a](https://github.com/leather-wallet/extension/commit/8829a2a67af86fdf082532d055e87320365d00d7))
* remove hiro ref in page ([c49f7e9](https://github.com/leather-wallet/extension/commit/c49f7e9f52cb491b6e68a86546b1cafb4d08cab1))
* stamps api, closes [#4845](https://github.com/leather-wallet/extension/issues/4845) ([3230c49](https://github.com/leather-wallet/extension/commit/3230c490e3bd34e9dd289138aeaf06bcc422b54b))


### Internal

* additional checks before adding tapInternalKey, ref [#4125](https://github.com/leather-wallet/extension/issues/4125) ([09a17bf](https://github.com/leather-wallet/extension/commit/09a17bf1f4344101321c7cb0c039d5b1d7af2af1))
* colors, closes [#4831](https://github.com/leather-wallet/extension/issues/4831) ([934cfd0](https://github.com/leather-wallet/extension/commit/934cfd0a64082e239f483759299616b7b5aeafca))
* esm webpack ([3cc8878](https://github.com/leather-wallet/extension/commit/3cc8878d1815e4b70b6bb44f4799633ae4667bf4))
* existing icons to use variants, closes [#4950](https://github.com/leather-wallet/extension/issues/4950) ([2ce7319](https://github.com/leather-wallet/extension/commit/2ce73195501e040a3f1464d6af478115bf25c5ca))
* icon variants ([7a886c1](https://github.com/leather-wallet/extension/commit/7a886c112b264d451c7e9f266f03e4ed2f9de8a3))
* **input:** remove InputTextField component ([3556390](https://github.com/leather-wallet/extension/commit/35563904d41445926f5140ea088fbfe631deea68))
* new icons using icon gallery ([dc1bf28](https://github.com/leather-wallet/extension/commit/dc1bf2838f40e16fbbb91c27ff05163a2ce6e515))
* post-release merge back ([5a87a5d](https://github.com/leather-wallet/extension/commit/5a87a5daf81f5b47174d102b86b14e42d27b2280))
* upgrade packages ([dcc36d0](https://github.com/leather-wallet/extension/commit/dcc36d0b8c03302e986f91f4b31d4894cdddacf9))

## [6.27.2](https://github.com/leather-wallet/extension/compare/v6.27.1...v6.27.2) (2024-02-14)


### Bug Fixes

* close settings dropdown on click ([3183b8b](https://github.com/leather-wallet/extension/commit/3183b8be2ba453d00891bf93902e766fa1f57410))
* separate catch block ([52a849a](https://github.com/leather-wallet/extension/commit/52a849a0cacfdb0249f2a554e9adb48075418914))
* svg inscriptions preview ([787c03a](https://github.com/leather-wallet/extension/commit/787c03a84918a859997a4b0a0d0a5b98e9237d26))


### Internal

* deprecation warnings, closes [#4928](https://github.com/leather-wallet/extension/issues/4928) ([81fea0d](https://github.com/leather-wallet/extension/commit/81fea0d6b7bdc6ec12f8a62538d273e01219c6a0))
* post-release merge back ([67809a2](https://github.com/leather-wallet/extension/commit/67809a2dad21bcb4e4a0af58b54895b6dcac3c32))
* post-release merge back ([4a66d63](https://github.com/leather-wallet/extension/commit/4a66d63e66fdfd03b21a802cdcee663b07d449b7))
* remove references of broadcastRawTransaction, use only broadcastTransaction ([f0f488a](https://github.com/leather-wallet/extension/commit/f0f488ac1a47b239264f1e75934e1ad552eb697d))

## [6.27.1](https://github.com/leather-wallet/extension/compare/v6.27.0...v6.27.1) (2024-02-12)


### Bug Fixes

* contend with other wallets ([fb70408](https://github.com/leather-wallet/extension/commit/fb704087ecedfc7e0baba9f26f8ef037a703032e))

## [6.27.0](https://github.com/leather-wallet/extension/compare/v6.26.1...v6.27.0) (2024-02-07)


### Features

* ui items, closes [#4314](https://github.com/leather-wallet/extension/issues/4314) ([4e6cd7d](https://github.com/leather-wallet/extension/commit/4e6cd7df05dcccb7552afd6148b34afc0d9415d5))


### Bug Fixes

* activity list items ([c01626b](https://github.com/leather-wallet/extension/commit/c01626b630b9c347ca181ae097f28702df3bf234))
* **analytics:** reporting empty error, closes [#4907](https://github.com/leather-wallet/extension/issues/4907) ([ad32854](https://github.com/leather-wallet/extension/commit/ad328542da55315199cd881aad25991bfede3233))
* disabled button styles, closes [#4840](https://github.com/leather-wallet/extension/issues/4840) ([666fa37](https://github.com/leather-wallet/extension/commit/666fa37da8ea622c4e2651b54cfca5d487e76f05))
* **input:** mnemonic value state ([5fa284a](https://github.com/leather-wallet/extension/commit/5fa284af7527b746520fd86ed02331c12d664e8a))
* ledger no request keys context ([d57f005](https://github.com/leather-wallet/extension/commit/d57f0057311317cae0e2e6de208c34dfddd0ee5d))
* select account overlay ([04e5d0e](https://github.com/leather-wallet/extension/commit/04e5d0ed476e74d7291f86a5a2f1af46dd0a3c92))
* user should be able to increase fee for stacks with ledger, closes [#4503](https://github.com/leather-wallet/extension/issues/4503) ([47b03f6](https://github.com/leather-wallet/extension/commit/47b03f6f4922893a0e3153e193996937f361a378))


### Internal

* error helper ([a6a33a0](https://github.com/leather-wallet/extension/commit/a6a33a09e0c11a4fd669c3afc7716015a32525af))
* flag layout stories ([a2230a6](https://github.com/leather-wallet/extension/commit/a2230a606a4e98c18c412ca494ef6258a1428e7c))
* post-release merge back ([7743f90](https://github.com/leather-wallet/extension/commit/7743f905fe03a7545c9e2aba2fab5743510a6485))
* remove unanchored microblocks, closes [#4812](https://github.com/leather-wallet/extension/issues/4812) ([b21decb](https://github.com/leather-wallet/extension/commit/b21decb9d6f05200055f5f8735f4fd5fda881759))
* **stories:** add stories for flags ([7b0ffab](https://github.com/leather-wallet/extension/commit/7b0ffab2bf61621eedbe6a8aceb1f62668375152))
* update monorepo tokens ([32d0caf](https://github.com/leather-wallet/extension/commit/32d0caf9812dc6958d5c22448518860422287bee))

## [6.26.1](https://github.com/leather-wallet/extension/compare/v6.26.0...v6.26.1) (2024-01-29)


### Bug Fixes

* make coinbase global ([625bfe5](https://github.com/leather-wallet/extension/commit/625bfe52ef83a1842bf2206ccd709c9253dcc25d))
* no btc signer in  ledger mode, ref [#4873](https://github.com/leather-wallet/extension/issues/4873) ([d13a678](https://github.com/leather-wallet/extension/commit/d13a678c490fd4e556277d5ac003c3b72aa0132e))


### Internal

* limit query opts, add hiro header ([68c557f](https://github.com/leather-wallet/extension/commit/68c557f7dbb9a309d3587910b7680ff1e8105fda))
* post-release merge back ([c7ba7b7](https://github.com/leather-wallet/extension/commit/c7ba7b79a557f498898978708c92398b29a7d1b9))
* remove use spendable utxos hook ([0c36db3](https://github.com/leather-wallet/extension/commit/0c36db342707eedb257a6d0ea306f00e459cdba2))

## [6.26.0](https://github.com/leather-wallet/extension/compare/v6.25.0...v6.26.0) (2024-01-26)


### Features

* **ui:** adds input element, ref [#4810](https://github.com/leather-wallet/extension/issues/4810) ([e223b0a](https://github.com/leather-wallet/extension/commit/e223b0a9fa4d9821237dfcbc707f943b25a33a7c))


### Bug Fixes

* filter out uneconomical utxos, closes [#4505](https://github.com/leather-wallet/extension/issues/4505) ([a6e116c](https://github.com/leather-wallet/extension/commit/a6e116c981e21e27dc895d713d1d6aa213142d1a))
* layout issue when stacking, ref [#4851](https://github.com/leather-wallet/extension/issues/4851) ([ce6c52a](https://github.com/leather-wallet/extension/commit/ce6c52a9227071562a2b5c8820113b882cb119e4))
* nested button tooltip error, closes [#4835](https://github.com/leather-wallet/extension/issues/4835) ([5b87e3d](https://github.com/leather-wallet/extension/commit/5b87e3d9c767a6fc1afde8a7fa43d077130d7b70))
* onboarding gate in ledger mode ([07729b5](https://github.com/leather-wallet/extension/commit/07729b5275d1e2790f94f15ab2234d8fbeeb8278))
* sign out of the wallet before proceeding with ledger sign in ([aa214c8](https://github.com/leather-wallet/extension/commit/aa214c8450fcef7e9a86fa2648f389e68a741120))
* update psbt warning copy ([988e23f](https://github.com/leather-wallet/extension/commit/988e23f0d6e57796983912d337451eed5cc193a3))


### Internal

* add BulletSeparator story ([863a128](https://github.com/leather-wallet/extension/commit/863a1287e3cc0ca9ae7abc8dcc7ae9fbbafcf38d))
* **deps:** bump vite from 5.0.11 to 5.0.12 ([4ec0cd9](https://github.com/leather-wallet/extension/commit/4ec0cd97c55442ce25b9bd210428da934ba294bf))
* fix ledger, ref [#4861](https://github.com/leather-wallet/extension/issues/4861) ([62bf0ec](https://github.com/leather-wallet/extension/commit/62bf0ecac7994dc4b434db4df5ffcf4dfb911085))
* improve styles, try mnemonic ([f6bad6a](https://github.com/leather-wallet/extension/commit/f6bad6af32342b764aca85f18f609e4c8b1986a0))
* post-release merge back ([be0d9a7](https://github.com/leather-wallet/extension/commit/be0d9a74b1ab188ce34f81be110b9a44801172c7))
* remove dupe imports, lint ([b05f731](https://github.com/leather-wallet/extension/commit/b05f731e0e339c2b02b5059bb2417c184a21e243))

## [6.25.0](https://github.com/leather-wallet/extension/compare/v6.24.0...v6.25.0) (2024-01-23)


### Features

* remove unused url in brc20 request, ref [#4833](https://github.com/leather-wallet/extension/issues/4833) ([95b722c](https://github.com/leather-wallet/extension/commit/95b722cfcf03329c221d12fc29ad1141e6e2af80))


### Internal

* post-release merge back ([d80459f](https://github.com/leather-wallet/extension/commit/d80459f556909c9c9e65ae48c58580710200a313))
* rename taproot utxo ([0dacac6](https://github.com/leather-wallet/extension/commit/0dacac604f5d11a616e9decfa1bb06c7c87862b2))

## [6.24.0](https://github.com/leather-wallet/extension/compare/v6.23.0...v6.24.0) (2024-01-22)


### Features

* use radix tooltip ([aa8a530](https://github.com/leather-wallet/extension/commit/aa8a530fe855735757828d3b09e67f1e8b0ede9e))


### Bug Fixes

* fee estimation error, ref [#4821](https://github.com/leather-wallet/extension/issues/4821) ([9b75521](https://github.com/leather-wallet/extension/commit/9b75521af8b4d019692d78163dc1a6748b12a4a4))
* home action btns hover state ([c270868](https://github.com/leather-wallet/extension/commit/c270868ce03626104421a841b1cc763a54f457af))
* send inscription form fee flow ([ee9728d](https://github.com/leather-wallet/extension/commit/ee9728d6aad15ae22bf711067a191e2d07a13765))
* tooltip logic ([2ae8cf0](https://github.com/leather-wallet/extension/commit/2ae8cf0240760e2bfb32b6d6a4bc9773a9db0f60))


### Internal

* audit colours, update token package, brown becomes ink ([c82c612](https://github.com/leather-wallet/extension/commit/c82c612d75246a94b3ca504ef1d814cbb74b7cbf))
* button and link, ref [#4418](https://github.com/leather-wallet/extension/issues/4418) and [#4523](https://github.com/leather-wallet/extension/issues/4523) ([7d75f4a](https://github.com/leather-wallet/extension/commit/7d75f4a376f73368303a5a50b2c811c62aa06fc2))
* fix icon padding, ref [#4693](https://github.com/leather-wallet/extension/issues/4693) ([fbd8c11](https://github.com/leather-wallet/extension/commit/fbd8c1199d2bd590b9158644ae94b3b355910b49))
* fix validate custom network name field on form submission, closes [#4737](https://github.com/leather-wallet/extension/issues/4737) ([63e6a94](https://github.com/leather-wallet/extension/commit/63e6a9482f8bc1ad5a7a414699b07b1a1a4c188c))
* post-release merge back ([0930968](https://github.com/leather-wallet/extension/commit/0930968439e320b2dc4d56641d39a70df518f354))
* update network tests ([ab1fb5b](https://github.com/leather-wallet/extension/commit/ab1fb5b6ad408bdae1b044b043540bb99de70692))

## [6.23.0](https://github.com/leather-wallet/extension/compare/v6.22.0...v6.23.0) (2024-01-16)


### Features

* improve error handling in ledger, surface incorrect app error ([5bff514](https://github.com/leather-wallet/extension/commit/5bff514db064ce145b52d72eadc8bbf6d24e519b))
* prompt user to open the app ([f672bec](https://github.com/leather-wallet/extension/commit/f672becf668fe2f67b2a55c02e3d6dfdad55ccd4))


### Bug Fixes

* add remote config to recover feature ([84a10dc](https://github.com/leather-wallet/extension/commit/84a10dcc2d84fc3c1ac17c16dae7e2c67415f03c))
* duplicate keys error ([77dc018](https://github.com/leather-wallet/extension/commit/77dc018286402c3f2ff7de369d92840d91bba602))
* lint for deps ([42179de](https://github.com/leather-wallet/extension/commit/42179de5e4bf82cfe821bc0e1d080cad7a7e7eed))
* remove fee title in increase fee form ([0de3900](https://github.com/leather-wallet/extension/commit/0de39009995aca8e6b809c759e9005f09b8ff970))
* track error codes ([227f6ee](https://github.com/leather-wallet/extension/commit/227f6ee10b06f420e4061551a284202ff5c059fe))
* **ui:** rebuild tabs with radix primitives, ref [#4309](https://github.com/leather-wallet/extension/issues/4309) ([3b0488e](https://github.com/leather-wallet/extension/commit/3b0488e7ba694216f92013c13e9d7a0cb7880e80))
* unused exports ([3fff31d](https://github.com/leather-wallet/extension/commit/3fff31d783722aa96131897105d18307289b4127))


### Internal

* add improved sentry perf tracking ([8b96e9a](https://github.com/leather-wallet/extension/commit/8b96e9a4fbc7262026bee545186694e2e2565733))
* check instance of error before passing it to checkLockedDeviceError ([e342642](https://github.com/leather-wallet/extension/commit/e3426422e535601d5ae7d38d49b1e8c6f58cc4f5))
* post-release merge back ([2eaa09f](https://github.com/leather-wallet/extension/commit/2eaa09f7797e01f358a78d96f7498851270f1199))
* quit app ourselves instead of prompting user to do it ([35c2ff1](https://github.com/leather-wallet/extension/commit/35c2ff13a87c4b35037fdbadc5e9dd0b4a8cdb15))
* remove unneeded radix styles ([6808536](https://github.com/leather-wallet/extension/commit/6808536ee67df8ba27a55539a00ab83e1548c998))
* reuse getAppAndVersion from bitcoin app instance method ([e894808](https://github.com/leather-wallet/extension/commit/e8948085fa176dde7960212ce97d962604de2128))
* select and dropdown, ref [#4798](https://github.com/leather-wallet/extension/issues/4798) ([a82457d](https://github.com/leather-wallet/extension/commit/a82457d8f04e94b696fe4b54edbd8981f311c353))
* token radii and keyframe, ref [#4637](https://github.com/leather-wallet/extension/issues/4637) ([e67b61d](https://github.com/leather-wallet/extension/commit/e67b61d5c27cd4129415aa63e1fa49e30efdb5ae))
* update panda ([2418a1c](https://github.com/leather-wallet/extension/commit/2418a1c9cb4a1310b588c673a76f7aa549ad35d2))

## [6.22.0](https://github.com/leather-wallet/extension/compare/v6.21.2...v6.22.0) (2024-01-09)


### Features

* add storybook, ref [#1230](https://github.com/leather-wallet/extension/issues/1230) ([958f177](https://github.com/leather-wallet/extension/commit/958f1776d8d9cca2510123952f9bc3f31a26574b))
* deploy storybook with chromatic ([b22ee5d](https://github.com/leather-wallet/extension/commit/b22ee5d220133148511323cda59757b5f4c2c490))
* ui dropdown and select, ref [#4312](https://github.com/leather-wallet/extension/issues/4312) and [#4417](https://github.com/leather-wallet/extension/issues/4417) ([3bd7ab4](https://github.com/leather-wallet/extension/commit/3bd7ab400cd30b485f447799785b9da80168032a))


### Bug Fixes

* asset list ui bug, ref [#4603](https://github.com/leather-wallet/extension/issues/4603) ([9a2e8b4](https://github.com/leather-wallet/extension/commit/9a2e8b4bee19b812d1d62491aeca44ceafcfeb13))
* delete unused import ([072cbd6](https://github.com/leather-wallet/extension/commit/072cbd67fe7805cca7c483739aa8ef61d69f8b5d))
* fee value calc bug, ref [#4742](https://github.com/leather-wallet/extension/issues/4742) ([a59e0d2](https://github.com/leather-wallet/extension/commit/a59e0d2192988b91d2fd4c52c0220d5fc4cb8676))
* infinite loader on buy screen if stacks account is not present ([1fb92aa](https://github.com/leather-wallet/extension/commit/1fb92aa101bfc4850f0a33883639fb77eb49736d))
* nan total amount bug ([8c37393](https://github.com/leather-wallet/extension/commit/8c3739343542281345bf63e5d70b8d509c3e564e))
* swap broadcasts, ref [#4750](https://github.com/leather-wallet/extension/issues/4750) ([54705e7](https://github.com/leather-wallet/extension/commit/54705e7ae34e8a59f1c95dbb04477a4866487a0b))
* swaps UI bug ([d4c99d5](https://github.com/leather-wallet/extension/commit/d4c99d5e8979bf050beb68befabb629a691c0ef5))
* user should be able to buy stacks for stacks account ([b2854c0](https://github.com/leather-wallet/extension/commit/b2854c0d2edf8ab92af3cf0cab1f7341fe079ff4))


### Internal

* move hooks to hooks folder ([336e12c](https://github.com/leather-wallet/extension/commit/336e12c475f10589be4012a35f7c627e7341fc95))
* post-release merge back ([44ca1fd](https://github.com/leather-wallet/extension/commit/44ca1fd8ccafad8ce5fa17c623865fd394efd7c6))
* update axios, radix, panda. remove unused radix primitives ([51320f9](https://github.com/leather-wallet/extension/commit/51320f999e24322225c8c45f5f4c0f0678a7b0a9))
* use isDefined function in filter ([ca7b44c](https://github.com/leather-wallet/extension/commit/ca7b44cc4b53a5f12a56d8efab55d8345355a749))

## [6.21.2](https://github.com/leather-wallet/extension/compare/v6.21.1...v6.21.2) (2023-12-21)


### Bug Fixes

* ledger locked stx, ref [#4539](https://github.com/leather-wallet/extension/issues/4539) ([5c89eea](https://github.com/leather-wallet/extension/commit/5c89eea58f491c2a81083568f1e30f274a4a6464))
* remove hiro api key ([7c73d9e](https://github.com/leather-wallet/extension/commit/7c73d9ead0ed3fb8ed97bd29b487900807b3fdad))


### Internal

* post-release merge back ([1836adf](https://github.com/leather-wallet/extension/commit/1836adf724e48b366208af723f5c13270b65735d))

## [6.21.1](https://github.com/leather-wallet/extension/compare/v6.21.0...v6.21.1) (2023-12-19)


### Bug Fixes

* remove stx deposit analytics ([0b123eb](https://github.com/leather-wallet/extension/commit/0b123eb061db023d7154eb6ecc0d42e2f616315f))


### Internal

* improve display of lock screen, closes [#4606](https://github.com/leather-wallet/extension/issues/4606) ([d0977cb](https://github.com/leather-wallet/extension/commit/d0977cb5934e8c133f3abd16bf045cd021c25827))
* post-release merge back ([8639a2e](https://github.com/leather-wallet/extension/commit/8639a2edcf26637664dda71645b05b7e05221fac))

## [6.21.0](https://github.com/leather-wallet/extension/compare/v6.20.0...v6.21.0) (2023-12-19)


### Features

* html video and audio inscription types, closes [#4077](https://github.com/leather-wallet/extension/issues/4077) and [#3556](https://github.com/leather-wallet/extension/issues/3556) ([e19eea4](https://github.com/leather-wallet/extension/commit/e19eea4fb217d949351425e99c4370ed83b7ba98))
* modified contracts and balance fetching ([63d29ba](https://github.com/leather-wallet/extension/commit/63d29ba39ed228a95da777f41a365fb8e91bf911))
* updated dlc tools version ([8dc1d22](https://github.com/leather-wallet/extension/commit/8dc1d22f2157d5304a9119c9ea503ca0afd453ef))


### Bug Fixes

* collectibles refetch, closes [#4413](https://github.com/leather-wallet/extension/issues/4413) ([13aa68f](https://github.com/leather-wallet/extension/commit/13aa68f5f592abe3d036d64bce306f72b45158d6))
* deprecate legacy font sizes, closes [#4587](https://github.com/leather-wallet/extension/issues/4587) ([5f539ca](https://github.com/leather-wallet/extension/commit/5f539ca786fc39524a200f7c68fd7475b1fa7970))
* handle inscription type svg, ref [#4727](https://github.com/leather-wallet/extension/issues/4727) ([b713c70](https://github.com/leather-wallet/extension/commit/b713c70cbcd83ddc27ada9a959434a413f501090))
* only show swaps option on mainnet, closes [#4687](https://github.com/leather-wallet/extension/issues/4687) ([af6443c](https://github.com/leather-wallet/extension/commit/af6443c13d88bb9f073c3a13483e4a2fd0249361))
* swaps test, ref [#4725](https://github.com/leather-wallet/extension/issues/4725) ([faae457](https://github.com/leather-wallet/extension/commit/faae457608c7ba21a791b07992816780e896d82d))
* **wallet:** fees warning alignment fix ([d771bcc](https://github.com/leather-wallet/extension/commit/d771bccc687e4b0c593dcd64a83fc96eda84c357))


### Internal

* post-release merge back ([75f4998](https://github.com/leather-wallet/extension/commit/75f4998b615fe3bc3ab1bdd55a83372c55e430fe))

## [6.20.0](https://github.com/leather-wallet/extension/compare/v6.19.0...v6.20.0) (2023-12-14)


### Features

* add fund btc screen ([df77eb9](https://github.com/leather-wallet/extension/commit/df77eb9ebb327ddcb9351ced7d8074e47f590e1a))
* added query for bitcoin contracts ([408ce03](https://github.com/leather-wallet/extension/commit/408ce0312b76ab9fb5ed8d5975f59a1518012158))
* modified bitcoin contracts balance fetching ([bc909cf](https://github.com/leather-wallet/extension/commit/bc909cfa3102b18459984b83b6b62871402f43c3))
* removed unnecessary useeffect, modfied btc entry point return if balance is undefined ([c858abb](https://github.com/leather-wallet/extension/commit/c858abb729a9c1a30f1793f5d8efb92554595ddc))
* sentry feedback ([c4f6260](https://github.com/leather-wallet/extension/commit/c4f626067356e43c75003a100eedcef52e6c9f0c))
* upgrade alex-sdk to 0.1.23 ([4a2b5d5](https://github.com/leather-wallet/extension/commit/4a2b5d5f3ed6e67ff381f8ca763a0869ae9c6ebb))


### Bug Fixes

* add CNAME to action ([e62c4b1](https://github.com/leather-wallet/extension/commit/e62c4b1e514869c2537db32d65a9782f0931cd06))
* **ledger:** inscription sends, non-index 0, closes [#4680](https://github.com/leather-wallet/extension/issues/4680) ([aae3221](https://github.com/leather-wallet/extension/commit/aae32219433386376c17f7a6d6d52c10382670a8))
* serialize sip10 form memo before displaying it ([6140a7c](https://github.com/leather-wallet/extension/commit/6140a7cadd25d4a1b4a4fdba5d73e3e47e84e034))
* use light mode icons ([8d160b0](https://github.com/leather-wallet/extension/commit/8d160b0d5928083b2aec329a07a7d45ba59d05d1))


### Internal

* post-release merge back ([11b48fc](https://github.com/leather-wallet/extension/commit/11b48fca8b85c16e94cf7e307bac5ad88aa0ab18))

## [6.19.0](https://github.com/leather-wallet/extension/compare/v6.18.0...v6.19.0) (2023-12-12)


### Features

* add rpc method for signing stacks messages ([e77a8d8](https://github.com/leather-wallet/extension/commit/e77a8d8db6879325c11003d36ef2e3ab8ad8af16))


### Bug Fixes

* add background location to brc-20 modal and fix typo ([7483b9e](https://github.com/leather-wallet/extension/commit/7483b9e52e175431bbd02778e128f6de603da352))
* broadcast ledger swap ([886309b](https://github.com/leather-wallet/extension/commit/886309b318dda5fa1c19f30b5a2772408e21acb6))
* fix brc-20 sendby signing transaction before finalising then broadcasting, closes [#4635](https://github.com/leather-wallet/extension/issues/4635) ([5aa7c3c](https://github.com/leather-wallet/extension/commit/5aa7c3c3d6d5c383c78f6457ac6aa9dd4a73e8c5))
* keep search params while doing background location redirect ([6b7ce6a](https://github.com/leather-wallet/extension/commit/6b7ce6a7946441e7b03864fc3a4a3313d28d61b7))
* playwright error ([5bef424](https://github.com/leather-wallet/extension/commit/5bef424e0e457e850cea1e08a1befe9274c34b72))
* revert signing logic to try both keys, closes [#4645](https://github.com/leather-wallet/extension/issues/4645) ([8b1be50](https://github.com/leather-wallet/extension/commit/8b1be500fa099bd09b1e9617d77c98be7843bab2))
* selecting testnet in tests ([d275d8c](https://github.com/leather-wallet/extension/commit/d275d8c9bb6a1914ffd3b94e7e41e956c7fb2035))
* swap test route path ([24d3677](https://github.com/leather-wallet/extension/commit/24d36773adfb2ab830fa0ab8d4063182c7656829))


### Internal

* add ledger signing routes to BRC-20 send ([42ee981](https://github.com/leather-wallet/extension/commit/42ee98101aacd61eacdde381b53209b738522518))
* add swap tests ([bd6dc1a](https://github.com/leather-wallet/extension/commit/bd6dc1a6d946727859f5b4f1b89b7d7b0b199f99))
* enable ledger swaps to test ([6539075](https://github.com/leather-wallet/extension/commit/6539075521f8250dcea08ff487b35267b7f94ac7))
* post-release merge back ([9414a9b](https://github.com/leather-wallet/extension/commit/9414a9bc23966f1a33ff156a9ae80abdaab1cccf))
* **signing:** support non-index zero input signing, closes [#4620](https://github.com/leather-wallet/extension/issues/4620), [#4628](https://github.com/leather-wallet/extension/issues/4628) ([d2edb18](https://github.com/leather-wallet/extension/commit/d2edb187e80bef233606a9a38d8b83dc83f4d91f))

## [6.18.0](https://github.com/leather-wallet/extension/compare/v6.17.0...v6.18.0) (2023-12-05)


### Features

* add tests for psbt sigining ([c5ee6b7](https://github.com/leather-wallet/extension/commit/c5ee6b75776e9b21faa15a6d8cb933181a47801f))
* modified explorer link maker function to have a regtest option ([4b158d2](https://github.com/leather-wallet/extension/commit/4b158d231ff8a5c2b8d9bba41b512230e817870f))
* use-explorer-link got separated into bitcoin and stacks function variant ([89bd3c5](https://github.com/leather-wallet/extension/commit/89bd3c52834c5f332cd7f0ba7e6f87863cb54216))


### Bug Fixes

* add color to warning background, closes [#4600](https://github.com/leather-wallet/extension/issues/4600) ([cdcc597](https://github.com/leather-wallet/extension/commit/cdcc59787fc74ebd98449a2314d2dfb72ef5f518))
* adjust position of fee slot, closes [#4462](https://github.com/leather-wallet/extension/issues/4462) ([fc2e08a](https://github.com/leather-wallet/extension/commit/fc2e08a929768ef7bba41b736f81f7426cfd8a50))
* change to hstack to align buttons, closes [#4592](https://github.com/leather-wallet/extension/issues/4592) ([d00d83f](https://github.com/leather-wallet/extension/commit/d00d83faf6952f0e658622102435827fe6c18aa1))
* decouple choose crypto asset components and add a new lint rule ([7b11213](https://github.com/leather-wallet/extension/commit/7b112135201e6b86221d7868183177f7c23d0a29))
* make sure pending transactions have the correct circle colour, closes [#4591](https://github.com/leather-wallet/extension/issues/4591) ([eb96ac2](https://github.com/leather-wallet/extension/commit/eb96ac2732a1ced897aa4c9c9dc01da8dd786613))
* remove PSBT learn more link, closes [#4607](https://github.com/leather-wallet/extension/issues/4607) ([1d9fd60](https://github.com/leather-wallet/extension/commit/1d9fd6092cf0606c50080061fa2f1dff614ee5ee))
* roll back move to async from PR 4490 to supress sentry error ([9ec8a0c](https://github.com/leather-wallet/extension/commit/9ec8a0cacd1f6cf54d057c1879857b249d56a089))
* set backgroundLocation for send ordinal, closes [#4562](https://github.com/leather-wallet/extension/issues/4562) ([b104a48](https://github.com/leather-wallet/extension/commit/b104a482c07eb5099e50c7f0c08034037d9f811b))
* underlaid button, closes [#4615](https://github.com/leather-wallet/extension/issues/4615) ([907f33c](https://github.com/leather-wallet/extension/commit/907f33ccd8c8e432bd30fe855596bdd35cf25688))


### Internal

* consume design tokens from extension ([d476fa3](https://github.com/leather-wallet/extension/commit/d476fa31cd7061613b43d157c6b724edda9efd74))
* consume design tokens from extension ([0e52e5f](https://github.com/leather-wallet/extension/commit/0e52e5fb28428202e99f4ac533741171be43f002))
* improve icons ([fcbf0d7](https://github.com/leather-wallet/extension/commit/fcbf0d725c1557701bccd8224c60bc27441c2fe5))
* post-release merge back ([34f5553](https://github.com/leather-wallet/extension/commit/34f5553a8e22dd50585fc8f02f6ef1711be3d847))

## [6.17.0](https://github.com/leather-wallet/extension/compare/v6.16.1...v6.17.0) (2023-11-28)


### Features

* extended add-network page with the option to add bitcoin network too ([870574a](https://github.com/leather-wallet/extension/commit/870574a724030fe2105d482bda6c0c93f44388ba))
* support bitcoin ledger, closes [#2893](https://github.com/leather-wallet/extension/issues/2893) ([8a81f58](https://github.com/leather-wallet/extension/commit/8a81f58c6261a1c8ac430e7fe8a410e0c11af4bd))
* updated dlc-tools package, modified accept bitcoin contract rpc params ([0742719](https://github.com/leather-wallet/extension/commit/0742719793d72bd182167d5b0c50cb8515953b23))


### Bug Fixes

* account circle numbers and delete unused code ([a6588dc](https://github.com/leather-wallet/extension/commit/a6588dc5a2000ecea6f13be47a54ba2dac6b7bbf))
* add background state for ledger connect modal ([41fef37](https://github.com/leather-wallet/extension/commit/41fef37ff46630745b8c5372cd887e8e3436f913))
* align heading text left, closes [#4423](https://github.com/leather-wallet/extension/issues/4423) ([31ddc89](https://github.com/leather-wallet/extension/commit/31ddc89ce0c13092aeba8435713741ef96ba3d2d))
* allow users to click input when populated, closes [#4582](https://github.com/leather-wallet/extension/issues/4582) ([222a854](https://github.com/leather-wallet/extension/commit/222a854fc542df3e1087d95bfaa34f0e6c352b0b))
* axios get request for config ([3ad4b06](https://github.com/leather-wallet/extension/commit/3ad4b06b337f3e32a88da90b174809a4081945a0))
* bitcoin fees tx size calc ([3f5718c](https://github.com/leather-wallet/extension/commit/3f5718c300f5cb14619fb3a362868d8a2a6c4fe8))
* filter network dust amounts when sending all ([b7a34a9](https://github.com/leather-wallet/extension/commit/b7a34a9bc64d7f5fca205886bdc8519c164754d6))
* fixed previously saved network loading ([c8724b4](https://github.com/leather-wallet/extension/commit/c8724b426c377a258191ef10cdf7fd7beed1726e))
* give more margin to Continue button in extension mode, closes [#4423](https://github.com/leather-wallet/extension/issues/4423) ([8d61e93](https://github.com/leather-wallet/extension/commit/8d61e933d4e6323833ea9ad2a3ed86d3b1661139))
* mark ui bugs ([e9da651](https://github.com/leather-wallet/extension/commit/e9da65164273476ae4ba0c2de185dc07c7230d34))
* minor ui bugs ([0095ebc](https://github.com/leather-wallet/extension/commit/0095ebc61344472757a9d64ac593b3526b2937a9))
* **popup:** avatar circle on stacks transactions ([8dbfefe](https://github.com/leather-wallet/extension/commit/8dbfefe8fcf5de687c2a137bce5eb2ff7a94b794))
* provider name in tests ([6b75267](https://github.com/leather-wallet/extension/commit/6b7526759bde7975e661569bba928717b38c91b3))
* psbt bare utxo signing ([954e707](https://github.com/leather-wallet/extension/commit/954e70772625f4c62509a872ac9852b4b36dbe8a))
* qr code ([b035f20](https://github.com/leather-wallet/extension/commit/b035f205c1209a983d5cdfb6ea0b3fce9025f407))
* remove not working onFocusborder, to be fixed in [#4583](https://github.com/leather-wallet/extension/issues/4583) ([cddf09b](https://github.com/leather-wallet/extension/commit/cddf09b8fd4145a926b70fd200776cb351773c19))
* sign out and close all tabs on create wallet, closes [#4517](https://github.com/leather-wallet/extension/issues/4517) ([0b47dea](https://github.com/leather-wallet/extension/commit/0b47dea4ea7359fb1c5e49aa99e390c52768bb1c))
* skip bitcoin contract tests ([83c4d04](https://github.com/leather-wallet/extension/commit/83c4d045a87f35151eaf28eacaa4ada291fc4fc4))


### Internal

* fix type errors ([98f5ddf](https://github.com/leather-wallet/extension/commit/98f5ddfc7fa3978e3ded0b86258e3555b280b69d))
* icon tokens ([91403d7](https://github.com/leather-wallet/extension/commit/91403d7d8885270637d453e7ae76dea419c4e0b7))
* migrate icons ([fbc6580](https://github.com/leather-wallet/extension/commit/fbc6580936dd1527689e70d2b54528e31fa4e123))
* post-release merge back ([c3c7bd1](https://github.com/leather-wallet/extension/commit/c3c7bd1ba5b8205040e0f9b98aeaa44d577c913f))
* remove bitcoinjs-lib from inscription send ([97854b0](https://github.com/leather-wallet/extension/commit/97854b069c7bada08047b07aa39e56af9b7da6b2))
* remove patch file ([be8b040](https://github.com/leather-wallet/extension/commit/be8b04035f41615dad11ada5c80b6fc994795fc5))
* remove remaining old icon libraries ([1fa4e6c](https://github.com/leather-wallet/extension/commit/1fa4e6cec0b7fcc015bc6d7368def1be45eea217))
* remove stacks ui ([99fb117](https://github.com/leather-wallet/extension/commit/99fb11727e62f796e4a303afa4845881222dbb66))
* remove unneeded parent button, closes [#4550](https://github.com/leather-wallet/extension/issues/4550) ([c44a7bb](https://github.com/leather-wallet/extension/commit/c44a7bb7dd33e8f2722ee9996536d68e98f17bb6))
* update font and color for receive asset ([800fa3e](https://github.com/leather-wallet/extension/commit/800fa3ed35c220166ee8693396209c0a23fc10e1))
* update panda ([2807b50](https://github.com/leather-wallet/extension/commit/2807b5002dc860765ddc8769f1944ef9e59d8ebc))
* update readme ([c86f2ab](https://github.com/leather-wallet/extension/commit/c86f2ab2d2449c6e3f66827b5c84a62efcbfd87c))
* use tokens for border radius ([b387903](https://github.com/leather-wallet/extension/commit/b38790346a179447028b325becdfc58c1b11fa0a))

## [6.16.1](https://github.com/leather-wallet/extension/compare/v6.16.0...v6.16.1) (2023-11-17)


### Bug Fixes

* add hiro api key, closes [#4518](https://github.com/leather-wallet/extension/issues/4518) ([8c3f3d2](https://github.com/leather-wallet/extension/commit/8c3f3d2535fc1da5292eef04c2b922b9985d6f83))
* **auth:** sign out from view secret key ([ad056f2](https://github.com/leather-wallet/extension/commit/ad056f2b3cb0712687498cab1f49d5fc38e6579c))
* **auth:** wait for sign out to finish to navigate ([5630364](https://github.com/leather-wallet/extension/commit/56303645487220684fa83a2b8dd0c5f3a879588b))
* **ui:** change locked screen ui to match the updated styles ([35493d5](https://github.com/leather-wallet/extension/commit/35493d5775d3d48111cdc9321d31bb47a4f92acc))


### Internal

* post-release merge back ([831989d](https://github.com/leather-wallet/extension/commit/831989de0cd2749dfa5045c1109133ccb012365c))

## [6.16.0](https://github.com/leather-wallet/extension/compare/v6.15.1...v6.16.0) (2023-11-08)


### Features

* change default test acc state ([9d00f06](https://github.com/leather-wallet/extension/commit/9d00f0671214c5a931e555277a689a7fdfbf19e7))
* process stacks ledger keys ([7e71b91](https://github.com/leather-wallet/extension/commit/7e71b910303686caaa66f2baf20fe040207c1613))


### Bug Fixes

* brc20 send form bug, closes [#4482](https://github.com/leather-wallet/extension/issues/4482) ([a578e08](https://github.com/leather-wallet/extension/commit/a578e08116b3e2fa2bf1306855acf67042e5df4f))
* **ledger:** stacks contract call signing, closes [#4478](https://github.com/leather-wallet/extension/issues/4478) ([6b81c01](https://github.com/leather-wallet/extension/commit/6b81c0157cc7876195dc91161bb2b0d439b7962c))
* map txid to txId to match new format of useExplorerLink, closes [#4446](https://github.com/leather-wallet/extension/issues/4446) ([cbf8814](https://github.com/leather-wallet/extension/commit/cbf88147f8b1b92c55e888382cd064b0cb81cdac))
* migration redux persist ([bd77be5](https://github.com/leather-wallet/extension/commit/bd77be5407d932a67d75ef3004edceb1e580ecc7))
* refactor error label to align icon and make text consistent size, closes [#4166](https://github.com/leather-wallet/extension/issues/4166) ([eb69ae9](https://github.com/leather-wallet/extension/commit/eb69ae92f2f14a73068637f4f387b60fe0ed4b82))
* sip10 tokens ledger send form, closes [#4491](https://github.com/leather-wallet/extension/issues/4491) ([1bd7837](https://github.com/leather-wallet/extension/commit/1bd783737577958e7ae16ed2a93244fc9db0b6dd))
* themify yellow, red, green, blue ([642e08a](https://github.com/leather-wallet/extension/commit/642e08a2ce0dd91bd4adad7e6cff5e68c419faa9))


### Internal

* init ledger store refactor ([19eee1c](https://github.com/leather-wallet/extension/commit/19eee1c21fa96031fb864513cda170c6aa77ace1))
* ledger store ([d3d86cc](https://github.com/leather-wallet/extension/commit/d3d86cc9c598398820ed544cb5db6305cafa6627))
* post-release merge back ([43750af](https://github.com/leather-wallet/extension/commit/43750aff804cb3d934aa9432c03ec771bf270917))
* post-release merge back ([b9e726e](https://github.com/leather-wallet/extension/commit/b9e726e937fe35cb31efe8724cff5b585f27961b))
* update icon, closes [#4166](https://github.com/leather-wallet/extension/issues/4166) ([b1e934e](https://github.com/leather-wallet/extension/commit/b1e934e229c336064edeaa59455893258dd48bee))

## [6.15.1](https://github.com/leather-wallet/extension/compare/v6.15.0...v6.15.1) (2023-11-04)


### Bug Fixes

* **ledger:** stacks contract call signing, closes [#4478](https://github.com/leather-wallet/extension/issues/4478) ([e7b2b6a](https://github.com/leather-wallet/extension/commit/e7b2b6a07e1f85280508a9269853b2c404d6dd83))

## [6.15.0](https://github.com/leather-wallet/extension/compare/v6.14.0...v6.15.0) (2023-11-02)


### Features

* temporary fix for notification banners ([e349e0c](https://github.com/leather-wallet/extension/commit/e349e0c5ac19dfef2f083b57091004485cc4259b))
* updated dlc-tools version, conditional bitcoin contracts entry point rendering ([194d102](https://github.com/leather-wallet/extension/commit/194d10259095d2cdad0492ed6089aceae0db48db))


### Bug Fixes

* bug with go back action in send flow, [#4355](https://github.com/leather-wallet/extension/issues/4355) ([92aa04c](https://github.com/leather-wallet/extension/commit/92aa04c223f2ee462e6db0c258ae45f9809386c1))
* default icon stacks png ([eff18bf](https://github.com/leather-wallet/extension/commit/eff18bfee243a57d145bc4a6da7ae3a0396ed6e0))
* fee calculation in for btc txs closes [#4455](https://github.com/leather-wallet/extension/issues/4455) ([cc5908b](https://github.com/leather-wallet/extension/commit/cc5908b3090801b1eebbe4d7b5c3a5ae8345c4d3))
* fix typo in text, closes [#4461](https://github.com/leather-wallet/extension/issues/4461) ([6544d8e](https://github.com/leather-wallet/extension/commit/6544d8efdfbee7a88b2fb5189fd964a0c5f2e733))
* improve styling of fund page in extension view ([ce31f2c](https://github.com/leather-wallet/extension/commit/ce31f2ce85234832d3641ad4401e1b2ca3a12423))
* removed attestor checking and argument from the bitcoin contract interface, better error handling ([7a0a2e8](https://github.com/leather-wallet/extension/commit/7a0a2e80469930694d76aef79aec0eb847e3837c))


### Internal

* add ledger to swaps, disabled, ref [#4367](https://github.com/leather-wallet/extension/issues/4367) ([5273dd4](https://github.com/leather-wallet/extension/commit/5273dd487b3a836546477cedd0b018b3505e66b0))
* **ledger:** stacks signing, closes [#4420](https://github.com/leather-wallet/extension/issues/4420) ([6b8919b](https://github.com/leather-wallet/extension/commit/6b8919b2adf1d16cdcda9c88ec4103ac9cd4f2da))
* post-release merge back ([24a124c](https://github.com/leather-wallet/extension/commit/24a124c91c592522d1732432649f6aedb2220206))
* swap asset list display name, closes [#4421](https://github.com/leather-wallet/extension/issues/4421) ([7c65fb3](https://github.com/leather-wallet/extension/commit/7c65fb35621a6988ea2d8c34f862640aad28f55e))

## [6.14.0](https://github.com/leather-wallet/extension/compare/v6.13.0...v6.14.0) (2023-10-30)


### Features

* removed stacks/ui types and unnecessary data-testids ([5c85448](https://github.com/leather-wallet/extension/commit/5c85448cde2cf955efd1f841630ef0bc028c02a2))


### Bug Fixes

* add default type to button, closes [#4333](https://github.com/leather-wallet/extension/issues/4333) ([433216f](https://github.com/leather-wallet/extension/commit/433216f067c893eb46418fa908913e133ed4eb0c))
* incorrect ui with psbt listing tx, closes [#4428](https://github.com/leather-wallet/extension/issues/4428) ([e83db28](https://github.com/leather-wallet/extension/commit/e83db28f97a9c98d9aedf928002bdad882ca2263))
* remove query options from btc fees, closes [#4198](https://github.com/leather-wallet/extension/issues/4198) ([c7d80eb](https://github.com/leather-wallet/extension/commit/c7d80ebae1f385a93a1d4e30719835bd06b91d3b))
* removed unnecessary forwardwithrefs ([fc69b0f](https://github.com/leather-wallet/extension/commit/fc69b0f07f8fbbf68124a56332cb8e38a5a715b2))
* send ordinal routes, closes [#4444](https://github.com/leather-wallet/extension/issues/4444) ([dc209c2](https://github.com/leather-wallet/extension/commit/dc209c2d25f68abe832e581b49fd01c0fa03f2bc))
* swap console logs, closes [#4438](https://github.com/leather-wallet/extension/issues/4438) ([e8fa72f](https://github.com/leather-wallet/extension/commit/e8fa72ffc441b390512e4fcd126e92a94dc2404c))
* swaps min to receive format, closes [#4442](https://github.com/leather-wallet/extension/issues/4442) ([c5cf61c](https://github.com/leather-wallet/extension/commit/c5cf61c9e80018f75c35df8aa81ecfb908d071f5))
* tx req fee error, closes [#4231](https://github.com/leather-wallet/extension/issues/4231) ([190868a](https://github.com/leather-wallet/extension/commit/190868a3f3e95ad22354188c18d92e7dc8f83076))


### Internal

* import prettier config from monorepo, closes [#4268](https://github.com/leather-wallet/extension/issues/4268) ([733e503](https://github.com/leather-wallet/extension/commit/733e503944a9b51c5f3f8798f59022c60c51c649))
* post-release merge back ([efee04f](https://github.com/leather-wallet/extension/commit/efee04f2b6921f0bd34e73c3aaccf2c252a24282))
* remove icon transition, closes [#4332](https://github.com/leather-wallet/extension/issues/4332) ([b75b20a](https://github.com/leather-wallet/extension/commit/b75b20a302539d8f66d998c2d4bc6c36cd5066d4))

## [6.13.0](https://github.com/leather-wallet/extension/compare/v6.12.0...v6.13.0) (2023-10-26)


### Features

* add alex-sdk and alex integreation ([6aabb24](https://github.com/leather-wallet/extension/commit/6aabb241779372dfb7ae656606acd10d733e502c))
* broadcast swap tx ([d33c074](https://github.com/leather-wallet/extension/commit/d33c0742bf75b7e6d51501ad648ec997ba54214f))
* implement alex sponsored txs ([2c790f8](https://github.com/leather-wallet/extension/commit/2c790f81fc1504a8f11e199829b5383204815c77))


### Bug Fixes

* add border tokens ([82f4cad](https://github.com/leather-wallet/extension/commit/82f4cad191545a96c116cce987bd68121e0af24b))
* async fetch for exchange rate ([c7c5c3e](https://github.com/leather-wallet/extension/commit/c7c5c3e5a884e936ddda82a9d14b5005acc325bc))
* temp hide swaps for ledger ([08b0e9c](https://github.com/leather-wallet/extension/commit/08b0e9c3f79b40e31ca3b27a06590df97a645ba5))


### Internal

* make getter fn for chrome.storage ([d9bd157](https://github.com/leather-wallet/extension/commit/d9bd15707a2d6c04ade9e58462cd2777069e1ca0))
* more swap qa changes ([59cb91e](https://github.com/leather-wallet/extension/commit/59cb91e6e34a4b33170f23a45a784ab6dfa2953d))
* post-release merge back ([7afc103](https://github.com/leather-wallet/extension/commit/7afc103fac240fb8404ad9807d39d9a5c91df304))
* swap qa changes ([641df65](https://github.com/leather-wallet/extension/commit/641df65ff11ff6bfa1d735be290910661aa82270))

## [6.12.0](https://github.com/leather-wallet/extension/compare/v6.11.0...v6.12.0) (2023-10-24)


### Features

* add connect btn ([3903ba1](https://github.com/leather-wallet/extension/commit/3903ba17f208cde8eeb1f13dd30c66eb7b2e3b64))
* add unsupported browsers modal ([2febd49](https://github.com/leather-wallet/extension/commit/2febd494ce016dbbed1690105c7d019ed69d8fb7))
* added bitcoin contract list page and entry point ([a28678d](https://github.com/leather-wallet/extension/commit/a28678d32b73de0444e9154b727d07c5d8d668c0))
* added tests for bitcoin contract request ([157f97e](https://github.com/leather-wallet/extension/commit/157f97e9c5ff4ec0788adfc1076c4dd5745bf035))
* return addresses of regtest and signet ([a0717e3](https://github.com/leather-wallet/extension/commit/a0717e38887e30ed32eb9d08f7be81a2dec105a9))
* rework onboarding ledger flow, closes [#4281](https://github.com/leather-wallet/extension/issues/4281) ([47aa2e2](https://github.com/leather-wallet/extension/commit/47aa2e2598bbcdd8230f8ef6701bbe252a811bb4))


### Bug Fixes

* align text and caption left so it appears correctly in extension view ([bd25751](https://github.com/leather-wallet/extension/commit/bd25751a97dbabbd6cf41a90680e519adbe91ef8))
* allow direct access to /receive/stx ([e7c8d8d](https://github.com/leather-wallet/extension/commit/e7c8d8decf577e85d57abc2cb8de49a894b42690))
* change acc bug ([ce13789](https://github.com/leather-wallet/extension/commit/ce1378926dd30d7b7ff92d539942830bfc1ec80f))
* clean code ([77a4822](https://github.com/leather-wallet/extension/commit/77a4822075b66ac168952802dc4193c1dbd4d89b))
* clean code, add note re ordinals modal ([a06aa39](https://github.com/leather-wallet/extension/commit/a06aa39eaca8312b7215055308892a307e82d194))
* clean code, add note re ordinals modal ([993df34](https://github.com/leather-wallet/extension/commit/993df34892f2bbc5fc7d10ab2c47c49aff211c46))
* close original recieve modal before opening qr code modal to prevent double modal ([10b7246](https://github.com/leather-wallet/extension/commit/10b72461f6af2958c0408d6265fc10aa68eb46ed))
* code spanning past viewport width ([db35a49](https://github.com/leather-wallet/extension/commit/db35a4932e1034e28c2f54c97d88b5c7bdccffd0))
* do not nest recieve sub routes to prevent double overlay of modal and maintain direct access ([1477c96](https://github.com/leather-wallet/extension/commit/1477c96270495898b90e6ef8c8c38075df66fa6e))
* enable bg redirect to overlay modal in new tab ([36c969f](https://github.com/leather-wallet/extension/commit/36c969f2f009b785958866720567204fcd0b21c9))
* get build passing ([5826143](https://github.com/leather-wallet/extension/commit/5826143c95a360c1696a1f6fd41c2023a7f67e5d))
* improve type loading ([d79ee62](https://github.com/leather-wallet/extension/commit/d79ee626f994d05922427d066669529798be4ebf))
* ledger tx sign error process ([618923f](https://github.com/leather-wallet/extension/commit/618923fc0cc964b5c9e0534e343a30ca0d58dbd1))
* pass child routes as children to appease dep cruiser ([200907a](https://github.com/leather-wallet/extension/commit/200907abda5dcdbe3b51f69ebb9c7fcb10f320d0))
* re-introduce bg location for hometabs so modals overlay on top of activity ([12571b0](https://github.com/leather-wallet/extension/commit/12571b020b35e2fd943c138fb0f10ad0df510a24))
* refactor modals to overlay on top of backgroundLocation consistently, closes [#4028](https://github.com/leather-wallet/extension/issues/4028) ([c006894](https://github.com/leather-wallet/extension/commit/c006894e14f6ad26e9f3f4c978a73999fbc6b834))
* revert drawer changes from brand audit, closes [#4249](https://github.com/leather-wallet/extension/issues/4249) ([e437710](https://github.com/leather-wallet/extension/commit/e437710d3dc6ab7bbe7dfae4eaadef25c33ba2a3))
* update path to receive stx to fix test ([2c897ab](https://github.com/leather-wallet/extension/commit/2c897abaff7dd17c7b63b6daaf98acf32282086d))
* use bg location to open in new tab. share modal bg logic ([07c5c98](https://github.com/leather-wallet/extension/commit/07c5c98100d6a81399d6b3f402f7d569b385a5b8))
* use grid for asset rows to stop overflow while allowing width, closes [#4171](https://github.com/leather-wallet/extension/issues/4171) ([529c03d](https://github.com/leather-wallet/extension/commit/529c03d9b1c9cdf9473c5343c0593f615ac4b7f2))
* use independant route for FundReceiveStx ([e4bfd24](https://github.com/leather-wallet/extension/commit/e4bfd24a61350d28d99a53864f2572ff74b9d934))
* use network.chain.bitcoin.url in api hooks, closes [#4330](https://github.com/leather-wallet/extension/issues/4330) ([ceaf228](https://github.com/leather-wallet/extension/commit/ceaf228cf9052032e26d6deb107c3ec6f5ad7672))
* wallet type definition ([ddc91e3](https://github.com/leather-wallet/extension/commit/ddc91e36669a44d60ea886acbf661063b09ef066))
* welcome page header padding, closes [#4374](https://github.com/leather-wallet/extension/issues/4374) ([0817a5e](https://github.com/leather-wallet/extension/commit/0817a5ed4599d6b94663e38a603ff92470ffaf69))


### Internal

* debug window close util ([77056e7](https://github.com/leather-wallet/extension/commit/77056e7fcc947ba15542f66f59fc4200187fb099))
* deprecate unused routes ([a3710c5](https://github.com/leather-wallet/extension/commit/a3710c5d53e1fc7ec813810ad132fec5bd4b1f1b))
* explore routing issues ([0dbbdcf](https://github.com/leather-wallet/extension/commit/0dbbdcf3d9029f5a02c74fa0dfcccaa813ea8139))
* local copyToClipboard hook ([017fa3a](https://github.com/leather-wallet/extension/commit/017fa3a56b6374fcc9241f02ea06b142f989c14c))
* psbt stackui layout ([e71e457](https://github.com/leather-wallet/extension/commit/e71e4576714abecfabdc4ea5f56ed15cebd743b6))

## [6.11.0](https://github.com/leather-wallet/extension/compare/v6.10.0...v6.11.0) (2023-10-13)


### Features

* sBTC devenv network ([1eb34b8](https://github.com/leather-wallet/extension/commit/1eb34b8324cb09e73f4dabe0768c37301d5c7c2f))


### Bug Fixes

* alter position of receive modal in extension view,  [#4165](https://github.com/leather-wallet/extension/issues/4165) ([07989ae](https://github.com/leather-wallet/extension/commit/07989ae39e199000e0abf9cb420dc5eabea3e5eb))
* change tab hover bg colour, closes [#4249](https://github.com/leather-wallet/extension/issues/4249) ([1f8e863](https://github.com/leather-wallet/extension/commit/1f8e8631d1c57df81895ae64df820a1dc066fd6c))
* give activity screen a min height to stop it jumping when empty, closes [#4249](https://github.com/leather-wallet/extension/issues/4249) ([75466bd](https://github.com/leather-wallet/extension/commit/75466bdb20af9d5443b31ec3fa4708b75f707ff4))
* improve display of select account in extension mode, [#4165](https://github.com/leather-wallet/extension/issues/4165) ([f09aec3](https://github.com/leather-wallet/extension/commit/f09aec34ab1e395f04424a8357f3ed3f0ab352a7))
* make adjustments based on PR review feedback ([29c5d59](https://github.com/leather-wallet/extension/commit/29c5d59c34b562097478971fa5230bb13d5218d6))
* name wrapper more specifically ([230fe46](https://github.com/leather-wallet/extension/commit/230fe46abafafd71e3434779bdb7c4b591736c0b))
* properly switch between 12 and 24 word inputs, closes [#4250](https://github.com/leather-wallet/extension/issues/4250) ([1a86b85](https://github.com/leather-wallet/extension/commit/1a86b85a4bede129c2b880cdbbff1be2f6cce504))
* stop create account button disappearing at smaller heights, [#4165](https://github.com/leather-wallet/extension/issues/4165) ([f166a31](https://github.com/leather-wallet/extension/commit/f166a31e50aed555c6a54495caf742e704c19461))
* update address displayer to use text-subdued for odd, closes [#4249](https://github.com/leather-wallet/extension/issues/4249) ([a9562c6](https://github.com/leather-wallet/extension/commit/a9562c616166fa6e44760a587c798d21c125d593))
* update collectible header font and align icon, closes [#4290](https://github.com/leather-wallet/extension/issues/4290) ([e88a18b](https://github.com/leather-wallet/extension/commit/e88a18bdf70ce719aa98f0a9e29da1dad5856082))


### Internal

* fix missing protocol ([ba1a712](https://github.com/leather-wallet/extension/commit/ba1a712cda14574ef0a24ee66fc4328d83fbc956))

## [6.10.0](https://github.com/leather-wallet/extension/compare/v6.9.2...v6.10.0) (2023-10-11)


### Features

* stacks multisig support, closes [#3889](https://github.com/leather-wallet/extension/issues/3889) ([9dabfc2](https://github.com/leather-wallet/extension/commit/9dabfc28f5c0273bfcee6130ad48209cb1621d36))


### Bug Fixes

* outdated version warning ([d56b52c](https://github.com/leather-wallet/extension/commit/d56b52cd5df7f03c281b59ca0f84fad561a95ff2))
* outdated version warning ([c0e859c](https://github.com/leather-wallet/extension/commit/c0e859c2d3bbf024766662890a9345fe1c24739d))
* regtest addresses, closes [#4223](https://github.com/leather-wallet/extension/issues/4223) ([eedbed5](https://github.com/leather-wallet/extension/commit/eedbed51d723aa4f1cbcb9aef883e94a0a3c18b2))


### Internal

* build job ([917a00b](https://github.com/leather-wallet/extension/commit/917a00b99127a166eb9d0a5e604a9ef00a723be7))
* improve pr-time messaging ([f26c5fe](https://github.com/leather-wallet/extension/commit/f26c5fe336c67dfd9760274215d12861b70cdf9c))

## [6.9.2](https://github.com/leather-wallet/extension/compare/v6.9.1...v6.9.2) (2023-10-04)


### Bug Fixes

* add mnemonic field validation, closes [#4130](https://github.com/leather-wallet/extension/issues/4130) ([b7970d5](https://github.com/leather-wallet/extension/commit/b7970d5f9285388d03374ccdacf046945574b1ad))
* adjust padding of numerical slot, closes [#4243](https://github.com/leather-wallet/extension/issues/4243) ([55019df](https://github.com/leather-wallet/extension/commit/55019dff89495dafce60d632c10ac4e2446851d0))
* do not disable button using dirty flag ([1a31a7b](https://github.com/leather-wallet/extension/commit/1a31a7b6d134e04c8f59f5be9ac847aff0add57e))
* filter spam transactions from activity, closes [#4017](https://github.com/leather-wallet/extension/issues/4017) ([b1bf006](https://github.com/leather-wallet/extension/commit/b1bf0061c993e09576fa1d0e12fcf846378a66d7))
* fix prettier ([0775186](https://github.com/leather-wallet/extension/commit/0775186bda024388133f5fa278c0582575c2fbef))
* fix responsive style of funding page, closes [#66](https://github.com/leather-wallet/extension/issues/66) ([361c970](https://github.com/leather-wallet/extension/commit/361c9709c93e7fb7f2402567af52f6a992019bfc))
* fix spacing between content ([31850ba](https://github.com/leather-wallet/extension/commit/31850ba953820614dc36b51b503c790d0407bea0))
* reduce zIndex so that onClick works consistently without needing to double click ([5f44d5a](https://github.com/leather-wallet/extension/commit/5f44d5a2de8dd0b0ac917766732d12fdb7862371))
* remove legacy bip 39 library, closes [#4130](https://github.com/leather-wallet/extension/issues/4130) ([4a4185a](https://github.com/leather-wallet/extension/commit/4a4185a1eab0e550662d8f1cf93cb37fa5d98c49))
* roll back use of useFocus as it prevents formik validation from properly indicating isTouched ([0f629b0](https://github.com/leather-wallet/extension/commit/0f629b0177d41ad326112b5957042e26af416c9d))
* use psuedo-elements to specify borders ([586af95](https://github.com/leather-wallet/extension/commit/586af95683b45b860de2b298f02fe3696ab5f4d5))


### Internal

* apply requested changes from pr feedback ([027025f](https://github.com/leather-wallet/extension/commit/027025f0630df440318a5be89a81151d99dacce6))
* fix readme ([4d03eb5](https://github.com/leather-wallet/extension/commit/4d03eb5f4c7430372af3715d0a1155832a68437c))
* ordinal aware utxo query, closes [#4163](https://github.com/leather-wallet/extension/issues/4163) ([9f8291f](https://github.com/leather-wallet/extension/commit/9f8291f78b98ac48d25267bc72a236252c818f51))
* upgrade panda & other deps ([1489864](https://github.com/leather-wallet/extension/commit/148986456e3c75bb0f82a4f629ccd58a525dcb9e))

## [6.9.1](https://github.com/leather-wallet/extension/compare/v6.9.0...v6.9.1) (2023-10-02)


### Bug Fixes

* add array notation lint ([481b28d](https://github.com/leather-wallet/extension/commit/481b28d7c1a6ddbf8c1619887b7b71390e64b425))
* add spam filtering to fungible token assets, closes [#4252](https://github.com/leather-wallet/extension/issues/4252) ([b56c27b](https://github.com/leather-wallet/extension/commit/b56c27ba5e5f8da85a9582340671aef0ba1c584f))
* reenable transak, closes [#4267](https://github.com/leather-wallet/extension/issues/4267) ([b2fd8c3](https://github.com/leather-wallet/extension/commit/b2fd8c3ce0b503b53bc10843d4d217741a133eba))
* send inscription error processing, closes [#4286](https://github.com/leather-wallet/extension/issues/4286) ([f73f3a4](https://github.com/leather-wallet/extension/commit/f73f3a44979aa3147537806217a2954a38acedc9))
* set background colour of dialog for dark mode, closes [#4282](https://github.com/leather-wallet/extension/issues/4282) ([b4e9b75](https://github.com/leather-wallet/extension/commit/b4e9b75cd2b75a072a4d6517d94175de21c03d5c))
* stx transfer test ([da669d1](https://github.com/leather-wallet/extension/commit/da669d1761d56807760da8e32f5c0704011316c5))
* temporarily disable test ([a149517](https://github.com/leather-wallet/extension/commit/a1495171ee7509e8e52cd9db70901460918eba5b))


### Internal

* missing env var ([7f7c7c5](https://github.com/leather-wallet/extension/commit/7f7c7c526f0fa28a1c9cfb07db9f2e1a291a3316))
* remove legacy integration tests ([6c507c2](https://github.com/leather-wallet/extension/commit/6c507c24013c7c920f4bcca36f6d824dc9e38768))
* ugprade packages ([41ec75c](https://github.com/leather-wallet/extension/commit/41ec75c6d3ecedb694ff53eec6e907d6c4fd7fef))
* upgrade scure/noble pkgs ([949311a](https://github.com/leather-wallet/extension/commit/949311aaaf0ab6f91e03eabbe8214ee305a0b4cb))

## [6.9.0](https://github.com/leather-wallet/extension/compare/v6.8.2...v6.9.0) (2023-09-26)


### Features

* add address index for ns inscriptions ([6317dce](https://github.com/leather-wallet/extension/commit/6317dced546e0361e9fcce90f472f7b24a5ef088))
* add ns inscription send, closes [#4019](https://github.com/leather-wallet/extension/issues/4019) ([92774e8](https://github.com/leather-wallet/extension/commit/92774e8cbb15cb8ca41f10606db3dde5fe273240))
* display inscriptions from native segwit address, closes [#4018](https://github.com/leather-wallet/extension/issues/4018) ([4a01fae](https://github.com/leather-wallet/extension/commit/4a01fae8f30ade4add328fb1e7f842d9463e02df))
* enable stx tests ([e99e88c](https://github.com/leather-wallet/extension/commit/e99e88c6868d5ee2489c0fead9cb26146b2fc38a))
* remove ns address inscription warning ([ad1e940](https://github.com/leather-wallet/extension/commit/ad1e940d281f75c98650daadaf1443bebd9f34ad))
* replaced dlc-wasm-wallet with @dlc-link/dlc-tools ([0364e26](https://github.com/leather-wallet/extension/commit/0364e26f92090c1179a68b0b77f52a6fed219f56))


### Bug Fixes

* minor css bugs ([a514265](https://github.com/leather-wallet/extension/commit/a5142655e318b0c4ed18cd70f11102e06173dd1a))
* more explicit build instructions ([11fea38](https://github.com/leather-wallet/extension/commit/11fea384b1533979b357be4ab4937e4dc8448e08))
* set onboarding modal background color to fix transparency in dark mode ([93a3a0f](https://github.com/leather-wallet/extension/commit/93a3a0f313efcc9f7e8bbb9b75150027fa767518))
* styles of acc info card ([64bd214](https://github.com/leather-wallet/extension/commit/64bd21424b8422b3ca7c4e6747eedeafce43c728))
* update leather contact email address ([5330d18](https://github.com/leather-wallet/extension/commit/5330d182f6ce4251ecadaeb66b97bfad0f2507de))


### Internal

* flag to use panda, closes [#4255](https://github.com/leather-wallet/extension/issues/4255) ([5f0306e](https://github.com/leather-wallet/extension/commit/5f0306e94a6c35ddadde2259b138c2f05d6bf889))
* remove space between component ([2fe2b60](https://github.com/leather-wallet/extension/commit/2fe2b606add564e61f712cf1ed68f4dc7c13cb5c))
* space between, closes [#4256](https://github.com/leather-wallet/extension/issues/4256) ([963faab](https://github.com/leather-wallet/extension/commit/963faabdffbe16317fcec9bbb519e73be665b3ff))

## [6.8.2](https://github.com/leather-wallet/extension/compare/v6.8.1...v6.8.2) (2023-09-19)


### Bug Fixes

* enable ff code splitting ([4a4eb4a](https://github.com/leather-wallet/extension/commit/4a4eb4ad3f635e56fc921e407bdda9142960a292))
* trigger release ([4b5ec7e](https://github.com/leather-wallet/extension/commit/4b5ec7edf380c7a0a88060e25ba143fb360a651b))

## [6.8.1](https://github.com/leather-wallet/extension/compare/v6.8.0...v6.8.1) (2023-09-19)


### Bug Fixes

* leading the from Hiro Wallet days ([86df840](https://github.com/leather-wallet/extension/commit/86df840338f4639e6899c2b0202e18caa9c582fc))
* trigger release ([44f981e](https://github.com/leather-wallet/extension/commit/44f981e789162a67d5ea196e1c350d03504ce43d))

## [6.8.0](https://github.com/leather-wallet/extension/compare/v6.7.0...v6.8.0) (2023-09-18)


### Features

* trigger release ([eb35e12](https://github.com/leather-wallet/extension/commit/eb35e126f6f20b1e4a7600d259d6c5cb1edf8980))

## [6.7.0](https://github.com/leather-wallet/extension/compare/v6.6.1...v6.7.0) (2023-09-18)


### Features

* trigger release ([5fc164a](https://github.com/leather-wallet/extension/commit/5fc164a30f2aad5ab836266025254471be6ea388))

## [6.6.1](https://github.com/leather-wallet/extension/compare/v6.6.0...v6.6.1) (2023-09-18)


### Bug Fixes

* firefox ci build ([51a7390](https://github.com/leather-wallet/extension/commit/51a739028914e68fb779572575a8aa330cbc1cb2))

## [6.6.0](https://github.com/leather-wallet/extension/compare/v6.5.1...v6.6.0) (2023-09-18)


### Features

* create new test acc ([f14e3f1](https://github.com/leather-wallet/extension/commit/f14e3f1a017170e235e73848cca1658f1c64fd33))
* increase fee actions ([7a9298b](https://github.com/leather-wallet/extension/commit/7a9298b814d9f4e17cfdf8db327b2d01a2eba9d9))
* ui changes in inscription flow ([23ab7f0](https://github.com/leather-wallet/extension/commit/23ab7f000bec6ccfaeec58a68cf79af535b91a55))
* update panda, node ([ddde3b1](https://github.com/leather-wallet/extension/commit/ddde3b1462e3266f147618f669c118f2d9b25294))


### Bug Fixes

* add fill=currentColor to refresh icon for dark mode, closes [#4195](https://github.com/leather-wallet/extension/issues/4195) ([25476e7](https://github.com/leather-wallet/extension/commit/25476e7e548a997d13ffe8d86b673f41ee620fef))
* adjust header background colour based on screen context, [#4164](https://github.com/leather-wallet/extension/issues/4164) ([015c4e1](https://github.com/leather-wallet/extension/commit/015c4e1741766db499fa36e5c768de99d4f8e725))
* discord webhook, new org secret ([fbc1c57](https://github.com/leather-wallet/extension/commit/fbc1c57e27d7f9eebe38acb705fb6f384afbdf96))
* firefox publish issue ([e143172](https://github.com/leather-wallet/extension/commit/e1431725f30fb57fc92c8ebb2f3c0addd7f631e3))
* fix fund test try ([2a5d421](https://github.com/leather-wallet/extension/commit/2a5d421791bc09b6fecd99edc2886c8573fe33a2))
* flaky settings test ([51c460e](https://github.com/leather-wallet/extension/commit/51c460ee24e6d310c5d3a575cad469947375185e))
* global bg style ([d639c8f](https://github.com/leather-wallet/extension/commit/d639c8fa4bd9f4451fd5f01b86f91055f04429cd))
* pr ext build link ([126b1e7](https://github.com/leather-wallet/extension/commit/126b1e79e37710da81afea3f5b296c56b9f4651d))
* remove radix layout components ([029e6b9](https://github.com/leather-wallet/extension/commit/029e6b98bb58c3b218e09f7bf6cde288b922cccf))
* remove undefined tokens ([e1b431f](https://github.com/leather-wallet/extension/commit/e1b431f3e3e6c900158956bcd0bf372e5593be54))
* script type unknown ([2e344ec](https://github.com/leather-wallet/extension/commit/2e344ec8cd0836ceae65c2d44cae335cc94d3447))
* stop sign in panel stretching too much, closes [#4212](https://github.com/leather-wallet/extension/issues/4212) ([1804f49](https://github.com/leather-wallet/extension/commit/1804f49daa88521391567ebe837670fc4dc79142))
* triger release ([483f0ae](https://github.com/leather-wallet/extension/commit/483f0aef9dc59a347303f055351fbf7f9a531430))
* triger release ([5cb9193](https://github.com/leather-wallet/extension/commit/5cb9193d685f875677c7c08a63b62838a330f115))
* trigger release ([108e74e](https://github.com/leather-wallet/extension/commit/108e74e612760ee258fc5d4ff9d427bc7722d335))
* trigger release ([cefd605](https://github.com/leather-wallet/extension/commit/cefd6059e296e81a710e59112a21479a10c88494))
* trigger release ([8d596ae](https://github.com/leather-wallet/extension/commit/8d596ae72f9e111e12cf15ea3a2d45fffeeb32cc))
* trigger release ([316c67a](https://github.com/leather-wallet/extension/commit/316c67ae2b7288085d403eaab1048e965567c365))


### Internal

* fund test migrate, closes [#4187](https://github.com/leather-wallet/extension/issues/4187) ([1375cd5](https://github.com/leather-wallet/extension/commit/1375cd5337366a7508fdae62ec23e07add78dc5b))
* migrate network tests, closes [#3707](https://github.com/leather-wallet/extension/issues/3707) ([8ed7553](https://github.com/leather-wallet/extension/commit/8ed75537a0864dc2796bbc059c51c8fb7abd6606))
* migrate tx requests tests to playwright, closes [#4151](https://github.com/leather-wallet/extension/issues/4151) ([c15b223](https://github.com/leather-wallet/extension/commit/c15b223685d28f220eafc4b59ab4404853594b09))
* pass all sighashTypes to signer ([fdb06cf](https://github.com/leather-wallet/extension/commit/fdb06cfe35a22b7bb5382fdcf61a05e1eef6b2a7))
* remove emotion, configure panda to load css globally, ditch stacks-ui base, [#4164](https://github.com/leather-wallet/extension/issues/4164) ([d8655c1](https://github.com/leather-wallet/extension/commit/d8655c10bf1056957420e2ac9e85ea24b82e4e7e))
* remove legacy fund selectors ([92a495c](https://github.com/leather-wallet/extension/commit/92a495cd9d6fd2e8c5a33a54ddf6b57926cef98d))
* remove legacy settings selectors ([e6eecb6](https://github.com/leather-wallet/extension/commit/e6eecb6e60bbb113a0437f45925cca17e3a54230))
* remove test env ([61634d4](https://github.com/leather-wallet/extension/commit/61634d44aa3b0f47274649051bba2eb8e420891e))
* rename leaf to leather ([66d159e](https://github.com/leather-wallet/extension/commit/66d159eba66b84f474112bbeb6b0c98ebb847c6c))
* request feature link ([4e6c09d](https://github.com/leather-wallet/extension/commit/4e6c09d68693112dedcf30b0a4d0e6e1649eae3d))
* settings legacy test ([068d3cd](https://github.com/leather-wallet/extension/commit/068d3cd465e1a642a763fecfa0e3ce5e94b07286))
* swaps ui with leather-styles ([4884fc5](https://github.com/leather-wallet/extension/commit/4884fc5ac5c806b2a227f9708940bb43b3f8783e))
* update to leather url paths ([203fad5](https://github.com/leather-wallet/extension/commit/203fad511e855ed2f59fc8307f3ac45784bea20d))

## [6.5.1](https://github.com/hirosystems/wallet/compare/v6.5.0...v6.5.1) (2023-08-31)


### Bug Fixes

* check broadcast param as string ([887e9d9](https://github.com/hirosystems/wallet/commit/887e9d92c0c6ae89c8f76b7f31d53f3fcea4e017))
* reenable firefox ([0ccd7c7](https://github.com/hirosystems/wallet/commit/0ccd7c777524ff9814176d641c55aae40f9b2ca0))
* rename brand ([dbfda8d](https://github.com/hirosystems/wallet/commit/dbfda8dc2f36992a4c01414280fcbe4dd1ee039d))
* update build assets ([47e72b4](https://github.com/hirosystems/wallet/commit/47e72b4e9d608b851275fa17fcc0c416538ba48f))


### Internal

* **release:** 6.5.0 ([3b7bc46](https://github.com/hirosystems/wallet/commit/3b7bc460905e0a9a1d7ce30867e8470de2e0d453))

## [6.5.0](https://github.com/hirosystems/wallet/compare/v6.4.0...v6.5.0) (2023-08-30)


### Features

* add base swap page and routing ([6e59bdd](https://github.com/hirosystems/wallet/commit/6e59bddd0b825ca4edfe341f82047385b59a0338))
* panda poc ([59654ec](https://github.com/hirosystems/wallet/commit/59654ece1c6934e97eadfdccf05f62e594f3bd98))
* swap flow ([e54aa2e](https://github.com/hirosystems/wallet/commit/e54aa2e46a10e6926dd8c4f6eaaeab5ac00c9064))


### Bug Fixes

* add panda ([29b2be9](https://github.com/hirosystems/wallet/commit/29b2be99ec72400d6408d143a2ba5468a9202ae0))
* remove error message ([1e69362](https://github.com/hirosystems/wallet/commit/1e693628944dcfbebd5d4c0cda75dd3b2efc5453))


### Internal

* home action buttons ([225182d](https://github.com/hirosystems/wallet/commit/225182d3dbebc595c87f95c6677ca3e2361f4bf2))
* use swap context ([99539d9](https://github.com/hirosystems/wallet/commit/99539d9af0e4c162802fe5efd3f741fcd893422b))

## [6.4.0](https://github.com/hirosystems/wallet/compare/v6.3.1...v6.4.0) (2023-08-16)


### Features

* updated bitcoin contract api, modified responses, added error handling ([3a77bfc](https://github.com/hirosystems/wallet/commit/3a77bfce5b91371cae5ad5a30c6a8ae14617f280))


### Bug Fixes

* add copy and qr options to receive modal, closes [#3307](https://github.com/hirosystems/wallet/issues/3307) ([efa14d0](https://github.com/hirosystems/wallet/commit/efa14d094a190ab69faa4fd238b237d3de984065))
* **firefox:** short session duration, closes [#4030](https://github.com/hirosystems/wallet/issues/4030) ([5a09c43](https://github.com/hirosystems/wallet/commit/5a09c43846b94fd73edf38d6a74053c78f1fcc7a))
* header indentation for Stacks transaction signing [#3881](https://github.com/hirosystems/wallet/issues/3881) ([8bfcf60](https://github.com/hirosystems/wallet/commit/8bfcf6001fa8802dd890868322088af3b028fb21))


### Internal

* add modal for BTC Stamps QR receive ([fc33210](https://github.com/hirosystems/wallet/commit/fc33210a969b8fffb8b0bcc877fdbe06d70f390e))
* inscription sends, closes [#4111](https://github.com/hirosystems/wallet/issues/4111) ([b2f0690](https://github.com/hirosystems/wallet/commit/b2f06903e635c54935e8d51f869ee7b0107c1f16))
* refactor receive modal to share code better ([77d8704](https://github.com/hirosystems/wallet/commit/77d8704d677eb063634b6a23ade8ac7d5c0b29a4))

## [6.3.1](https://github.com/hirosystems/wallet/compare/v6.3.0...v6.3.1) (2023-08-10)


### Bug Fixes

* filter out urls and spam words from token names, closes [#4017](https://github.com/hirosystems/wallet/issues/4017) ([dc07b46](https://github.com/hirosystems/wallet/commit/dc07b4607a0c7d4c28f1190795d70602628fd232))
* update manifest default_title to change extension tooltip text, closes [#4078](https://github.com/hirosystems/wallet/issues/4078) ([5f61753](https://github.com/hirosystems/wallet/commit/5f61753c0b36074b0f74e402627e031ff45ed132))


### Internal

* improve secret key ux ([108fdf8](https://github.com/hirosystems/wallet/commit/108fdf865e00b545f29f8fca15e7a7869a8da097))

## [6.3.0](https://github.com/hirosystems/wallet/compare/v6.2.1...v6.3.0) (2023-08-08)


### Features

* add option to broadcast rpc psbt, closes [#3895](https://github.com/hirosystems/wallet/issues/3895) ([da7b51b](https://github.com/hirosystems/wallet/commit/da7b51ba97dbb1c9b86596b2d90e33c9f6473e53))
* add taproot txs in activity list, closes [#3249](https://github.com/hirosystems/wallet/issues/3249) ([d4b1065](https://github.com/hirosystems/wallet/commit/d4b1065b0bda71e971ce6694b43399069804e123))
* fetch inscription by output in separate query ([281e138](https://github.com/hirosystems/wallet/commit/281e1386a06dd47a8d49bc598f77b853e071810e))
* hide increase fee for txs with taproot input ([a01071f](https://github.com/hirosystems/wallet/commit/a01071fa1f1e97db9d718a4630f680429aeaad00))


### Bug Fixes

* change logic to upscale amount in input field ([086c329](https://github.com/hirosystems/wallet/commit/086c3297835867f8eb0df941ba46ab9f5de01fcb))
* handle case when there's no ticker of < 4 chars ([ce3c7c9](https://github.com/hirosystems/wallet/commit/ce3c7c95e50ad5788ba078654643647be6e9670e))
* make input text perfectly centered ([0b23519](https://github.com/hirosystems/wallet/commit/0b235195e9b44c823caaaecd4ce9db8a6bd6f396))
* only route to error when asset is bitcoin, closes [#4083](https://github.com/hirosystems/wallet/issues/4083) ([bed3820](https://github.com/hirosystems/wallet/commit/bed3820fa7dcb914eeb337d542fb9ab082e6f38a))


### Internal

* move fn to utils, use constant and provide more descriptive fn name ([5356069](https://github.com/hirosystems/wallet/commit/5356069f96a30d603d8fd428d4a4125df3551341))

## [6.2.1](https://github.com/hirosystems/wallet/compare/v6.2.0...v6.2.1) (2023-08-03)


### Bug Fixes

* only route to error when asset is bitcoin, closes [#4083](https://github.com/hirosystems/wallet/issues/4083) ([099f96d](https://github.com/hirosystems/wallet/commit/099f96d32bbe68fb8ea807413c2605d3f98e85f5))

## [6.2.0](https://github.com/hirosystems/wallet/compare/v6.1.0...v6.2.0) (2023-07-31)


### Features

* remove redux devtools from final bundle ([66cd1f6](https://github.com/hirosystems/wallet/commit/66cd1f6080b9841a3842ea4eaf9c0001c92e85c9))


### Bug Fixes

* add StacksAccountLoader ([aa5d904](https://github.com/hirosystems/wallet/commit/aa5d9048d413cd1be24769a7147e0884b244224a))
* add update input for tapInternalKey ([e085927](https://github.com/hirosystems/wallet/commit/e085927a5dc48ec3e5abb0b9ae3df450288970f0))
* catch rpc sign psbt error ([0519dcf](https://github.com/hirosystems/wallet/commit/0519dcf556e7cd99709868aee7e499788dfaed42))
* firefox manually loaded extension ([95b8553](https://github.com/hirosystems/wallet/commit/95b85534ccb2a05dbaeeae42426ad14af009e9ca))
* Fix max width on Stacks contract UI , closes [#3966](https://github.com/hirosystems/wallet/issues/3966) ([4ad34c8](https://github.com/hirosystems/wallet/commit/4ad34c8b081e7e12f0b4b9c8fec08d1df69656d0))
* full sighash types ([84236fa](https://github.com/hirosystems/wallet/commit/84236fa23fcd12c297eb20c20067bdf1128da4f9))
* track sighash type changes thru code ([62b479c](https://github.com/hirosystems/wallet/commit/62b479c1fcc657735327134407abb4de91342f2e))


### Internal

* nft hooks ([559fba6](https://github.com/hirosystems/wallet/commit/559fba678bcb67cb0218f7862a44c629d9fe47cf))
* nft queries ([ac24e3e](https://github.com/hirosystems/wallet/commit/ac24e3eb96b695b0ec3b6d1658284a7331598ef1))
* rename BalanceList to AssetList ([1d33b07](https://github.com/hirosystems/wallet/commit/1d33b0782516e46df674161862700c668012a369))

## [6.1.0](https://github.com/hirosystems/wallet/compare/v6.0.0...v6.1.0) (2023-07-26)


### Features

* implement increase btc pending tx fee, closes [#3416](https://github.com/hirosystems/wallet/issues/3416) ([11614ad](https://github.com/hirosystems/wallet/commit/11614ad15ee7b2c2b0bd065212244a93cdf2ccf0))
* validate subnet network id ([53bc4f5](https://github.com/hirosystems/wallet/commit/53bc4f5b327b94b97613bf1b0298654ae9022dd7))


### Bug Fixes

* csp img-src allowed urls ([361b79e](https://github.com/hirosystems/wallet/commit/361b79e7aadb3383db287063fd880c46e6edc2b0))
* propagate subnet chain id in selector ([0ebcbc2](https://github.com/hirosystems/wallet/commit/0ebcbc2dbbc25841c105e862d257f34d2d7ba068))
* propagate subnet chain id to networks actions ([c981fdb](https://github.com/hirosystems/wallet/commit/c981fdb1fa6453f698397bf3cdd09b2011debf94))
* public key type error ([26485c8](https://github.com/hirosystems/wallet/commit/26485c891a80eaa5808d676994de2e73302a7582))
* remove magic recovery code, closes [#2955](https://github.com/hirosystems/wallet/issues/2955) ([fa9d13b](https://github.com/hirosystems/wallet/commit/fa9d13bf51ef20add04833ffd9e9cb0594804c6c))
* signPsbt error routing ([1e58c56](https://github.com/hirosystems/wallet/commit/1e58c562309071c95c6f5a76ddcca77cf41e1f1d))
* xpub version mismatch in software mode ([89d77df](https://github.com/hirosystems/wallet/commit/89d77df751c53e62cad84a0e8e6aa8dda53f45dc))


### Internal

* add subnet chain id to the network configuration ([2d93f5a](https://github.com/hirosystems/wallet/commit/2d93f5ad05a7bd4bd31e86bbe2cbe85706fa6697))
* ledger ([1e8d229](https://github.com/hirosystems/wallet/commit/1e8d229967de44fa46df406f7362faa2a6ca5634))
* psbt error handling, closes [#3804](https://github.com/hirosystems/wallet/issues/3804) ([848e0fc](https://github.com/hirosystems/wallet/commit/848e0fcb4625514fdd8c5a68b81a7fb578e6e493))
* psbt signing with default tapInternalKey, closes [#4007](https://github.com/hirosystems/wallet/issues/4007) ([75d8760](https://github.com/hirosystems/wallet/commit/75d87606fe4f787d268bf62210f1e999228d0b9d))
* psbt uxui, closes [#3849](https://github.com/hirosystems/wallet/issues/3849) ([e48726e](https://github.com/hirosystems/wallet/commit/e48726e6a587f0dfcc66df4e909eabe05a58eb81))
* remove unused address regeneration code, ref [#2894](https://github.com/hirosystems/wallet/issues/2894) ([47239e6](https://github.com/hirosystems/wallet/commit/47239e66cdcaa42a18552a1cd8df03667a455f47))
* rename peer network id ([09812ac](https://github.com/hirosystems/wallet/commit/09812ac63129d8faaa1e07b31f956c8b41dc73f9))

## [6.0.0](https://github.com/hirosystems/wallet/compare/v5.0.0...v6.0.0) (2023-07-25)


### ⚠ BREAKING CHANGES

* this change is sufficient enough to warrant a major
bump

### Features

* added bitcoin contract request page ([83cf049](https://github.com/hirosystems/wallet/commit/83cf0491e44f3c7ac23cd3363ed753f25419f427))
* added use-bitcoin-contract hook and additional functions and configs ([626ef0b](https://github.com/hirosystems/wallet/commit/626ef0beeb37fd7e6d10bd103972cdcf8c2adf51))
* extended rpcmethods with bitcoin contract related case, added routes and success/failure pages ([f0ff7af](https://github.com/hirosystems/wallet/commit/f0ff7afba16a875e7ed791fdfd93ad1e7aed0180))
* manifest v3 release trigger ([80615ca](https://github.com/hirosystems/wallet/commit/80615cac1351cc7e46182449f1a3f9eac26715a7))


### Bug Fixes

* added back dlc-wasm-wallet package ([ba27aaf](https://github.com/hirosystems/wallet/commit/ba27aaf4a288dd27c93af057ec9f81daca22eede))
* added working package.json ([e8067d0](https://github.com/hirosystems/wallet/commit/e8067d0c9943e86116e5e961fb9b627ba9efd5e6))
* cross install tracking ([3bc59ac](https://github.com/hirosystems/wallet/commit/3bc59ac5dce90e0d13aa68c0e643bb83f54c875b))
* fixed frozen lockfile ([536aeec](https://github.com/hirosystems/wallet/commit/536aeec5f60d1e4b6cfef68b63bc498097edee00))
* made requested css and const changes ([8846e0e](https://github.com/hirosystems/wallet/commit/8846e0e7d906c40d821da5de3add3db8bef8b3a5))
* modified bitcoin contract request ui (width, size, weight) ([36d7c80](https://github.com/hirosystems/wallet/commit/36d7c8004f833545fee94fd5a1faf89ac5f0430e))
* modified yarn lock file ([52b1d14](https://github.com/hirosystems/wallet/commit/52b1d14632c8c56f7183fffc6df1926bd5936548))
* multi extension loading ([03465c0](https://github.com/hirosystems/wallet/commit/03465c06fe27adf134758e93c9a9d3909c684c7e))
* only show errors when field not in focus, closes [#3766](https://github.com/hirosystems/wallet/issues/3766) ([abffd71](https://github.com/hirosystems/wallet/commit/abffd71765c20eff775286eaf6b94f0bc64ae2c4))
* ran prettier formatting ([16ca959](https://github.com/hirosystems/wallet/commit/16ca959526eee368a849ef1afbd15663ff160785))
* ran prettier formatting ([515b1e5](https://github.com/hirosystems/wallet/commit/515b1e506a5d48f602191d29d43a895b766067f6))
* remove warning banner ([b3427bf](https://github.com/hirosystems/wallet/commit/b3427bfcbf1efae8a5a04a73cd32d8f3c391ecc0))
* type errors ([a2598a9](https://github.com/hirosystems/wallet/commit/a2598a94981366fc326ef3cd5fe5ebe75108e24c))
* unprocessable pending txs balance subtraction, closes [#3921](https://github.com/hirosystems/wallet/issues/3921) ([2d284db](https://github.com/hirosystems/wallet/commit/2d284db49357de1d72c61ac4f2601ee8557ee1f1))


### Internal

* **release:** 4.36.0 ([8184b75](https://github.com/hirosystems/wallet/commit/8184b75b898ead72f7b1203ff9b60346acbe7f53)), closes [#3989](https://github.com/hirosystems/wallet/issues/3989) [#3921](https://github.com/hirosystems/wallet/issues/3921) [#2330](https://github.com/hirosystems/wallet/issues/2330) [#3954](https://github.com/hirosystems/wallet/issues/3954) [#3789](https://github.com/hirosystems/wallet/issues/3789) [#3518](https://github.com/hirosystems/wallet/issues/3518) [#3871](https://github.com/hirosystems/wallet/issues/3871)
* **release:** 5.0.0 ([0e73a1e](https://github.com/hirosystems/wallet/commit/0e73a1e44c4781387246b9225320583566173012))

## [5.0.0](https://github.com/hirosystems/wallet/compare/v4.36.0...v5.0.0) (2023-07-18)


### ⚠ BREAKING CHANGES

* this change is sufficient enough to warrant a major
bump

### Features

* manifest v3 release trigger ([d0c8b3a](https://github.com/hirosystems/wallet/commit/d0c8b3a781165ab1342de4699213b2998b25e988))

## [4.36.0](https://github.com/hirosystems/wallet/compare/v4.35.0...v4.36.0) (2023-07-18)


### Features

* change arrow icon in send flow ([2b4a2a9](https://github.com/hirosystems/wallet/commit/2b4a2a9b94507d4a0f7ae9b46ecfe0a335c9e2f8))
* change caret color in seed phrase input ([8fc248c](https://github.com/hirosystems/wallet/commit/8fc248cf0c1d9339354cfcc7c6267affa23d5a8a))


### Bug Fixes

* add module type ([227ea75](https://github.com/hirosystems/wallet/commit/227ea753f34d32032c73d2ecf876ae145f2e8140))
* choose acc total balance, closes [#3989](https://github.com/hirosystems/wallet/issues/3989) ([6e4bedf](https://github.com/hirosystems/wallet/commit/6e4bedf9bdcf980d34fd853b333fa7eea4ceeb15))
* disable sentry in service worker ([d5e8f26](https://github.com/hirosystems/wallet/commit/d5e8f2620824b0f183f93618cbad98279b5ce745))
* entire activity item is clickable ([167429b](https://github.com/hirosystems/wallet/commit/167429b068bfee90250f52ce2e6887cff5850b73))
* exceed amount in rbf, closes [#3921](https://github.com/hirosystems/wallet/issues/3921) ([0d8e72f](https://github.com/hirosystems/wallet/commit/0d8e72ff9691867fce6fc8fac557e735dff52229))
* form restore ([c48fc22](https://github.com/hirosystems/wallet/commit/c48fc22827ce9863736114747179fb19e346bc9e))
* go to RequestDiagnostics after fresh installation to avoid flash redirect, fixes [#2330](https://github.com/hirosystems/wallet/issues/2330) ([bef7e08](https://github.com/hirosystems/wallet/commit/bef7e080f833637373ce4e9178db2c93b9f56235))
* port disconnecting ([da3a2f5](https://github.com/hirosystems/wallet/commit/da3a2f54065e9f2d13dfed1b546ba8db3025da45))
* prevent secret key showing before blurred ([6929ada](https://github.com/hirosystems/wallet/commit/6929ada83f16ebc51dfcfc7a3bee0417021a0bc6))
* refactor JSX namespace to React.JSX ([4a07bcb](https://github.com/hirosystems/wallet/commit/4a07bcba8181883a52569c6adaa499b62959a17b))
* retore form state, chromium ([be3204d](https://github.com/hirosystems/wallet/commit/be3204d7e773248329570e5f2a5c0259d97437b5))
* secret key input, closes [#3954](https://github.com/hirosystems/wallet/issues/3954) ([5f000ba](https://github.com/hirosystems/wallet/commit/5f000ba115b9f90895769e08c07f433631eb3d23))
* stacks nfts loading key not unique, closes [#3789](https://github.com/hirosystems/wallet/issues/3789) ([dad5d6e](https://github.com/hirosystems/wallet/commit/dad5d6e04273ad7147445ac9ec3d83e6ee48bd56))
* upgrade packages ([74f6d25](https://github.com/hirosystems/wallet/commit/74f6d253928e61ac11aafc38bb8fc9d8d78f1d25))
* use routes over state for home tabs, closes [#3518](https://github.com/hirosystems/wallet/issues/3518) ([cb2f317](https://github.com/hirosystems/wallet/commit/cb2f317636395b24636d55fc8bb054475c6d1256))
* use windows friendly syntax so that yarn dev will launch on windows machines ([56b6778](https://github.com/hirosystems/wallet/commit/56b6778542ce5f45ebf4e515bdf61b24ae7404f7))


### Internal

* keychain ([c5d4761](https://github.com/hirosystems/wallet/commit/c5d476176ae587be6b1d6ae06a866545122f1d3b))
* migrate to manifest version 3 ([03dbb1e](https://github.com/hirosystems/wallet/commit/03dbb1eb944d33dbb0d7754d4ed68ee348632c15))
* mv3 fix ([0f54a1f](https://github.com/hirosystems/wallet/commit/0f54a1fd52889b262118d90ad1b978576bbe9a18))
* restore gaia functionality ([bf136dc](https://github.com/hirosystems/wallet/commit/bf136dcc7b3de3f2d001ff1873f91d7a714b279a))
* sending max fees, closes [#3871](https://github.com/hirosystems/wallet/issues/3871) ([90c1c31](https://github.com/hirosystems/wallet/commit/90c1c316a87257c146a87000d348a5a5f4d37ae1))
* stacks keychain logic ([846132b](https://github.com/hirosystems/wallet/commit/846132be9111d558afff4a7286a9bedab6178ba7))
* upgrade packages ([d3978f0](https://github.com/hirosystems/wallet/commit/d3978f0115a3cbcfb08d01201eec1b994b8e94be))
* upgrade packages, p1 ([cb7da02](https://github.com/hirosystems/wallet/commit/cb7da02fb4de852810b95e422d16013f739f6139))
* upgrade packages, p2 ([51b7da0](https://github.com/hirosystems/wallet/commit/51b7da0a849fa2eabe1c96a9cb888e305c354331))

## [4.35.0](https://github.com/hirosystems/wallet/compare/v4.34.0...v4.35.0) (2023-07-03)


### Features

* remove taproot address validator, closes [#3670](https://github.com/hirosystems/wallet/issues/3670) ([0f33a29](https://github.com/hirosystems/wallet/commit/0f33a29b910ad4921471876da9f7c8998b274021))


### Bug Fixes

* add alignItems center to ensure title aligns correctly, fixes [#3881](https://github.com/hirosystems/wallet/issues/3881) ([df8454d](https://github.com/hirosystems/wallet/commit/df8454d6cf16fbc0db4eb12442155489919eec56))
* add pre-tweaked key ([52d2b33](https://github.com/hirosystems/wallet/commit/52d2b3386aa0b4e2e5573ba761444de62877b8fe))
* ledger routing bug with broadcast error ([648af7c](https://github.com/hirosystems/wallet/commit/648af7cc8ae1e3049a19633d67ed9592c98dcc68))
* **ledger:** reject when ledger wallet ([574d618](https://github.com/hirosystems/wallet/commit/574d618d17e053073e1097e636f00b630e20344a))
* remove required payment type from sign msg ([d46b310](https://github.com/hirosystems/wallet/commit/d46b310884386eda4cabb7e769ea429d99c0975b))
* subtract microblock txs from available balance, closes [#3898](https://github.com/hirosystems/wallet/issues/3898) ([78a4349](https://github.com/hirosystems/wallet/commit/78a434954c65b2649ad90951ebd315e3f01f7fba))


### Internal

* add note about refactoring to remove JS truncation ([a798bd1](https://github.com/hirosystems/wallet/commit/a798bd1a40faf97c7420e8db463e31a21dd45cf4))
* remove leading as its not a valid CSS prop ([5632c1c](https://github.com/hirosystems/wallet/commit/5632c1cd9537a4af6ef4170e54c37c481e4d295b))

## [4.34.0](https://github.com/hirosystems/wallet/compare/v4.33.0...v4.34.0) (2023-06-28)


### Features

* ignore resize observer error ([4a3a8a5](https://github.com/hirosystems/wallet/commit/4a3a8a5e36ae4024c6ce7ac4c52ce3ca469d214f))


### Bug Fixes

* **ledger:** broken activity page ([eeb535e](https://github.com/hirosystems/wallet/commit/eeb535e9023e08590120d7249c19e734534c58a1))
* psbt network possibilities ([0021a3a](https://github.com/hirosystems/wallet/commit/0021a3a88b10599b7d700333ccb0c386d950652d))


### Internal

* add account to rpc methods ([c08b154](https://github.com/hirosystems/wallet/commit/c08b15421e86cd9f4bc50c88200e6ff1a252860f))
* add network to other rpc methods ([fa2a097](https://github.com/hirosystems/wallet/commit/fa2a09729c104d8d7a6ee1cb54797ecc28d4acdd))

## [4.33.0](https://github.com/hirosystems/wallet/compare/v4.32.1...v4.33.0) (2023-06-27)


### Features

* change btc available balance logic, closes [#3758](https://github.com/hirosystems/wallet/issues/3758) ([76515b1](https://github.com/hirosystems/wallet/commit/76515b1e56151ab2c12b365666a01612668c37f8))


### Bug Fixes

* ledger support link, closes [#3900](https://github.com/hirosystems/wallet/issues/3900) ([05f1d7f](https://github.com/hirosystems/wallet/commit/05f1d7f82deefbb1a22c80328e20f784dbf96df7))
* negative stx available balance, closes [#3761](https://github.com/hirosystems/wallet/issues/3761) ([6a2adf0](https://github.com/hirosystems/wallet/commit/6a2adf05747f8a9b33e696d37519df8edf7a7e18))
* trim recipient address field to remove leading/ trailing spaces, fixes [#2806](https://github.com/hirosystems/wallet/issues/2806) ([1a7f683](https://github.com/hirosystems/wallet/commit/1a7f6830eba0bcabc9559dadb4503caf7b445d68))


### Internal

* filter utxos, closes [#3732](https://github.com/hirosystems/wallet/issues/3732) ([ab7d24f](https://github.com/hirosystems/wallet/commit/ab7d24f98b33613b3f3150d9215b092924585369))
* send form utxos ([11f8047](https://github.com/hirosystems/wallet/commit/11f8047f40df2a4198c00e92cbe841b7dddba90c))

## [4.32.1](https://github.com/hirosystems/wallet/compare/v4.32.0...v4.32.1) (2023-06-23)


### Bug Fixes

* inscriptions on regen addresses, closes [#3752](https://github.com/hirosystems/wallet/issues/3752) ([5cb868f](https://github.com/hirosystems/wallet/commit/5cb868fa7a3549fe1d748ab66233db00dad44c64))
* **psbt:** allow number array ([b5df8c4](https://github.com/hirosystems/wallet/commit/b5df8c4c598803d1c58bbdc8f04d0af8dcb20bbe))
* **psbt:** bad index check logic ([a0ff51e](https://github.com/hirosystems/wallet/commit/a0ff51eb8497d0a69f5e731eeb7c9efac0831ac1))
* **psbt:** dynamic validation of sighash type ([d86f865](https://github.com/hirosystems/wallet/commit/d86f865177473f5a3964a71fceb561d8f6538f94))
* **psbt:** write custom test, yup mixed not working ([53e3385](https://github.com/hirosystems/wallet/commit/53e33859db9603b45eebfca8e62e8349b41fa466))
* required allowedSighash ([6ddb8b7](https://github.com/hirosystems/wallet/commit/6ddb8b71974a3623acf0859eb3a1087a70b2d875))


### Internal

* allow bigint in createMoney ([3672e89](https://github.com/hirosystems/wallet/commit/3672e8904ae243fe2fa10f654d344799b642d126))
* calc btc fiat value hook ([cf7b8db](https://github.com/hirosystems/wallet/commit/cf7b8dbd628bf280e361e271229277c062b63398))
* format money with optional symbol ([e6ea975](https://github.com/hirosystems/wallet/commit/e6ea975be189668b2e128ff9068abd88ef090532))

## [4.32.0](https://github.com/hirosystems/wallet/compare/v4.31.0...v4.32.0) (2023-06-21)


### Features

* migrate profile legacy test, closes [#3709](https://github.com/hirosystems/wallet/issues/3709) ([1c01d54](https://github.com/hirosystems/wallet/commit/1c01d544a2b7cb231b9470a7424109d8096d5f38))


### Bug Fixes

* **psbt:** validated positive by mistake, 0 index broken ([bf793a0](https://github.com/hirosystems/wallet/commit/bf793a02b47e688a563388fc4c6e04160fcb1b7a))

## [4.31.0](https://github.com/hirosystems/wallet/compare/v4.30.1...v4.31.0) (2023-06-21)


### Features

* add brc-20 send for non-zero-index taproot addresses, closes [#3830](https://github.com/hirosystems/wallet/issues/3830) ([be93e72](https://github.com/hirosystems/wallet/commit/be93e72f1a6faa258aa85d30dfc70a2e94c86296))
* enable copying secret key from textarea when key is masked ([6ba30bb](https://github.com/hirosystems/wallet/commit/6ba30bbbdd79e73067e591a0007d44fc2320bd1e))
* masking secret key functionality while typing and copying key ([63e3c48](https://github.com/hirosystems/wallet/commit/63e3c486fe5a5f2d2e7e51475a95b0d7b654896e))


### Bug Fixes

* dockerfile to reduce vulnerabilities ([69bfc94](https://github.com/hirosystems/wallet/commit/69bfc943cf10e4447f70d7df93a1ea250209ffad))
* **psbt:** parse param schema, return error, closes [#3804](https://github.com/hirosystems/wallet/issues/3804) ([950a28a](https://github.com/hirosystems/wallet/commit/950a28a955e49850a0a346336b3d890a52a94fc9))
* set password routing ([73444e4](https://github.com/hirosystems/wallet/commit/73444e47bdb4b18f5c0fa49ab2032229e1bbd427))


### Internal

* add derivation path, ref [#3868](https://github.com/hirosystems/wallet/issues/3868) ([392aa01](https://github.com/hirosystems/wallet/commit/392aa019336cd672d3b9e1c2b35e817e3eb1ed03))
* **deps:** bump @apollo/server from 4.7.1 to 4.7.4 ([ec9909a](https://github.com/hirosystems/wallet/commit/ec9909ac0ab6b0ee8c3d17eba9fce4c0419190cd))
* mask secret key during sign in ([aac0d56](https://github.com/hirosystems/wallet/commit/aac0d565747fe5ae4e1fecfaae473485947709c2))
* psbt ui inputs query ([f320e84](https://github.com/hirosystems/wallet/commit/f320e8455c0885ef5c496ec61eb69857011d3426))
* **psbt:** support custom account index, fixes [#3868](https://github.com/hirosystems/wallet/issues/3868) ([f6e5e9d](https://github.com/hirosystems/wallet/commit/f6e5e9d30c0102f9c67c773015cdb53121a117ee))
* updated supported methods response ([38afa40](https://github.com/hirosystems/wallet/commit/38afa40453b8e1069f8012e606f143572e26ac43))

## [4.30.1](https://github.com/hirosystems/wallet/compare/v4.30.0...v4.30.1) (2023-06-16)


### Bug Fixes

* brc-20 send form bug ([d45f26e](https://github.com/hirosystems/wallet/commit/d45f26e62bf200f87a527fe6bca544f4b5560029))


### Internal

* track caught chain errors ([595230d](https://github.com/hirosystems/wallet/commit/595230dd8e55c820a14fd7ca5d41e50bdfe2c52e))

## [4.30.0](https://github.com/hirosystems/wallet/compare/v4.29.1...v4.30.0) (2023-06-15)


### Features

* add brc20 decimals, closes [#3840](https://github.com/hirosystems/wallet/issues/3840) ([dac9920](https://github.com/hirosystems/wallet/commit/dac99204ebaa7b0e1ce39b0313df8139596c908b))
* btc custom fees, closes [#3597](https://github.com/hirosystems/wallet/issues/3597), closes [#3760](https://github.com/hirosystems/wallet/issues/3760) ([1940eaf](https://github.com/hirosystems/wallet/commit/1940eaf8a8f0ebb8c07b41aed1e0acf57a4644d1))
* remove useref in infinite inscriptions query ([3a8ab16](https://github.com/hirosystems/wallet/commit/3a8ab169a64559bcfd3a0342af47799179999765))


### Bug Fixes

* allow user defined network ([0c23475](https://github.com/hirosystems/wallet/commit/0c23475049f55dfb688b25c0aa91fe5f3aafde24))
* another try ignoring err ([6f83383](https://github.com/hirosystems/wallet/commit/6f8338355ee5e9ece83db259f6966e79ce761a08))
* dup placeholder node ([d95e590](https://github.com/hirosystems/wallet/commit/d95e5905e7b760642524042456e23727b809a8b0))
* failing test with masking secret key ([2a4dc5f](https://github.com/hirosystems/wallet/commit/2a4dc5f108b8097811b08b813bbb2ff6763d5a02))
* request fees more often, closes [#3657](https://github.com/hirosystems/wallet/issues/3657) ([1d32325](https://github.com/hirosystems/wallet/commit/1d32325829ad292518fec671a0c27464cb30a8ca))
* **send-transfer:** poor validation, missing route guard, closes [#3823](https://github.com/hirosystems/wallet/issues/3823) ([d5720b9](https://github.com/hirosystems/wallet/commit/d5720b9c90a36d9e7a9d61f3bb6fd0d6d7660496))
* unwanted decimals in sats, closes [#3836](https://github.com/hirosystems/wallet/issues/3836) ([e1987ed](https://github.com/hirosystems/wallet/commit/e1987ed674b75edca2c3d6d19f08593390599b48))


### Internal

* add warning ([72105c7](https://github.com/hirosystems/wallet/commit/72105c7a24f42f8a866d82f4e724e6b10be1d7e5))
* each rpc method own file ([f0763a4](https://github.com/hirosystems/wallet/commit/f0763a4f27fa2fa7d30039d3c350d38798f8595e))
* improve form validation ([51f305d](https://github.com/hirosystems/wallet/commit/51f305d72669881549544d4351735d0df5c44399))
* mask secret key for new wallet onboarding ([84951d4](https://github.com/hirosystems/wallet/commit/84951d43578b69d3091dc3da4410d6578ed590a9))
* psbt ui to inputs and outputs ([dea361f](https://github.com/hirosystems/wallet/commit/dea361f3803c8a9478e3a87b7fa2cd3b214a17d9))
* **psbt:** support via RPC, closes [#3581](https://github.com/hirosystems/wallet/issues/3581) ([f828341](https://github.com/hirosystems/wallet/commit/f82834141b4bec0402f6ca50aaaf86b79c21e237))
* recipient select behaviour ([409cc72](https://github.com/hirosystems/wallet/commit/409cc7231689d87614bb1920d964d67d905f19d9))
* renaming stacks-specific code ([5d51b1e](https://github.com/hirosystems/wallet/commit/5d51b1eea80c9145d33128367a2087b3fa8e7b1c))

## [4.29.1](https://github.com/hirosystems/wallet/compare/v4.29.0...v4.29.1) (2023-06-13)


### Bug Fixes

* early return if stamps query returns undefined ([9378be5](https://github.com/hirosystems/wallet/commit/9378be575b69953329fa67164bfabc37c21357c2))

## [4.29.0](https://github.com/hirosystems/wallet/compare/v4.28.1...v4.29.0) (2023-06-07)


### Features

* edit fee in case of pending tx with same nonce, closes [#3426](https://github.com/hirosystems/wallet/issues/3426) ([6c96063](https://github.com/hirosystems/wallet/commit/6c9606370bc2f10d9c39962aa7d881717470a6c0))


### Bug Fixes

* add public keys to getAddresses response, closes [#3778](https://github.com/hirosystems/wallet/issues/3778) ([ebe594a](https://github.com/hirosystems/wallet/commit/ebe594acbb654872e71564c8b8cb81984c2c023c))
* inscriptions cache bug ([3c67a9b](https://github.com/hirosystems/wallet/commit/3c67a9b8db845f5edb732a108a5af95e57ee2b2a))
* prevent default low fee selection, closes [#3768](https://github.com/hirosystems/wallet/issues/3768) ([c4dd1ae](https://github.com/hirosystems/wallet/commit/c4dd1aeab224b1d923896d017e5de341cbac4cfc))
* reduce btc send form click area ([30b63a6](https://github.com/hirosystems/wallet/commit/30b63a6c083f48f0d70ec9938d93eace03e6ea94))
* remove disabling on send input click ([1b049e5](https://github.com/hirosystems/wallet/commit/1b049e52cad8d1a4d0a3e957d7a5395b39609409))
* request signatures should work with unsecured tokens ([d426457](https://github.com/hirosystems/wallet/commit/d4264575a91b0a5938be07858c7d553aad46aebe))
* unwanted blur validation ([e06305a](https://github.com/hirosystems/wallet/commit/e06305a7c14b503c0a8eb11e3277367ae4a48953))


### Internal

* **deps:** bump vite from 4.3.8 to 4.3.9 ([7af5e8a](https://github.com/hirosystems/wallet/commit/7af5e8afb7f3a8b4767c2f18c2cf272a5c6740d9))
* improve fee estimation ([11ce4b0](https://github.com/hirosystems/wallet/commit/11ce4b01955f51c3f27b325fed7a0dd42168f7a6))
* improve rpc message erroring ([da511d6](https://github.com/hirosystems/wallet/commit/da511d6f1339297c2383aa13fcd6bfda69d1d302))
* send max, closes [#3136](https://github.com/hirosystems/wallet/issues/3136), closes [#3576](https://github.com/hirosystems/wallet/issues/3576) ([5b7d99a](https://github.com/hirosystems/wallet/commit/5b7d99a890caa7fcea41275a74780c3109a5a5e2))

## [4.28.1](https://github.com/hirosystems/wallet/compare/v4.28.0...v4.28.1) (2023-06-02)


### Bug Fixes

* brc-20 tokens breaking ledger ([73b5f1e](https://github.com/hirosystems/wallet/commit/73b5f1ea929eed86e681dd03073d4ef1211a2e08))
* brc20 tokens asset list layout ([ad35d06](https://github.com/hirosystems/wallet/commit/ad35d06c4334e2b531f6c87952c729ce4e2089ce))

## [4.28.0](https://github.com/hirosystems/wallet/compare/v4.27.1...v4.28.0) (2023-06-01)


### Features

* add brc-20 send flow, closes [#3669](https://github.com/hirosystems/wallet/issues/3669) ([f12322b](https://github.com/hirosystems/wallet/commit/f12322b03757d0fe22d059104747b72787087cdd))
* add signet support, closes [#3771](https://github.com/hirosystems/wallet/issues/3771) ([2800623](https://github.com/hirosystems/wallet/commit/2800623fac63f18d4695b6eeca39fc82fc27b98e))
* change brc-20 balances api provider, closes [#3772](https://github.com/hirosystems/wallet/issues/3772) ([3805c77](https://github.com/hirosystems/wallet/commit/3805c771ff62286c21b2d4343b0ce568537491dc))
* initial brc-20 transfers ([bc4e180](https://github.com/hirosystems/wallet/commit/bc4e1800f60ffbd010224071326a51f6742b42fc))
* move add collectible card, closes [#3762](https://github.com/hirosystems/wallet/issues/3762) ([c91aba6](https://github.com/hirosystems/wallet/commit/c91aba66358cd3316f61a18386a3c4e2a89c6f1d))


### Bug Fixes

* don't subtract balances being returned to sender ([fc28749](https://github.com/hirosystems/wallet/commit/fc28749a714c65ec54707035b23132f1de5543c4))
* infinite loading bug, closes [#3783](https://github.com/hirosystems/wallet/issues/3783) ([dd3d218](https://github.com/hirosystems/wallet/commit/dd3d218555fa9aff3e34a12cfb67078452c44c75))
* insufficient balance error ([d4edf00](https://github.com/hirosystems/wallet/commit/d4edf006b0f6b514f27887650d67139470925e14))
* insufficient fee validation ([00f7c09](https://github.com/hirosystems/wallet/commit/00f7c099c37e0733fe9703c597a12e2b912f3236))


### Internal

* adjust refetch interval ([2f13612](https://github.com/hirosystems/wallet/commit/2f136125be9b493353091368449cdcee07c61d96))
* change api url ([fafbc54](https://github.com/hirosystems/wallet/commit/fafbc547a144a415d3903697a0f099f3ee48642d))
* remove duplicated fetcher fn ([8c2bad3](https://github.com/hirosystems/wallet/commit/8c2bad3948463de90db5803352366d0c275719b2))
* remove fetch on focus ([e915a43](https://github.com/hirosystems/wallet/commit/e915a437145423297d3db7a5126b4483d26b7d79))

## [4.27.1](https://github.com/hirosystems/wallet/compare/v4.27.0...v4.27.1) (2023-05-26)


### Bug Fixes

* **brc-20:** caching without query key ([3ae4af1](https://github.com/hirosystems/wallet/commit/3ae4af1d8b12265fcf9b23b9f6179d4351d9abbc))
* improve utxo selection ([a5a114b](https://github.com/hirosystems/wallet/commit/a5a114b253c1b6a90e6319ef14d2f4d554def4b6))
* same inscriptions among accounts bug ([1f04dd7](https://github.com/hirosystems/wallet/commit/1f04dd76b8ec086712bedc3548ce197af0de67ae))


### Internal

* update readme ([1bc6198](https://github.com/hirosystems/wallet/commit/1bc619875a8285681a82902ea980e6c5dbb6f981))

## [4.27.0](https://github.com/hirosystems/wallet/compare/v4.26.0...v4.27.0) (2023-05-25)


### Features

* revert gaia url ([52375a0](https://github.com/hirosystems/wallet/commit/52375a0d8bc8175846c99c1a660c4b8767d3fd8e))


### Internal

* brc-20 query path ([bc1ee1c](https://github.com/hirosystems/wallet/commit/bc1ee1cd2ec68c9bf22f4609f93cb52771639403))

## [4.26.0](https://github.com/hirosystems/wallet/compare/v4.25.0...v4.26.0) (2023-05-24)


### Features

* change gaia url, closes [#3678](https://github.com/hirosystems/wallet/issues/3678) ([baa3c4a](https://github.com/hirosystems/wallet/commit/baa3c4a11f41d599e120f2323dcf70fcab361821))
* show available btc balance in balances list and total balance, closes [#3685](https://github.com/hirosystems/wallet/issues/3685) ([c329a69](https://github.com/hirosystems/wallet/commit/c329a69a52c9e070511f99ae8fb5cfd75b875ed3))
* show stacked balance, closes [#2835](https://github.com/hirosystems/wallet/issues/2835) ([80af821](https://github.com/hirosystems/wallet/commit/80af8217c86631148900bc71188b8867c69b78d6))


### Bug Fixes

* **analytics:** wrong api details, missing token ([db3a296](https://github.com/hirosystems/wallet/commit/db3a296a4f0b4c87c6b99d32272dd1e3cf9e021d))
* live reload losing in memory key ([0803ce6](https://github.com/hirosystems/wallet/commit/0803ce6ad7b62fe0d17e9b90a4107f09bb86249b))
* stamps query key ([647cbee](https://github.com/hirosystems/wallet/commit/647cbee1079a50ff620864d8cf5955b8b39152da))


### Internal

* key derivation, closes [#3725](https://github.com/hirosystems/wallet/issues/3725) ([11f9461](https://github.com/hirosystems/wallet/commit/11f9461a68c35c58a23c00aee8766c2b463106f1))
* upgrade dev deps ([d9c9f30](https://github.com/hirosystems/wallet/commit/d9c9f30ad5a675028c305fc889c9212a162f1a10))
* upgrade to jotai v2, other pkgs ([b3ec461](https://github.com/hirosystems/wallet/commit/b3ec461bb8da40d90acf4b7c6b6055cc39fd07aa))

## [4.25.0](https://github.com/hirosystems/wallet/compare/v4.24.2...v4.25.0) (2023-05-21)


### Features

* add inscriptions infinite loading, closes [#3694](https://github.com/hirosystems/wallet/issues/3694) ([e10e6e1](https://github.com/hirosystems/wallet/commit/e10e6e1af6f0d29995fe368ee86dea2ab795e407))
* remove subbalance ([6fee549](https://github.com/hirosystems/wallet/commit/6fee549b6c0c5ed424bae190dda9a3eddeb02fb6))


### Internal

* update documentation link ([89e46b5](https://github.com/hirosystems/wallet/commit/89e46b5aa7c28d2d14e972568023245dd5847019))

## [4.24.2](https://github.com/hirosystems/wallet/compare/v4.24.1...v4.24.2) (2023-05-17)


### Bug Fixes

* delete networks bug in firefox, closes [#3608](https://github.com/hirosystems/wallet/issues/3608) ([a092f8d](https://github.com/hirosystems/wallet/commit/a092f8d60c225388fda4d7921b8ef541134c915a))
* display json mime type inscriptions, closes [#3533](https://github.com/hirosystems/wallet/issues/3533) ([ec350ca](https://github.com/hirosystems/wallet/commit/ec350ca3195670cc3c5071c48ab53eb1b1f7d93c))
* ignore known sentry errors ([db5150a](https://github.com/hirosystems/wallet/commit/db5150a750da206f2ec43e143bdbb2ba7a747006))
* insufficient funds error, closes [#3661](https://github.com/hirosystems/wallet/issues/3661), closes [#3651](https://github.com/hirosystems/wallet/issues/3651) ([5d95d99](https://github.com/hirosystems/wallet/commit/5d95d994dc24bb1014e2f8c732810c18e2f742bc))


### Internal

* add query headers ([4841867](https://github.com/hirosystems/wallet/commit/484186795aac51df0da6705069ac6a2dc301e353))
* add temp warning msg ([5d4a454](https://github.com/hirosystems/wallet/commit/5d4a454e9d7a9cbdd6830caf76d8087a52a29c8a))
* brc-20 token balance query ([bad4797](https://github.com/hirosystems/wallet/commit/bad4797854f1c48f5e6245c464b9bf1691f035f8))
* improve logging ([bbb7dc0](https://github.com/hirosystems/wallet/commit/bbb7dc0472b27c9934237da7f9d980350b5dd4be))
* remove react type resolutions ([bac98ce](https://github.com/hirosystems/wallet/commit/bac98ceac0bfb22ae4b47a14ce79a5dde58fc46a))
* upgrade packages ([356e794](https://github.com/hirosystems/wallet/commit/356e794346faf086651c5655b17b550b9e53c994))

## [4.24.1](https://github.com/hirosystems/wallet/compare/v4.24.0...v4.24.1) (2023-05-12)


### Bug Fixes

* delete networks bug in firefox, closes [#3608](https://github.com/hirosystems/wallet/issues/3608) ([0d44d13](https://github.com/hirosystems/wallet/commit/0d44d1363806c25461d5c995ecf38dc9ff3f834d))


### Internal

* add query headers ([37e1cbf](https://github.com/hirosystems/wallet/commit/37e1cbf6adbcaba893ba94e77caf22080d55ac66))
* brc-20 token balance query ([1c41703](https://github.com/hirosystems/wallet/commit/1c4170328ca8ae2f9514e2d68b0179e577df3d05))

## [4.24.0](https://github.com/hirosystems/wallet/compare/v4.23.0...v4.24.0) (2023-05-12)


### Features

* add hiro api test ([db53c6d](https://github.com/hirosystems/wallet/commit/db53c6d77b3c6e3d28c27ac2957217c7a80ba822))
* change ordapi to hiro ordinals api, closes [#3417](https://github.com/hirosystems/wallet/issues/3417) ([73a2957](https://github.com/hirosystems/wallet/commit/73a2957f6d06562b0e12204ced8084ba9be3c13a))
* send inscription choose fee, closes [#3544](https://github.com/hirosystems/wallet/issues/3544) ([45c090f](https://github.com/hirosystems/wallet/commit/45c090fa3ce584bebb8c321eb787ae9d06346385))


### Bug Fixes

* **brc-20:** handle bad response ([3775a6c](https://github.com/hirosystems/wallet/commit/3775a6c7776a0cfe541bccbc0009140a0f55c8f4))

## [4.23.0](https://github.com/hirosystems/wallet/compare/v4.22.0...v4.23.0) (2023-05-11)


### Features

* bip322, closes [#3386](https://github.com/hirosystems/wallet/issues/3386) ([ad8ed1b](https://github.com/hirosystems/wallet/commit/ad8ed1b2075206d5f999a88fe49a6e5ba5d4515e))


### Bug Fixes

* send-zero-error-msg, closes [#3662](https://github.com/hirosystems/wallet/issues/3662) ([400cc51](https://github.com/hirosystems/wallet/commit/400cc51cf37d8a29406e76e20985d3a5c9d188f1))
* upgrade noble packages, and others ([38749a4](https://github.com/hirosystems/wallet/commit/38749a4775db6dac3d8692d0084a72f2a84efe51))


### Internal

* **bip322:** create factory fn to reduce repitition ([c13ae58](https://github.com/hirosystems/wallet/commit/c13ae584a42d3e38967fc30db7de4e9d6bd06c99))
* remove symbol from error msgs ([e873225](https://github.com/hirosystems/wallet/commit/e873225f2d6eef6736e119ee56fd8002ffcbafb8))
* **routing:** upgrade to v6.4 Data APIs, closes [#3663](https://github.com/hirosystems/wallet/issues/3663) ([739b44d](https://github.com/hirosystems/wallet/commit/739b44d3f590c24acef56eae07a3a92596c739af))

## [4.22.0](https://github.com/hirosystems/wallet/compare/v4.21.1...v4.22.0) (2023-05-08)


### Features

* include wallet provider to user session object, closes [#3603](https://github.com/hirosystems/wallet/issues/3603) ([6830ea5](https://github.com/hirosystems/wallet/commit/6830ea57a61f4170ab032a1409e76660ecc58b71))


### Bug Fixes

* balances list tr breaking ledger ([69f6a71](https://github.com/hirosystems/wallet/commit/69f6a71232170788f066e1eecb74529fddb09c78))
* copy taproot address, [#3664](https://github.com/hirosystems/wallet/issues/3664) ([ef8e19d](https://github.com/hirosystems/wallet/commit/ef8e19df9313b6689aca034b22583033b1973979))
* filtering dust utxos, closes [#3374](https://github.com/hirosystems/wallet/issues/3374), closes [#3163](https://github.com/hirosystems/wallet/issues/3163) ([403c7cb](https://github.com/hirosystems/wallet/commit/403c7cb0da1e60af55abbf78993d6dbcf50c6f35))

## [4.21.1](https://github.com/hirosystems/wallet/compare/v4.21.0...v4.21.1) (2023-05-08)


### Bug Fixes

* brc-20 address ([3b204f4](https://github.com/hirosystems/wallet/commit/3b204f4b0acb9a8f5f426492e8ecbd113f8675a5))

## [4.21.0](https://github.com/hirosystems/wallet/compare/v4.20.0...v4.21.0) (2023-05-07)


### Features

* brc-20 token balances, closes [#3629](https://github.com/hirosystems/wallet/issues/3629) ([85e5f9a](https://github.com/hirosystems/wallet/commit/85e5f9a6b6d733ec987278fda8ebb9ec0698eed1))


### Bug Fixes

* onboarding test ([c45efea](https://github.com/hirosystems/wallet/commit/c45efea4a85c63d96a6ba34e43db1e8ad6e98f6a))


### Internal

* stamps query and ui, closes [#3648](https://github.com/hirosystems/wallet/issues/3648) ([501ac5f](https://github.com/hirosystems/wallet/commit/501ac5f7154136bbd25d02ed2bf2e3366a27afbf))

## [4.20.0](https://github.com/hirosystems/wallet/compare/v4.19.0...v4.20.0) (2023-05-03)


### Features

* apply highest fee for high estimate, closes [#3639](https://github.com/hirosystems/wallet/issues/3639) ([a1d941b](https://github.com/hirosystems/wallet/commit/a1d941b602ffed62bff568ca749a8d7a40ba29fa))
* refactor available balance ([155e809](https://github.com/hirosystems/wallet/commit/155e80973c332b638074b2160945387d1970bced))
* stamps collectibles, closes [#3589](https://github.com/hirosystems/wallet/issues/3589) ([4d31163](https://github.com/hirosystems/wallet/commit/4d31163d9bb3350eedd7eb9d019d0bcbacf256ef))


### Bug Fixes

* **ledger:** user landing on sign in screen, closes [#3632](https://github.com/hirosystems/wallet/issues/3632) ([28437bf](https://github.com/hirosystems/wallet/commit/28437bf5170ec8545dee4ab76eb7fc1652d29c54))
* prop error in asset items component ([bda1343](https://github.com/hirosystems/wallet/commit/bda1343bd5ec9e67a5d4ec0491af6d38c38598b7))
* stamps query options ([6a8c7aa](https://github.com/hirosystems/wallet/commit/6a8c7aab7634da455ed98fca447c2928007badaa))

## [4.19.0](https://github.com/hirosystems/wallet/compare/v4.18.1...v4.19.0) (2023-05-01)


### Features

* add average bitcoin fee rate ([c1cdbbe](https://github.com/hirosystems/wallet/commit/c1cdbbec62ca1dd9cb9186a23dcf2b6410c569bf))


### Bug Fixes

* **ordinals:** improved check, all_inscrptions first ([420d136](https://github.com/hirosystems/wallet/commit/420d136df00d9248e3667b32480f4709fc8764cb))
* **ordinals:** sending inscriptions validation, closes [#3618](https://github.com/hirosystems/wallet/issues/3618) ([1f49ad2](https://github.com/hirosystems/wallet/commit/1f49ad248d22fceeabe948f5e900b018dd06b958))


### Internal

* group math helpers ([b6ff306](https://github.com/hirosystems/wallet/commit/b6ff306ee93a61fa3a2a4d54938ef4a37b1195e7))

## [4.18.1](https://github.com/hirosystems/wallet/compare/v4.18.0...v4.18.1) (2023-04-27)


### Bug Fixes

* ensure users don't accidentally send stamped utxos ([fccf6a9](https://github.com/hirosystems/wallet/commit/fccf6a95c291c9f7a4ac79419129de6b836661aa))
* retrieve bitcoin from tr addresses, closes [#3575](https://github.com/hirosystems/wallet/issues/3575) ([76d400e](https://github.com/hirosystems/wallet/commit/76d400e20492d57bebb1cb5ce6eecdbaa3b7abf9))

## [4.18.0](https://github.com/hirosystems/wallet/compare/v4.17.0...v4.18.0) (2023-04-26)


### Features

* add btc balance in account selection total balance ([2a06e95](https://github.com/hirosystems/wallet/commit/2a06e95a552c03a391abbf95bf2b20920f9b0e0f))
* btc send transfer ([7c7fdae](https://github.com/hirosystems/wallet/commit/7c7fdaee32f410191c0c6c7de2ec477a5a609e22))


### Bug Fixes

* **analytics:** exploring use of traits ([2fda5a3](https://github.com/hirosystems/wallet/commit/2fda5a3d459ce1c3faae0febf238ae501b346e28))
* inability to remove network ([dcf3c40](https://github.com/hirosystems/wallet/commit/dcf3c40996d49de1055bca6f56a9e9b737439c98))
* pad decimals, closes [#3582](https://github.com/hirosystems/wallet/issues/3582) ([1ccf7dd](https://github.com/hirosystems/wallet/commit/1ccf7dd3ec1bea7566672771141d2f1b64d4a698))
* send transfer success response ([6d12445](https://github.com/hirosystems/wallet/commit/6d124452957b481d7652350fc455ae10934a916e))
* stx and sip10 tx error routing ([c46797f](https://github.com/hirosystems/wallet/commit/c46797f641655aaab08dd3d54eead990e8391e0c))
* tabular alignment of numberical amounts ([4cbce03](https://github.com/hirosystems/wallet/commit/4cbce03bf0044b5a1a982b2b514d10aadcf04216))
* tx req edit nonce ([5871a95](https://github.com/hirosystems/wallet/commit/5871a9582ff9fd420d22823872864c42076fdf45))


### Internal

* force consistent interface style ([63714ca](https://github.com/hirosystems/wallet/commit/63714ca4f2e2d0090d4aad2ff079cce10eb32385))
* improve linting ([485bf6e](https://github.com/hirosystems/wallet/commit/485bf6ecf58d488ea8a17c0ad7a7ace383a01a6a))
* use consistent signing pattern, closes [#3405](https://github.com/hirosystems/wallet/issues/3405) ([8ea185a](https://github.com/hirosystems/wallet/commit/8ea185a785b9f99822e8315300e8f77a8ac9da2e))
* using factory fn for signer ([541c3b7](https://github.com/hirosystems/wallet/commit/541c3b78e887ae7710433e58c8a796981f9f9af9))

## [4.17.0](https://github.com/hirosystems/wallet/compare/v4.16.0...v4.17.0) (2023-04-21)


### Features

* subtract pending fees from available balance in stx send form ([21493a6](https://github.com/hirosystems/wallet/commit/21493a6fe53066bd6a5160691645b54326c64238))


### Bug Fixes

* **activity:** fetch on interval, closes [#3409](https://github.com/hirosystems/wallet/issues/3409) ([4fad22f](https://github.com/hirosystems/wallet/commit/4fad22f5f7c37138ceb17c801e7b13d5931546b1))
* upgrade react 18 ([3add4f7](https://github.com/hirosystems/wallet/commit/3add4f7f52b2ccd2a01d560bed56a53a9c36cb76))
* use new hiro urls, closes [#3383](https://github.com/hirosystems/wallet/issues/3383) ([658b723](https://github.com/hirosystems/wallet/commit/658b723f0305c8734938a042a90b201a996d2084))


### Internal

* improve inscrption transfer logic, closes [#3399](https://github.com/hirosystems/wallet/issues/3399) ([112ee3e](https://github.com/hirosystems/wallet/commit/112ee3ed793f5ba8d93c78a6c2e3ec5bd7d737ac))
* update noble packages ([cbf3616](https://github.com/hirosystems/wallet/commit/cbf3616cf0cb94f304d491a97a9d7f167ff67460))

## [4.16.0](https://github.com/hirosystems/wallet/compare/v4.15.0...v4.16.0) (2023-04-17)


### Features

* add btc set fee choice ([485dbcd](https://github.com/hirosystems/wallet/commit/485dbcddfa95459b0d9249831f2c1ff4014fe554))
* add collectibles analytic event ([6067028](https://github.com/hirosystems/wallet/commit/60670285ecd6b2ee490c6180ca1b275748954243))
* add regtest support to BTC address config files ([8e84eb0](https://github.com/hirosystems/wallet/commit/8e84eb0be01f6f7745b85c2d9bd032f06e4c3b1a))
* remove scraping for utxo inscriptions ([31acf9b](https://github.com/hirosystems/wallet/commit/31acf9bb2b9f1b93f24f84dd838f00e880060a07))


### Bug Fixes

* btc fees test ([b78c9a7](https://github.com/hirosystems/wallet/commit/b78c9a73d6ca6126429315fd4cfebd2e3a619049))
* formatMoney needed a decimal ([a4521d9](https://github.com/hirosystems/wallet/commit/a4521d97f1c03af0365d46d7e060e63e2bbf5eb9))
* google docs breaking, closes [#3502](https://github.com/hirosystems/wallet/issues/3502) ([c9830b2](https://github.com/hirosystems/wallet/commit/c9830b29208cc750b8cc34af5bbf5f174993b8b5))
* infer pixelated images, set rendering ([0890016](https://github.com/hirosystems/wallet/commit/089001662a120fd9b03c43a86000fccf9e688bef))
* issue with jumbled utxo ordering ([e7871b0](https://github.com/hirosystems/wallet/commit/e7871b0d74050e5ab072f315c7ec0282daf5590b))
* missing inscriptoin frame, closes [#3520](https://github.com/hirosystems/wallet/issues/3520) ([a8c7622](https://github.com/hirosystems/wallet/commit/a8c76229351c497675b95122091d3b4ebeefa1d2))
* sip10 tokens send bug ([afe15f4](https://github.com/hirosystems/wallet/commit/afe15f45377aa0fcbb8862b72d6a6f797df9e033))
* temp hide psbt changes ([58520fd](https://github.com/hirosystems/wallet/commit/58520fd2a432d1c1c91648eca2e9d4074108bbe1))


### Internal

* hiro explorer path ([f02070a](https://github.com/hirosystems/wallet/commit/f02070ad2e587008015202b4a4534516e476ede6))
* improve psbt ui ([f5c8b1e](https://github.com/hirosystems/wallet/commit/f5c8b1e3be397acb92a2e14247caf84d32e61c4f))
* next version of psbt ui ([98ffb3a](https://github.com/hirosystems/wallet/commit/98ffb3a0f94ce66e021f74663afd0358998b8e4c))

## [4.15.0](https://github.com/hirosystems/wallet/compare/v4.14.0...v4.15.0) (2023-04-05)


### Features

* add common stacks send form ([4524e1a](https://github.com/hirosystems/wallet/commit/4524e1a8f0e8c31c0fe0ea28207c271e4c43f878))
* change sip10 confirmation screen ([f3d61a3](https://github.com/hirosystems/wallet/commit/f3d61a3133d21fdb197faf96ac23e4fc21679e98))
* make custom network key required ([1395afd](https://github.com/hirosystems/wallet/commit/1395afd26e2e5a7e3966b8ed214cedc9eb48e678))
* sort user txs ([46a7e2e](https://github.com/hirosystems/wallet/commit/46a7e2e6d16027c9cc4bedc31ae824cddfb5f251))


### Bug Fixes

* return stx address in getAddresses ([f634775](https://github.com/hirosystems/wallet/commit/f634775b848e33cf07f772cb5495097928bd667d))
* sent tx summary ([47b43af](https://github.com/hirosystems/wallet/commit/47b43afa7b21a8a40acb01bb00a56b06637aa350))
* sip10 token send form bug ([fd4c4ed](https://github.com/hirosystems/wallet/commit/fd4c4ed1c6931c8a96b05b82fa77dbbd2003c334))
* stx send form test ([fd901fd](https://github.com/hirosystems/wallet/commit/fd901fd1ed0ea96371e06a6281e3c0122dad4cb4))


### Internal

* btc send form ([f28aabf](https://github.com/hirosystems/wallet/commit/f28aabfdc7ad4deb5ee72d14d032fda3e6a21a19))
* recipient field ([61852f8](https://github.com/hirosystems/wallet/commit/61852f8daa2061d2d18580c907ecaa5ef52b230d))
* remove sip10 form optional params ([ec609a6](https://github.com/hirosystems/wallet/commit/ec609a61f9fe4b127f25fddbd37432b33a7bbd79))
* sip 10 send form ([64a04a4](https://github.com/hirosystems/wallet/commit/64a04a42b123df1988b2b539be5334ded1e21af7))

## [4.14.0](https://github.com/hirosystems/wallet/compare/v4.13.0...v4.14.0) (2023-03-23)


### Features

* add rpc methods ([8206122](https://github.com/hirosystems/wallet/commit/8206122b19c293728af3c1c16bd6e5ce123234f5))
* add test for stx and btc send confirmation page ([09de591](https://github.com/hirosystems/wallet/commit/09de591f2812922e7bf1cbf1b56a89f61f49ecc4))
* token metatdata api client ([2045628](https://github.com/hirosystems/wallet/commit/2045628c081849d68e0ef324aeb38adfebd7f8a0))


### Bug Fixes

* add testnet badge in app nav while signing ([a3dfa94](https://github.com/hirosystems/wallet/commit/a3dfa9469087f0074055c0d85122b40f7cb5c405))
* align to baseline ([225446e](https://github.com/hirosystems/wallet/commit/225446eef4ec116e3d25e7301c8a29c4b6b9687d))
* bug with not updating balance list on network change ([7be3827](https://github.com/hirosystems/wallet/commit/7be3827ede36ef78f4dd29f4b4eabc4e2e463693))
* bugs introduced on dev ([faf7e1e](https://github.com/hirosystems/wallet/commit/faf7e1e449596e9b8a18370405e162efc26c05bd))
* fee tests ([d40a33f](https://github.com/hirosystems/wallet/commit/d40a33fdadd6845b278c57e48c8df6995282d7fd))
* filter unconfirmed utxos, closes [#3468](https://github.com/hirosystems/wallet/issues/3468) ([c3d865b](https://github.com/hirosystems/wallet/commit/c3d865beec193a96e1ab26b8996b50485a1f6aea))
* improve collectibles ui ([a2ba78c](https://github.com/hirosystems/wallet/commit/a2ba78c024fbb3f39ee11fb9ada7fd609d6b7996))
* remove network row from psbt request ([311426e](https://github.com/hirosystems/wallet/commit/311426edf89897ab82e9f61ffa0f707054354a6f))
* updated testnet with latest changes to popup header ([e667284](https://github.com/hirosystems/wallet/commit/e667284963f64923c66937b326fc1418db84a5e9))


### Internal

* enforce strict component type ([149d643](https://github.com/hirosystems/wallet/commit/149d643cfaa81598b56bdf6ce053ab0481be6fa1))
* ft and nft query to new client ([5bc54b5](https://github.com/hirosystems/wallet/commit/5bc54b5ab025add03989ef3fbf86ba7dd8781a2e))
* money types ([1e40977](https://github.com/hirosystems/wallet/commit/1e4097754d3aeb5e6187c34986330400a9c36ac4))
* move utility function ([7ca08d9](https://github.com/hirosystems/wallet/commit/7ca08d97814591d940ccd76a786970abcf7193f9))
* remove unnecessary conditional ([4207cdd](https://github.com/hirosystems/wallet/commit/4207cdd869231190f06ea1bec70e329290283791))
* remove unnecessary conditional ([c284ca1](https://github.com/hirosystems/wallet/commit/c284ca15a8555584430649cf751bf6298fce01f8))
* remove unnecessary conditional ([093910c](https://github.com/hirosystems/wallet/commit/093910c159acac4f2384997db5dc4d267db6c699))
* remove unnecessary conditional ([1173475](https://github.com/hirosystems/wallet/commit/11734751fce93dcdd0476e1c6d21313cab631e54))
* remove unnecessary conditional ([bd6e722](https://github.com/hirosystems/wallet/commit/bd6e722d73db43de013a75a076dfe268a8cf426b))
* rename method ([25b57b4](https://github.com/hirosystems/wallet/commit/25b57b422739a055ebd493c9f43ab45cd7ea93bc))
* use theme colors ([aeafe02](https://github.com/hirosystems/wallet/commit/aeafe02f3f9b4eae80ab36cba92d6bcc4c8f50e1))

## [4.13.0](https://github.com/hirosystems/wallet/compare/v4.12.0...v4.13.0) (2023-03-19)


### Features

* create new page header component ([053825f](https://github.com/hirosystems/wallet/commit/053825f28c246941f23c22ee11ff736e4dccc93b))
* redesign send review flow ([98421ca](https://github.com/hirosystems/wallet/commit/98421cad0a6d1433583141f444358bd76ed31aca))


### Bug Fixes

* don't hide switch account menu ([960f477](https://github.com/hirosystems/wallet/commit/960f477f1a9e7bca9a4014e373e8d6fb309d65f9))
* ft metadata not found ([7486870](https://github.com/hirosystems/wallet/commit/7486870f8f45d805c56783e28db2f64e80c77e14))
* metadata undefined and key error ([d3137c5](https://github.com/hirosystems/wallet/commit/d3137c514f06f3dabb442001cec2b8470ed04a2e))
* ordinals view details link ([28cd0ea](https://github.com/hirosystems/wallet/commit/28cd0ea3de73a1a77d1db51cb58b048b24ca8142))
* psbt display of uint8array ([15870be](https://github.com/hirosystems/wallet/commit/15870bef0ed79461d27b7d8f1891492136e29ec0))
* remove theme switch transition ([a5ce937](https://github.com/hirosystems/wallet/commit/a5ce937f33df3bb05d165288be3043f1dd2d6bb6))
* stacks ft missing flag ([cf4975a](https://github.com/hirosystems/wallet/commit/cf4975a1a50f723721d88a17ccce94036427c513))


### Internal

* remove banner ([d87a059](https://github.com/hirosystems/wallet/commit/d87a0595ba27c1ba75f96fb1b6343a72fe5f49cd))
* update banner in wallet config ([7380515](https://github.com/hirosystems/wallet/commit/73805153ca96e99cf2a5151ea7fdd8f8fc5a7efe))
* use zero index for taproot receive address ([5af10e5](https://github.com/hirosystems/wallet/commit/5af10e50f006a98f9632bc12f4b65982d7f840ef))

## [4.12.0](https://github.com/hirosystems/wallet/compare/v4.11.0...v4.12.0) (2023-03-18)


### Features

* change ordinals content url ([38e83a7](https://github.com/hirosystems/wallet/commit/38e83a76b9445bab200f6c5cbfbacb4c9d3e5b89))

## [4.11.0](https://github.com/hirosystems/wallet/compare/v4.10.2...v4.11.0) (2023-03-18)


### Features

* update wallet config ([f20d8fe](https://github.com/hirosystems/wallet/commit/f20d8fe8dbabdcde10daf5fe5e5e2ebaf17725af))

## [4.10.2](https://github.com/hirosystems/wallet/compare/v4.10.1...v4.10.2) (2023-03-15)


### Bug Fixes

* added in microblock label to activity ([0740dcb](https://github.com/hirosystems/wallet/commit/0740dcb71c7770b968a0bfd25a5755c55d3bd908))
* ft metadata ([9aa5f2a](https://github.com/hirosystems/wallet/commit/9aa5f2a3892cbe4104bdc8792438050859ad5a98))
* microblock label not working ([f962582](https://github.com/hirosystems/wallet/commit/f9625823f3343ddc5bbd345362b55cef02e99470))
* show total balance, not stx in psbt ([3d08249](https://github.com/hirosystems/wallet/commit/3d082498a6e9d5e8570499d3d692296bcd1deb32))

## [4.10.1](https://github.com/hirosystems/stacks-wallet-web/compare/v4.10.0...v4.10.1) (2023-03-15)


### Bug Fixes

* ordinal inscription address ([a5e4e8e](https://github.com/hirosystems/stacks-wallet-web/commit/a5e4e8ec8395fb4c4c07e64c59976c8fae01bffb))

## [4.10.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.9.0...v4.10.0) (2023-03-14)


### Features

* add support for psbt requests ([ef053c5](https://github.com/hirosystems/stacks-wallet-web/commit/ef053c50e8465394bb36faa0488ea9793b52f52d))
* add taproot support for psbts ([a77b034](https://github.com/hirosystems/stacks-wallet-web/commit/a77b034b8c61cbe62cc0c9e20e562b4565cb9501))
* deliver hex ui for v1 ([dc9de34](https://github.com/hirosystems/stacks-wallet-web/commit/dc9de34e5b9a49f6d5a86be496c466c838315bdd))
* use dompurify to escape text ordinals ([a98791f](https://github.com/hirosystems/stacks-wallet-web/commit/a98791ff1b6e39cd412c6c008c1ce5d0ee4a0dcb))


### Bug Fixes

* remove unused code ([7926e04](https://github.com/hirosystems/stacks-wallet-web/commit/7926e040084045ba19706cdab8f5f33fecadfdf2))
* removed create account button from settings dropdown ([3f028c7](https://github.com/hirosystems/stacks-wallet-web/commit/3f028c7cbbe4a1b8362006f4472632e7a3189cb8))
* settings dropdown rebase ([18ff479](https://github.com/hirosystems/stacks-wallet-web/commit/18ff4797612ce04e36b470841a166ac02a505603))
* test-app taproot psbts and update pkgs ([28bb4ca](https://github.com/hirosystems/stacks-wallet-web/commit/28bb4ca7c555561ca02733217c1f79844a052e74))


### Internal

* readme for bitcoin ([0f256c6](https://github.com/hirosystems/stacks-wallet-web/commit/0f256c63fefb078a99c3cb275e6944c9cb821d0b))
* sign at index as an array ([756c2a4](https://github.com/hirosystems/stacks-wallet-web/commit/756c2a47d838e7b498e4d1faf8b1c5c2e698351d))
* upgrade pkg to scure-btc-signer ([6e68f28](https://github.com/hirosystems/stacks-wallet-web/commit/6e68f28412f04378270585da2bf5d707559951db))

## [4.9.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.8.1...v4.9.0) (2023-03-12)


### Features

* add routes for recovering tr funds ([97d3bc9](https://github.com/hirosystems/stacks-wallet-web/commit/97d3bc9e50a65905baab51e5ca54bfdffec55260))
* add sent btc and stx summary pages ([0a9f87b](https://github.com/hirosystems/stacks-wallet-web/commit/0a9f87b6b11d6ea72a3a48c175ea206bcf94fcb2))
* change link to mempool in btc txs ([a7cf682](https://github.com/hirosystems/stacks-wallet-web/commit/a7cf6828461d5f0f9575224f71a31d6147b69366))
* open btc receive modal on copy icon click ([c51bbc0](https://github.com/hirosystems/stacks-wallet-web/commit/c51bbc08b4ebd2741364acc3f94e3eda5e3ce692))
* open input on fees click ([d92a1f0](https://github.com/hirosystems/stacks-wallet-web/commit/d92a1f03d0bfd4ee42702bd282a4b016f50ee318))


### Internal

* broadcast transaction hook ([05c5b7d](https://github.com/hirosystems/stacks-wallet-web/commit/05c5b7dbf4896749810636406eb6cee29b7d1f8b))

## [4.8.1](https://github.com/hirosystems/stacks-wallet-web/compare/v4.8.0...v4.8.1) (2023-03-09)


### Bug Fixes

* **ledger:** prevent tr specific hook on ledger, closes [#3393](https://github.com/hirosystems/stacks-wallet-web/issues/3393) ([6b95201](https://github.com/hirosystems/stacks-wallet-web/commit/6b9520153329a06f5fbb7da1f4ea6da283e60a3a))

## [4.8.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.7.0...v4.8.0) (2023-03-08)


### Features

* show inaccessible taproot btc balance ([750be5e](https://github.com/hirosystems/stacks-wallet-web/commit/750be5ef8dcbb79802e63bd0436832ebafc30de3))


### Bug Fixes

* recipient field bns address ([f552001](https://github.com/hirosystems/stacks-wallet-web/commit/f552001c0972667811024162f72686fe7c7c4dc8))
* utxos that do not belong ([c229d76](https://github.com/hirosystems/stacks-wallet-web/commit/c229d76eeb33fb5fec9f97a3ad4b366bd8deda2d))


### Internal

* update copy ([9478499](https://github.com/hirosystems/stacks-wallet-web/commit/9478499813cd86566ce1c93feefa26cdcd59660c))

## [4.7.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.6.0...v4.7.0) (2023-03-07)


### Features

* add collectible hover call to action ([b965cdf](https://github.com/hirosystems/stacks-wallet-web/commit/b965cdf003123087db891e0c6467b72a6693b425))


### Bug Fixes

* prevent sign-in while signed in with a route guard ([4378f72](https://github.com/hirosystems/stacks-wallet-web/commit/4378f727ed0e2814a06e6079329a4c1801c98b50))
* sip10 recipient validation ([b604f54](https://github.com/hirosystems/stacks-wallet-web/commit/b604f54291234830b7fde29d0e3c428ecadbeb78))

## [4.6.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.5.0...v4.6.0) (2023-03-06)


### Features

* add sorting txs by time ([564fe8b](https://github.com/hirosystems/stacks-wallet-web/commit/564fe8b85ff49499e69d03ff94f45ebd92e98f39))
* change btc tx pending msg ([2cb05f9](https://github.com/hirosystems/stacks-wallet-web/commit/2cb05f96002515787ba89e8e03d477bfbab69d41))
* remove autocomplete in send forms ([c3db5af](https://github.com/hirosystems/stacks-wallet-web/commit/c3db5affea28eca0c438000c7d56a9ea76067b07))
* use camelcase in naming ([e800b20](https://github.com/hirosystems/stacks-wallet-web/commit/e800b20fed0374b5af3dfdfc4e73cae59372c014))


### Bug Fixes

* bns recipient ([3378708](https://github.com/hirosystems/stacks-wallet-web/commit/3378708a4db17d04a73cf5bc29039ddbb5d7a47a))
* recipient address field naming ([1ab5392](https://github.com/hirosystems/stacks-wallet-web/commit/1ab539251b79d49c4deb2d415a966a6eaa4e08b2))
* tx list test ([302ac1b](https://github.com/hirosystems/stacks-wallet-web/commit/302ac1b9e9eeac19126da0e4e60f61a60787e522))

## [4.5.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.4.0...v4.5.0) (2023-03-05)


### Features

* fetch owner of a name ([cc49ffa](https://github.com/hirosystems/stacks-wallet-web/commit/cc49ffa105340bda5ffb2d56c3f5959123b67b7e))
* prioritize bns name over bnsx ([03d0ec2](https://github.com/hirosystems/stacks-wallet-web/commit/03d0ec29b8ffbc118726088764d1807bd151e3c3))
* query bnsx name from contract ([814718b](https://github.com/hirosystems/stacks-wallet-web/commit/814718bf83490f16c5e478c564053d8e2511caf7))
* send btc to bns ([641fdad](https://github.com/hirosystems/stacks-wallet-web/commit/641fdad1d135602b732813da69a2cac220137076))


### Bug Fixes

* btc choose account drawer ([0fdd0a4](https://github.com/hirosystems/stacks-wallet-web/commit/0fdd0a44253b367a7ff183230b5ca973e683d5a8))
* changed ordapi api, closes [#3358](https://github.com/hirosystems/stacks-wallet-web/issues/3358) ([2d495fc](https://github.com/hirosystems/stacks-wallet-web/commit/2d495fcc0383e3826e5c2c2360d2038b5eae0808))
* error wording, removed fallback, closes [#3342](https://github.com/hirosystems/stacks-wallet-web/issues/3342) ([f61dae7](https://github.com/hirosystems/stacks-wallet-web/commit/f61dae7ba33cafd38f8510084898c14d45c13e49))
* recipient address field naming ([44fab72](https://github.com/hirosystems/stacks-wallet-web/commit/44fab726c3bc379610ad5e706ac5640860a0b51f))
* recipient validation with bns field ([da22011](https://github.com/hirosystems/stacks-wallet-web/commit/da2201157f6d14b3a20e25fa27f930d8f9695ea7))


### Internal

* avoid bool flag in params ([95885a2](https://github.com/hirosystems/stacks-wallet-web/commit/95885a2b594a54cf00dde62c80926a4538758b8c))
* update copy ([8f9fd8f](https://github.com/hirosystems/stacks-wallet-web/commit/8f9fd8f741f5453cb53c98dc835e83e53d54711b))
* use helpers ([05a3022](https://github.com/hirosystems/stacks-wallet-web/commit/05a3022e09bce383509d295352c5c3125f4e4623))

## [4.4.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.3.0...v4.4.0) (2023-03-02)


### Features

* add arrow up down logic ([c4fc057](https://github.com/hirosystems/stacks-wallet-web/commit/c4fc057d7bd5e888133e45606193ea3c59c6f479))
* add btc tx icon ([f23b762](https://github.com/hirosystems/stacks-wallet-web/commit/f23b762cc26f68ca17f483c840f5da71e23b63c3))
* add copy to balance assets ([efe0816](https://github.com/hirosystems/stacks-wallet-web/commit/efe08167effb112dbde8ef8dd19ac5858e489182))
* add fiat amount in sending forms ([f98dcd2](https://github.com/hirosystems/stacks-wallet-web/commit/f98dcd21cd135f234e9e698c4e1a01f7c5f88da4))
* add tx status arrow icons ([fe4e2ff](https://github.com/hirosystems/stacks-wallet-web/commit/fe4e2ffacab748de7166e7af138078608121fbfa))
* enable sending inscriptions ([0ada40d](https://github.com/hirosystems/stacks-wallet-web/commit/0ada40d812cdbf80d0fa6d49897ce3426f280737))
* increase unused taproot address search range ([00ddf28](https://github.com/hirosystems/stacks-wallet-web/commit/00ddf28e608211e8664362736cb9590721aa7805))
* pass btc address via prop ([f92d3b2](https://github.com/hirosystems/stacks-wallet-web/commit/f92d3b2d3e6200665b759a9077f95486184fbcb1))
* remove ability to copy btc address ([96d3de9](https://github.com/hirosystems/stacks-wallet-web/commit/96d3de98e282d484d881b76677dd5bd3e63bdccd))
* remove copy stx from balance list ([0fe506d](https://github.com/hirosystems/stacks-wallet-web/commit/0fe506dba04a26cc6bd6c0508654f1ed007e1936))


### Bug Fixes

* failing send max test ([8872fc9](https://github.com/hirosystems/stacks-wallet-web/commit/8872fc9bb012f865f21b8381dfa4c374c2131056))
* left align text inscription text ([4abf395](https://github.com/hirosystems/stacks-wallet-web/commit/4abf395b9de8ea686459c4f9883e1aaf319b3b92))
* make inscriptions field not required ([3f91547](https://github.com/hirosystems/stacks-wallet-web/commit/3f915476072c0225b10afc6a6edb92446e642856))
* prevent multi utxo inscription spend ([79a59f6](https://github.com/hirosystems/stacks-wallet-web/commit/79a59f6f71f30aaffdc9ade1834481d8452bbb94))


### Internal

* add loading state ([0c6ded5](https://github.com/hirosystems/stacks-wallet-web/commit/0c6ded578b4ec64798ae42ae462182f20f562ff4))

## [4.3.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.2.0...v4.3.0) (2023-03-01)


### Features

* add password disable warning and check ([9ff59dd](https://github.com/hirosystems/stacks-wallet-web/commit/9ff59dd491012167b9987b70908123ee952986c2))
* add proper selector to password checkbox ([bdd5942](https://github.com/hirosystems/stacks-wallet-web/commit/bdd594204bf328c7a722fd569679b03a59a19c32))
* add total balance ([0dc04a5](https://github.com/hirosystems/stacks-wallet-web/commit/0dc04a59aac90be41283c40160aaadb5df56f3cf))
* collectibles loading indicator ([5a04260](https://github.com/hirosystems/stacks-wallet-web/commit/5a04260c983098430b83d0d584ff6a756c0f09f6))
* collectibles refresh button ([3c90c4a](https://github.com/hirosystems/stacks-wallet-web/commit/3c90c4a0df225a6afaaf27e0d6e994a234ed6740))
* display ordinal address before copying ([4991edf](https://github.com/hirosystems/stacks-wallet-web/commit/4991edfe85f23db43bdb6426b4ada2a32dd677f7))
* support for text inscriptions ([fa37772](https://github.com/hirosystems/stacks-wallet-web/commit/fa3777241bb2a93f28929c25a4fc89f8696bdf4d))
* support for text inscriptions ([606d8e7](https://github.com/hirosystems/stacks-wallet-web/commit/606d8e7816f8ede40ab47741f40a67f3351f9493))
* update manifest description ([7aa545a](https://github.com/hirosystems/stacks-wallet-web/commit/7aa545a776ac0d7330a0a01ba5a5d88d6904ef0d))


### Bug Fixes

* failing send max test ([e2d9e1f](https://github.com/hirosystems/stacks-wallet-web/commit/e2d9e1f97b648bcac08871e6b00a7a6af0858345))
* integration tests ([81e76dd](https://github.com/hirosystems/stacks-wallet-web/commit/81e76dd95fa8951154493774e19abc07c5f77d2d))
* ledger send stacks ft ([d7c8e1e](https://github.com/hirosystems/stacks-wallet-web/commit/d7c8e1edff82cf94eae2687609b1c77ba4fe0630))
* send form tests ([a879475](https://github.com/hirosystems/stacks-wallet-web/commit/a87947511b892ce9cd8dc9164a1eec1d5664f013))
* tx detail text ([480455f](https://github.com/hirosystems/stacks-wallet-web/commit/480455f17504e65d6fbd54e72abf49127fc73f78))


### Internal

* ord queries ([420592c](https://github.com/hirosystems/stacks-wallet-web/commit/420592cd1f4d4daca92c33d071304b49cb22c55e))

## [4.2.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.1.0...v4.2.0) (2023-02-27)


### Features

* add copy btn in account switching menu ([2399304](https://github.com/hirosystems/stacks-wallet-web/commit/2399304fef5e628c8e90986624dd8c766d15b546))
* add ordinals address to receive modal ([1fd1b4b](https://github.com/hirosystems/stacks-wallet-web/commit/1fd1b4bb695e14c2d3ee7004275a108764bca16a))
* add prefix ([1f8b20f](https://github.com/hirosystems/stacks-wallet-web/commit/1f8b20f6f0808c24da8d81485ea0dec5106043a3))
* make ordinals occupy entire space ([81e3634](https://github.com/hirosystems/stacks-wallet-web/commit/81e363485881507b6ca85090ec33f71bc183b9d8))
* return btc address during auth, closes [#2909](https://github.com/hirosystems/stacks-wallet-web/issues/2909), [#3092](https://github.com/hirosystems/stacks-wallet-web/issues/3092) ([bac34f5](https://github.com/hirosystems/stacks-wallet-web/commit/bac34f5d87e052474a96d57ffa885af46d1c6468))


### Bug Fixes

* asset page routing ([ddea6f2](https://github.com/hirosystems/stacks-wallet-web/commit/ddea6f2b274d5c675a0667e697f1953f99c64044))
* bad derivation ([34b4016](https://github.com/hirosystems/stacks-wallet-web/commit/34b4016191839efb13aba5807927144c9058d68b))
* btc recipient form validation ([95d110f](https://github.com/hirosystems/stacks-wallet-web/commit/95d110f1dccaf6b089a1e39e17ac19f0dcdbb3af))
* collectibles map key errors ([58c053a](https://github.com/hirosystems/stacks-wallet-web/commit/58c053a9efaeb552bf589035a6ffb759a447253b))
* collectibles on ledger ([3bdb4c5](https://github.com/hirosystems/stacks-wallet-web/commit/3bdb4c5fbd7c68fa05db12d2fd64970ad2dacc70))
* receive modal console error ([66c1b3a](https://github.com/hirosystems/stacks-wallet-web/commit/66c1b3a938d0b9b077a75354298884b4eadebafd))
* support form restore for non-btc currencies, clear on exit ([48430e8](https://github.com/hirosystems/stacks-wallet-web/commit/48430e83f61d2c298eaf644951f4a71abdb4a96d))


### Internal

* change copy ([ba5a9c7](https://github.com/hirosystems/stacks-wallet-web/commit/ba5a9c7a35dc09fdb01c240ebf7b8fab97a74096))
* error when missing dep ([1aafea2](https://github.com/hirosystems/stacks-wallet-web/commit/1aafea20b6f48db366fc858a76998e66c129ac75))
* improve ordinals query ([b9bfca3](https://github.com/hirosystems/stacks-wallet-web/commit/b9bfca3ac43e4aa32077fe53504798e713afea91))
* next steps copy ([9397bbe](https://github.com/hirosystems/stacks-wallet-web/commit/9397bbea15b9902b441867eb281e8096753b6bb1))
* remove fund step from onboarding ([77f69e1](https://github.com/hirosystems/stacks-wallet-web/commit/77f69e1d4f3bd5c5f6c1642a55059a7604e7e431))
* single header instance ([8d50ef5](https://github.com/hirosystems/stacks-wallet-web/commit/8d50ef52bab18967ef231713b771171238e6cce0))
* track input/output lengths, helpful for analysing fees ([f948cdc](https://github.com/hirosystems/stacks-wallet-web/commit/f948cdc4c218f77d0328abf9c4c7749e247350b1))

## [4.1.0](https://github.com/hirosystems/stacks-wallet-web/compare/v4.0.2...v4.1.0) (2023-02-22)


### Features

* add outline ([e1aa1b3](https://github.com/hirosystems/stacks-wallet-web/commit/e1aa1b3cf98b5b3a2570be388730121f80e6b2e3))
* metadata api working and refactor collectibles ([c2ceef2](https://github.com/hirosystems/stacks-wallet-web/commit/c2ceef29f6d56b54f459f4c42583ff9041e2d7a7))
* persist popup mode state ([74916be](https://github.com/hirosystems/stacks-wallet-web/commit/74916be564a650a458ec80f7eea435fa5480d155))
* stacks nft collectibles ([4f5ba2b](https://github.com/hirosystems/stacks-wallet-web/commit/4f5ba2b155c6f9bfb91f1d36ed94310ef5ad6035))


### Bug Fixes

* gamma route and add analytics ([4c00edc](https://github.com/hirosystems/stacks-wallet-web/commit/4c00edc632dc36064a42fec7c41e2346239ade6c))
* tabIndex error, recreating html behaviour in js ([813c989](https://github.com/hirosystems/stacks-wallet-web/commit/813c989c4d34ebd58a23df8f652846d5a6ec1c95))
* text alignment ([dc334a7](https://github.com/hirosystems/stacks-wallet-web/commit/dc334a745f3021d4e61796d8f19c6725b79e6310))


### Internal

* add wallet config btc msg ([8eefab6](https://github.com/hirosystems/stacks-wallet-web/commit/8eefab6d460b71aefc1519e455c555b391e8cdf8))
* **analytics:** capture broadcast transaction token ([5942a54](https://github.com/hirosystems/stacks-wallet-web/commit/5942a54a8ffe5cd10dbb74767e2039ccb49480f5))
* getting started copy ([0a89e89](https://github.com/hirosystems/stacks-wallet-web/commit/0a89e891d6da31d6fe9dd975e08a198c00286e2e))
* persist in background mem ([bf76969](https://github.com/hirosystems/stacks-wallet-web/commit/bf7696958a5bf144d62e166427f6458c68c4410a))

## [4.0.2](https://github.com/hirosystems/stacks-wallet-web/compare/v4.0.1...v4.0.2) (2023-02-20)


### Bug Fixes

* ordinal caching ([641c3b2](https://github.com/hirosystems/stacks-wallet-web/commit/641c3b2a94295137d04b6b66ef9100b896667253))


### Internal

* move query file location ([c36fb1c](https://github.com/hirosystems/stacks-wallet-web/commit/c36fb1c21dc0c18e94f08d88c4de9c9aae9d37f5))
* ordinal modal ([44ee0db](https://github.com/hirosystems/stacks-wallet-web/commit/44ee0db2798ad64a3974310131b4788bb9d548f7))

## [4.0.1](https://github.com/hirosystems/stacks-wallet-web/compare/v4.0.0...v4.0.1) (2023-02-20)


### Internal

* ordinal modal ([a1e937a](https://github.com/hirosystems/stacks-wallet-web/commit/a1e937a058da988cf35ef0653b681a6e8ecf9cda))

## [4.0.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.34.2...v4.0.0) (2023-02-20)


### ⚠ BREAKING CHANGES

* This release introduces bitcoin support to the Hiro Wallet

### Features

* add autofocus on custom fees input ([55b10a0](https://github.com/hirosystems/stacks-wallet-web/commit/55b10a075cf1cd7b20c70edc780e8b3d0289a08a))
* add error page ([6c9beb4](https://github.com/hirosystems/stacks-wallet-web/commit/6c9beb44035749022cc0dfe1a8cd3634b3ae248e))
* add new tab menu item in narrow viewport ([d80a766](https://github.com/hirosystems/stacks-wallet-web/commit/d80a7669cbfc86347f7e47350fdaaa6302301797))
* add ordinal support ([ea972aa](https://github.com/hirosystems/stacks-wallet-web/commit/ea972aa2e994d94dc311bb3c013295f4098efe62))
* add taproot keychain ([ba07bd1](https://github.com/hirosystems/stacks-wallet-web/commit/ba07bd14392da0d90193abf719769a92938b2b96))
* display ordinals ([abf428b](https://github.com/hirosystems/stacks-wallet-web/commit/abf428b32e8f0104ad75167ab09435734a4fb76c))
* make address clickable to copy ([cf70d81](https://github.com/hirosystems/stacks-wallet-web/commit/cf70d81491ea4d1e7b53fd89c37bc683f09502ec))
* minimum spend validator to btc ([6bf331b](https://github.com/hirosystems/stacks-wallet-web/commit/6bf331b465241ec7c667412236071b7f84d2b4d7))
* modify user messages feature, closes [#3094](https://github.com/hirosystems/stacks-wallet-web/issues/3094) ([299f182](https://github.com/hirosystems/stacks-wallet-web/commit/299f1822f17d50f5c7900c41762e0d32f63be445))
* remove successful sign in toast ([3aaf4e6](https://github.com/hirosystems/stacks-wallet-web/commit/3aaf4e6d66b660a546dd83655b47b3fc0bb9940c))
* send btc disabled kill switch ([85961e7](https://github.com/hirosystems/stacks-wallet-web/commit/85961e7598c893e6244a93458b49a71fb13b0664))
* ui improvement ([6c08582](https://github.com/hirosystems/stacks-wallet-web/commit/6c085829461917b8d8550e9558b50ac86f60d868))
* validate insufficient funds ([e41b908](https://github.com/hirosystems/stacks-wallet-web/commit/e41b908d28a9e1770bac9e8eae1d9f884dac908e))
* wallet config bitcoin feature flag ([fc83541](https://github.com/hirosystems/stacks-wallet-web/commit/fc835414d60c93676d581b312b342790c9dc10bb))


### Bug Fixes

* add bitcoin activity to account restore flow ([9e53c3c](https://github.com/hirosystems/stacks-wallet-web/commit/9e53c3cc836a448ca841b939672dac20f4fe6d84))
* add wait to btc test ([312895f](https://github.com/hirosystems/stacks-wallet-web/commit/312895f018013cefccedcd44f37e16e7e3792441))
* address label ([6072214](https://github.com/hirosystems/stacks-wallet-web/commit/607221445e301314ef43861fdc137d6bd8690c73))
* avoid working outside of formik, dedupe is valid logic, closes [#3117](https://github.com/hirosystems/stacks-wallet-web/issues/3117) ([cb02514](https://github.com/hirosystems/stacks-wallet-web/commit/cb02514a6ce84e55749cbf098045103ce6e795e4))
* codeBlock component width in contract deploy flow ([dab711e](https://github.com/hirosystems/stacks-wallet-web/commit/dab711ed0ccc8277b49f127bfd7a3b48cd348f63))
* copy account address ([f558508](https://github.com/hirosystems/stacks-wallet-web/commit/f5585081a7f5564ff8734bcfba44debdadb0da47))
* form errors on blur ([2fd28fd](https://github.com/hirosystems/stacks-wallet-web/commit/2fd28fd970522c2e13d53bc6f8385a9f7e7962dc))
* improve empty address detection ([9c4ffdd](https://github.com/hirosystems/stacks-wallet-web/commit/9c4ffddee2e13351791f4e67a87cc8e3dc2c6531))
* lower fetch time ([72317f1](https://github.com/hirosystems/stacks-wallet-web/commit/72317f11ba07d8be295f6f056f664c2e9c77c249))
* merge conflicts from main ([d473bdc](https://github.com/hirosystems/stacks-wallet-web/commit/d473bdc4e93941446debbf31acd8d07f7ed74fac))
* negative amount err ([2126eaf](https://github.com/hirosystems/stacks-wallet-web/commit/2126eaf105b37eb2c024aad82a8b4e0b97b9a237))
* persist amount/recipient going to from send form ([8fedf52](https://github.com/hirosystems/stacks-wallet-web/commit/8fedf529f77e887ce4a96e5691e1d43fd8c6a59e))
* preview button disabling ([fd76fae](https://github.com/hirosystems/stacks-wallet-web/commit/fd76fae3ed450e3992d9df031affbde84b935868))
* prod btc address from fund page receive ([84d1e1b](https://github.com/hirosystems/stacks-wallet-web/commit/84d1e1b145117e46deb1c357d0bbb3f3dbcd50da))
* remove empty state, closes [#3206](https://github.com/hirosystems/stacks-wallet-web/issues/3206) ([921a25e](https://github.com/hirosystems/stacks-wallet-web/commit/921a25e6ba61eb13d4f81aed23de019193d3550b))
* set system theme ([2885269](https://github.com/hirosystems/stacks-wallet-web/commit/28852695fd5b018778b9a884cd568ccc1fb9c5e5))
* temp hide btc send all ([f513e09](https://github.com/hirosystems/stacks-wallet-web/commit/f513e097f962c522e9bceeba39e2d964dfc93120))
* tests ([98b12eb](https://github.com/hirosystems/stacks-wallet-web/commit/98b12ebdb5c02be51fddd20641df21e9bd65ab40))
* transaction duplication ([4421099](https://github.com/hirosystems/stacks-wallet-web/commit/44210991e441a35716b349af0c712d078c6e4b8d))
* typecheck failure in ordinals query ([09a8697](https://github.com/hirosystems/stacks-wallet-web/commit/09a86970e5f41f651d055214d8ac85e9dca76ede))
* uninvert imgs, closes [#3208](https://github.com/hirosystems/stacks-wallet-web/issues/3208) ([65afa4e](https://github.com/hirosystems/stacks-wallet-web/commit/65afa4e6ed3883878cf5ca83c5ac80f69a01b118))
* validate addresses against network, closes [#3161](https://github.com/hirosystems/stacks-wallet-web/issues/3161) ([83664da](https://github.com/hirosystems/stacks-wallet-web/commit/83664daaf5720bec81649d0be932801f8fb07542))


### Internal

* add config changes to dev ([0ca785b](https://github.com/hirosystems/stacks-wallet-web/commit/0ca785bc9442c89ae6d46bf4bae06261281b44de))
* add send container to full page ([d4a5ded](https://github.com/hirosystems/stacks-wallet-web/commit/d4a5ded980f804220307de89909ac3f636ed4754))
* facade hook for form, reorg validators ([4e6a523](https://github.com/hirosystems/stacks-wallet-web/commit/4e6a523427d39fb7b62969d634f6e7fdc0edaeaf))
* fix import, unwrap fns ([ce914ac](https://github.com/hirosystems/stacks-wallet-web/commit/ce914ac9220497ac982ace638512ec16334a6ce3))
* fix tests ([7a56a1e](https://github.com/hirosystems/stacks-wallet-web/commit/7a56a1e8068a1bca7b95ad9a16faae4edd323639))
* form routing ([fc5996b](https://github.com/hirosystems/stacks-wallet-web/commit/fc5996bf981a32d695669fecb4d83fc299edc8c7))
* improve logic to calculate bitcoin fee ([c8099e9](https://github.com/hirosystems/stacks-wallet-web/commit/c8099e99e6445032bf76797c2204a531e2acf356))
* kill old send form and tests ([3847d7e](https://github.com/hirosystems/stacks-wallet-web/commit/3847d7e4e3970002d231fd5e82a2965cf2d09cdd))
* remove bitcoin msg ([cde1661](https://github.com/hirosystems/stacks-wallet-web/commit/cde1661d0d96d9f2762603bbf7fd8ab3b1184d01))
* send max and add available balance ([2055e9c](https://github.com/hirosystems/stacks-wallet-web/commit/2055e9c0df884544fc82824a3047d27fdceaf67f))
* settings menu open in new tab ([6d266d4](https://github.com/hirosystems/stacks-wallet-web/commit/6d266d4dfaad6bda532b4a0920eb8be09e16804a))
* upgrade crypto deps ([048b3e4](https://github.com/hirosystems/stacks-wallet-web/commit/048b3e4a9c22aa4ce17b01e1fcd88a1b5a98e4d2))

## [3.34.2](https://github.com/hirosystems/stacks-wallet-web/compare/v3.34.1...v3.34.2) (2023-02-16)


### Bug Fixes

* prod btc address from fund page receive ([ca01c28](https://github.com/hirosystems/stacks-wallet-web/commit/ca01c280ef70d2c52d056a6d40e23141e683bac1))


### Internal

* remove logs ([4091543](https://github.com/hirosystems/stacks-wallet-web/commit/4091543b8088949eb33add3e88b5674cf6d3bd97))

## [3.34.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.34.0...v3.34.1) (2023-02-15)


### Bug Fixes

* add btc address to account header ([4c1616d](https://github.com/hirosystems/stacks-wallet-web/commit/4c1616d4b745290c46a36394c331b1b8f669446b))
* disable bitcoin for ledger ([f2e8005](https://github.com/hirosystems/stacks-wallet-web/commit/f2e8005eb15fefdf5fe85b7be8e77b9dfb652d3a))
* null char in memo field ([ff56e76](https://github.com/hirosystems/stacks-wallet-web/commit/ff56e7612f6bc3d83df15c37b4ee709c63a79750))
* recipient choose account ([174ee8e](https://github.com/hirosystems/stacks-wallet-web/commit/174ee8ea3d245d80ab1d0eb0c1eaabf4ae6fa0c9))
* tooltip hiding after click ([e53add6](https://github.com/hirosystems/stacks-wallet-web/commit/e53add65133d3c82b48f894387a5f1978a1b6a17))

## [3.34.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.33.1...v3.34.0) (2023-02-14)


### Features

* add bitcoin feature to wallet config ([73bb4e3](https://github.com/hirosystems/stacks-wallet-web/commit/73bb4e3f64a6131a2408b4e3014eb3932e0b0145))
* send bitcoin tx ([1b29f88](https://github.com/hirosystems/stacks-wallet-web/commit/1b29f88d05500b15f51d2a942ff591d2b663bbef))


### Bug Fixes

* branch name env variable ([afad562](https://github.com/hirosystems/stacks-wallet-web/commit/afad56246612ff4bc16074b8e75d27668b115126))
* kill gaia update on create account ([1c7fc13](https://github.com/hirosystems/stacks-wallet-web/commit/1c7fc13ca839d8f25fe49e6c31568e71905c48cd))
* send all with pending txs ([41ec042](https://github.com/hirosystems/stacks-wallet-web/commit/41ec0420f025be32c54620dc5a646291b08dd208))
* send form amount ([1a533cc](https://github.com/hirosystems/stacks-wallet-web/commit/1a533cc60f6965b71c42b9b105224e1a57854be4))


### Internal

* remove localStorage wallet config ([2271968](https://github.com/hirosystems/stacks-wallet-web/commit/2271968cae8d46e07a6b20f031e910c1d27ed097))
* rushed changes for testnet support ([06a8cb4](https://github.com/hirosystems/stacks-wallet-web/commit/06a8cb4dcdbd88d70af14cc78f43ea1ad8b15014))
* store structure ([9dc1b27](https://github.com/hirosystems/stacks-wallet-web/commit/9dc1b270561f2b01b5d8a45f98b7a7ff75c0b183))

## [3.33.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.33.0...v3.33.1) (2023-02-09)


### Bug Fixes

* remove localstorage data when migrated ([7da7c21](https://github.com/hirosystems/stacks-wallet-web/commit/7da7c21c3d46f6ff16bc3a3e6de9e029130998c1))
* send form bugs ([c965bc2](https://github.com/hirosystems/stacks-wallet-web/commit/c965bc20b1a677cf12c72e5e15ee8ba69a9971b5))

## [3.33.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.32.5...v3.33.0) (2023-02-07)


### Features

* add request feature to setting menu ([427ad10](https://github.com/hirosystems/stacks-wallet-web/commit/427ad1050e84b2ea6945dd1186dda195db9e1efd))
* fetch BNSx names on mainnet ([8c573f2](https://github.com/hirosystems/stacks-wallet-web/commit/8c573f25b6e3c657cd4a4f8f5d0a0258809f7560))
* new send form tests ([15da6b8](https://github.com/hirosystems/stacks-wallet-web/commit/15da6b8656ec5f78e8f9005d34d6e272dca35ec4))


### Internal

* create reusable flag layout component ([cb4e47d](https://github.com/hirosystems/stacks-wallet-web/commit/cb4e47ddff1521b66022b828c0fda26a513fa6a8))

## [3.32.5](https://github.com/hirosystems/stacks-wallet-web/compare/v3.32.4...v3.32.5) (2023-02-07)


### Bug Fixes

* case where current account index higher than highest ([73cf157](https://github.com/hirosystems/stacks-wallet-web/commit/73cf157071b5f5c56fd74730dd5a68c8ba545f8e))

## [3.32.4](https://github.com/hirosystems/stacks-wallet-web/compare/v3.32.3...v3.32.4) (2023-02-06)


### Bug Fixes

* delayed home loading ([7844bec](https://github.com/hirosystems/stacks-wallet-web/commit/7844bec132818d69121cb17125a2f1132b0c8183))


### Internal

* upgrade deps ([d00b798](https://github.com/hirosystems/stacks-wallet-web/commit/d00b7985b7bf9bf21f0192ce058cc04f3ec9d653))

## [3.32.3](https://github.com/hirosystems/stacks-wallet-web/compare/v3.32.2...v3.32.3) (2023-02-03)

## [3.32.2](https://github.com/hirosystems/stacks-wallet-web/compare/v3.32.1...v3.32.2) (2023-02-01)


### Bug Fixes

* convert Icon to named fn ([f02a242](https://github.com/hirosystems/stacks-wallet-web/commit/f02a242e4133822b8ef4e60b9fabfa753aa21339))

## [3.32.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.32.0...v3.32.1) (2023-02-01)


### Bug Fixes

* chore commits to release ([4e5621d](https://github.com/hirosystems/stacks-wallet-web/commit/4e5621dce3938e3c51a7366682a265551cc98964))
* convert to named fn ([9d770ed](https://github.com/hirosystems/stacks-wallet-web/commit/9d770ed575c3de01df00051737160861c22c71f8))


### Internal

* don't publish chore packages ([8bc53d9](https://github.com/hirosystems/stacks-wallet-web/commit/8bc53d92f6193403e9c6dc65534eedff61a9c80d))
* package updates ([340fcde](https://github.com/hirosystems/stacks-wallet-web/commit/340fcde357043013bd369a7aacc9acb813a5c6f1))

## [3.32.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.31.1...v3.32.0) (2023-01-31)


### Features

* send all with font resizing ([5073378](https://github.com/hirosystems/stacks-wallet-web/commit/50733788fd35d0ffeb990da287e13645d1738dfe))
* update new recipient field ([251cd27](https://github.com/hirosystems/stacks-wallet-web/commit/251cd27230814b135843ad8d9e2c0f08730b65e6))


### Internal

* account restore logic ([d688d8f](https://github.com/hirosystems/stacks-wallet-web/commit/d688d8f7cf00e19fcd490a388e45eed40acb6cbb))
* add debug fn to help account index issue ([208a9ac](https://github.com/hirosystems/stacks-wallet-web/commit/208a9ac8ab6a76f81e6731846d3da7ab1121d8ea))
* add debug tool ([b1408fd](https://github.com/hirosystems/stacks-wallet-web/commit/b1408fd8f7625fd2bded49f4dee1a28c9720d63c))
* amount field auto scaling ([fe1c804](https://github.com/hirosystems/stacks-wallet-web/commit/fe1c80462cbbd8956776c640d1e24ccf2776c471))
* avoid millions of bns lookups, check config directly ([259b524](https://github.com/hirosystems/stacks-wallet-web/commit/259b5242171fbb7e9b6305ba318e48787bd45ad6))
* make error currency agnostic ([c9652bb](https://github.com/hirosystems/stacks-wallet-web/commit/c9652bbbf7305cdd65c044a786d0f30e381f5fc8))

## [3.31.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.31.0...v3.31.1) (2023-01-25)


### Internal

* derive accounts without gaia operation ([e5d726c](https://github.com/hirosystems/stacks-wallet-web/commit/e5d726c3585ec895c03d2bb88cbf94ecb89c36fc))
* upgrade jotai ([6203f9b](https://github.com/hirosystems/stacks-wallet-web/commit/6203f9bad06ffe0d5036132aca97534c977eb8a1))

## [3.31.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.30.0...v3.31.0) (2023-01-24)


### Features

* misc sentry improvements ([5ea0119](https://github.com/hirosystems/stacks-wallet-web/commit/5ea01195d25e12038d235e4820130c88897664c6))
* send form confirmation ([12e4de4](https://github.com/hirosystems/stacks-wallet-web/commit/12e4de40661c8b1c5ee405d3ac0442ab0a198fa4))


### Bug Fixes

* **analytics:** track switching account, closes [#2994](https://github.com/hirosystems/stacks-wallet-web/issues/2994) ([d5a2536](https://github.com/hirosystems/stacks-wallet-web/commit/d5a2536dacca6e527f99e3bd7e58d690ff7e87a2))
* dev source maps ([39a6f90](https://github.com/hirosystems/stacks-wallet-web/commit/39a6f903d53e0e10813ecf1bac33bddf123c13b2))
* emotion styles broken ([a92cd27](https://github.com/hirosystems/stacks-wallet-web/commit/a92cd276a66bd0f65122138364177664e6c6e0b8))
* emotion styles broken ([67f809c](https://github.com/hirosystems/stacks-wallet-web/commit/67f809cd004cc00cca05a834dd92864f1f0021fd))
* ext icon tooltip, closes [#2967](https://github.com/hirosystems/stacks-wallet-web/issues/2967) ([dd3b240](https://github.com/hirosystems/stacks-wallet-web/commit/dd3b240745b3da6c1cc6f64260f1d3e83f8a1644))
* **packaging:** prevent unresolvable sourcemap logs, closes [#2964](https://github.com/hirosystems/stacks-wallet-web/issues/2964) ([c886e4d](https://github.com/hirosystems/stacks-wallet-web/commit/c886e4dd17c9e514ccf9ca9d4a67a445290649bb))
* pending tx nonce ([a60cb6f](https://github.com/hirosystems/stacks-wallet-web/commit/a60cb6fcc8755587cbf124893b07e5ce34f9023b))
* prevent onboarding when wallet exists, closes [#2997](https://github.com/hirosystems/stacks-wallet-web/issues/2997) ([2ef4bd9](https://github.com/hirosystems/stacks-wallet-web/commit/2ef4bd9a69042649e8abc79005f0eb02a7b70d56))
* **sentry:** remove some transaction logs ([bea316a](https://github.com/hirosystems/stacks-wallet-web/commit/bea316a466ad1b55d7cae1a15948c2be710b46e9))
* track sentry releases, source maps, closes [#2915](https://github.com/hirosystems/stacks-wallet-web/issues/2915), [#2914](https://github.com/hirosystems/stacks-wallet-web/issues/2914) ([febde6a](https://github.com/hirosystems/stacks-wallet-web/commit/febde6a3a39d92b93776745fdc9cea7b637622fb))
* unit tests ([281736d](https://github.com/hirosystems/stacks-wallet-web/commit/281736d45b9bd7099b2da4c6d1508ca7aad5a1dd))


### Internal

* add hasStx property to switch account event ([efbf87e](https://github.com/hirosystems/stacks-wallet-web/commit/efbf87e6f500e616243158a9336a9c7eb8e501ea))
* alt implementation, query cache ([a7dc71b](https://github.com/hirosystems/stacks-wallet-web/commit/a7dc71bb7ce797bdd102a90073cae69a1bdbe51f))
* attempt removing babel ([0cdedb1](https://github.com/hirosystems/stacks-wallet-web/commit/0cdedb1dcc8537e1f18feb5145598172b1d6d814))
* batch update deps ([aa72dd7](https://github.com/hirosystems/stacks-wallet-web/commit/aa72dd770dedb736d2ff3b1cc133d5ff13f916c6))
* fix failed merge ([669f8a4](https://github.com/hirosystems/stacks-wallet-web/commit/669f8a41e95b08b075df6c1897163488342f50cb))
* fix failed merge 2 ([7dead89](https://github.com/hirosystems/stacks-wallet-web/commit/7dead898fad7ac1dd9bc934bd97a35492d3b4ee8))
* fix failed merge yarn lock ([d3eafec](https://github.com/hirosystems/stacks-wallet-web/commit/d3eafecffa2bda748a9be0595efa3f1e82ae013a))
* fix failed merge yarnlock ([b5e60a8](https://github.com/hirosystems/stacks-wallet-web/commit/b5e60a8c114cb7b42e30f028b6f9c49d0b62ca11))
* form validation ([cc6ec1a](https://github.com/hirosystems/stacks-wallet-web/commit/cc6ec1ad9c529e670470290b897010c11a4432a9))
* new send form file structure ([58c564e](https://github.com/hirosystems/stacks-wallet-web/commit/58c564ef693fb522b765dad95880a291b53fb1fa))
* remove coreApiUrl getter ([001dad3](https://github.com/hirosystems/stacks-wallet-web/commit/001dad382a965859e326a05a152f98217eaac60d))
* rename specify stx specific atoms ([c61dc9f](https://github.com/hirosystems/stacks-wallet-web/commit/c61dc9f7c63e0814b83db9e28d21e29f07caa17b))
* test removing all resolutions ([3790e69](https://github.com/hirosystems/stacks-wallet-web/commit/3790e694ed7e34b34dcac02bad03d4e3ee4cec1b))
* upgrade @redux/toolkit ([5b3e8c0](https://github.com/hirosystems/stacks-wallet-web/commit/5b3e8c0a3895d164768b6b5f81218e5c59a5aabb))
* upgrade misc. packages ([0f65e56](https://github.com/hirosystems/stacks-wallet-web/commit/0f65e564634012d308c5e1a9b8b6208559cdbc50))

## [3.30.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.29.0...v3.30.0) (2023-01-10)


### Features

* misc sentry improvements ([9cc0507](https://github.com/hirosystems/stacks-wallet-web/commit/9cc0507520bec87e4063c94c8c957d215ee44997))


### Bug Fixes

* dev source maps ([b73b63a](https://github.com/hirosystems/stacks-wallet-web/commit/b73b63a5ed7746993a37c6430801a344e2e7adcc))
* emotion styles broken ([22c97c4](https://github.com/hirosystems/stacks-wallet-web/commit/22c97c49fa00875e6fc0e7687df4d1e8697f5605))
* emotion styles broken ([aa24db4](https://github.com/hirosystems/stacks-wallet-web/commit/aa24db4900886eb95477e3eb1f3ec8e11c094943))
* pending tx nonce ([fbc73bc](https://github.com/hirosystems/stacks-wallet-web/commit/fbc73bc9749d0436a8195836a2e90228a1cb24b3))
* unit tests ([78e09d0](https://github.com/hirosystems/stacks-wallet-web/commit/78e09d0e4647849e8b04828a67e648dcd1de3395))


### Internal

* attempt removing babel ([f9deba9](https://github.com/hirosystems/stacks-wallet-web/commit/f9deba9afc2c6d42596ed6b246a974732eb0c332))
* form validation ([474d57b](https://github.com/hirosystems/stacks-wallet-web/commit/474d57b29b2e4da8c3534765d9ba05a6b126b717))
* new send form file structure ([d544a3f](https://github.com/hirosystems/stacks-wallet-web/commit/d544a3f665df41710829f201c0564e5831b34ee3))

## [3.29.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.28.0...v3.29.0) (2022-12-19)


### Features

* add support for update-profile request ([17e624d](https://github.com/hirosystems/stacks-wallet-web/commit/17e624d54cdb6951b50ceb521b5bf7a3b7700167))


### Bug Fixes

* send max, closes [#2922](https://github.com/hirosystems/stacks-wallet-web/issues/2922) ([7942615](https://github.com/hirosystems/stacks-wallet-web/commit/7942615d6c32846cfd0982f11685b579515c8eab))


### Internal

* edit nonce ([34084b9](https://github.com/hirosystems/stacks-wallet-web/commit/34084b9f5f185c724bc59c5c8ee6142c6babb69b))

## [3.28.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.27.0...v3.28.0) (2022-12-13)


### Features

* **ledger:** support sip18, closes [#2827](https://github.com/hirosystems/stacks-wallet-web/issues/2827) ([6f32662](https://github.com/hirosystems/stacks-wallet-web/commit/6f32662361c183655a50a53f702c856b5579af1f))


### Bug Fixes

* add hiro api-wide rate limiting ([d3c06ba](https://github.com/hirosystems/stacks-wallet-web/commit/d3c06badbd59605f653e6810cf669a6c6899f4b2))
* bad error catching, closes [#2931](https://github.com/hirosystems/stacks-wallet-web/issues/2931) ([43daf15](https://github.com/hirosystems/stacks-wallet-web/commit/43daf15b04ec35f5f7fd62e306df8d2653368767))
* increase test delay for flaky test ([64fdb5a](https://github.com/hirosystems/stacks-wallet-web/commit/64fdb5af4745d23ca9985b7d49416a4a3cee737d))
* remove suspense ([e2b2c24](https://github.com/hirosystems/stacks-wallet-web/commit/e2b2c245c9a1364cdb2ee107e160ad287b6b2b68))


### Internal

* fees component for bitcoin ([b2661ee](https://github.com/hirosystems/stacks-wallet-web/commit/b2661eeb4bb9fa7cb9419432f9823cf98d57323c))
* improve when fn types ([694c607](https://github.com/hirosystems/stacks-wallet-web/commit/694c60711b3f8245a09966f7653f758572aa17cf))
* message signature feature ([9ed7d71](https://github.com/hirosystems/stacks-wallet-web/commit/9ed7d71854ff847185a0f12c68aae819af3b3c63))
* remove leftover comment ([7eaffbd](https://github.com/hirosystems/stacks-wallet-web/commit/7eaffbd1639d06d7d416ff1d9b4abcfe3789e410))
* remove sha.js in favour of nobel hashes ([b032deb](https://github.com/hirosystems/stacks-wallet-web/commit/b032debbcde50a2312c830c821acd05636543f05))
* use ratelimiter built-in time syntax ([da56375](https://github.com/hirosystems/stacks-wallet-web/commit/da563759ff25d7614d082e5e9d8eb219e0608a68))

## [3.27.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.26.0...v3.27.0) (2022-12-05)


### Features

* add get help menu item, closes [#2823](https://github.com/hirosystems/stacks-wallet-web/issues/2823) ([6e13f4c](https://github.com/hirosystems/stacks-wallet-web/commit/6e13f4c22a2e81c6d46c9e8b3584fb82696a88e9))
* add option to easily transfer within same wallet ([f1b6ac6](https://github.com/hirosystems/stacks-wallet-web/commit/f1b6ac67cae96819ec1e6c377975d7771f3be85a))
* allow tracking app initiating wallet flow, closes [#2904](https://github.com/hirosystems/stacks-wallet-web/issues/2904) ([d533d43](https://github.com/hirosystems/stacks-wallet-web/commit/d533d43057652cc2d926f886cbf1f5eb9dc1a27f))
* bitcoin fees query ([9451f89](https://github.com/hirosystems/stacks-wallet-web/commit/9451f89461234e61ccf220e3f4bb3a7c1e217e87))


### Bug Fixes

* close other frames when wallet locks ([8788e01](https://github.com/hirosystems/stacks-wallet-web/commit/8788e010b9504f1cfa5c8f2c619af19da240dbc8))
* re-enable sentry, closes 2822 ([23776d4](https://github.com/hirosystems/stacks-wallet-web/commit/23776d43b316152ed17e8bc0d5eac220da359cc4))
* use existing data-testid values ([5194c20](https://github.com/hirosystems/stacks-wallet-web/commit/5194c20dc9084acfc655e532978b9a9ee7105a16))


### Internal

* add window.open lint rule ([0ed015b](https://github.com/hirosystems/stacks-wallet-web/commit/0ed015bee8d1b39c3564136d9c9488468ad55585))
* reading search params outside react ([4e8d3dd](https://github.com/hirosystems/stacks-wallet-web/commit/4e8d3ddbc7f7adc6444ce7a16f787ecd89e86d46))
* use type assertion ([1ac3fba](https://github.com/hirosystems/stacks-wallet-web/commit/1ac3fbad7bea0214a09182cbfa2bc6e4d1341a7d))

## [3.26.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.25.0...v3.26.0) (2022-11-24)


### Features

* send form amount field ([ab3a10a](https://github.com/hirosystems/stacks-wallet-web/commit/ab3a10a5c69def2b4c3c56c048bfdaaa9098cff5))
* send form details ([b6a54bb](https://github.com/hirosystems/stacks-wallet-web/commit/b6a54bb0ef82a737e7681983a3975b9296b4b0bc))
* support bns recipients, closes [#1840](https://github.com/hirosystems/stacks-wallet-web/issues/1840) ([55bf5ef](https://github.com/hirosystems/stacks-wallet-web/commit/55bf5ef0459b2bfc38a4231115c33e53f05ee0d4))


### Bug Fixes

* amount input in extension ([9b31782](https://github.com/hirosystems/stacks-wallet-web/commit/9b31782a5b2263519853204e8eb46914eda74c7f))
* **balances:** query correct balance, show microblock balance, closes [#2898](https://github.com/hirosystems/stacks-wallet-web/issues/2898) ([da58732](https://github.com/hirosystems/stacks-wallet-web/commit/da58732c087d5d65852aeff3e1d67f9000c00d7e))
* missing address chars, closes [#2860](https://github.com/hirosystems/stacks-wallet-web/issues/2860) ([95bee55](https://github.com/hirosystems/stacks-wallet-web/commit/95bee55811093ab22bc7c187ff97128f2cfb943f))
* theme analytics, closes [#2799](https://github.com/hirosystems/stacks-wallet-web/issues/2799) ([8c85177](https://github.com/hirosystems/stacks-wallet-web/commit/8c851777009cd326c983ad44f0c0464c714cd88f))
* typo ([f5f68f3](https://github.com/hirosystems/stacks-wallet-web/commit/f5f68f3e767d7a89725e73f020e1866272b7efe6))


### Internal

* add error handling to form ([fb19774](https://github.com/hirosystems/stacks-wallet-web/commit/fb19774740d3e42d4f88aff0b5331547b22b05a1))
* base forms for all currencies ([3eec893](https://github.com/hirosystems/stacks-wallet-web/commit/3eec8938d204263319af7979f18fff70355972c2))
* be explicit about address, allow reuse for non-current account ([153b961](https://github.com/hirosystems/stacks-wallet-web/commit/153b9611a8e55fbb07bcc1c49243e51e7d4379fc))
* form field error styles ([7ebe8c9](https://github.com/hirosystems/stacks-wallet-web/commit/7ebe8c9ffa1992b46e2e70741cf7366b5d36a00d))
* home page with facade pattern ([c1bbd29](https://github.com/hirosystems/stacks-wallet-web/commit/c1bbd299e4b0d5bcce9e81bdd41552abd7a7392f))
* improve errors, add focus state ([0d193af](https://github.com/hirosystems/stacks-wallet-web/commit/0d193aff8db47a836f191f28fb7ad67ea0c2493f))
* init new integration tests ([5de2613](https://github.com/hirosystems/stacks-wallet-web/commit/5de2613315d4dccbc94281a3f4041fc839743a5e))
* initial test forms ([601c4a8](https://github.com/hirosystems/stacks-wallet-web/commit/601c4a88741ac1584d8efb1c773b77aa7237039e))
* initial value helper, inline error ([15fe88d](https://github.com/hirosystems/stacks-wallet-web/commit/15fe88da412580be23ea6ac3e282c6e088374104))
* react query pattern, form routes ([7860ee9](https://github.com/hirosystems/stacks-wallet-web/commit/7860ee9aa5eee970a192c39d2ef231c8a6be6367))
* remove coupling of balances types, subBalance ([de94f2c](https://github.com/hirosystems/stacks-wallet-web/commit/de94f2cc55b3ca459539cddb268f8072deac2bf6))
* remove okcoin ([b34e214](https://github.com/hirosystems/stacks-wallet-web/commit/b34e2143b0c24c8a1e45a03bedc6b094a0cb9f15))
* remove unused suspense ([8369e32](https://github.com/hirosystems/stacks-wallet-web/commit/8369e328a2a9eb14f05ba3e165359c49003f582f))
* rename existing tests as legacy ([7b97265](https://github.com/hirosystems/stacks-wallet-web/commit/7b97265b440db2c0b730a3742d911a37ea80f816))
* rename original balance queries with stx naming ([1770e3d](https://github.com/hirosystems/stacks-wallet-web/commit/1770e3d215d09a1141a1a8e6dfbda550834cd2e3))
* semantic form elements ([6f9b123](https://github.com/hirosystems/stacks-wallet-web/commit/6f9b123cc967784e6d921d21e0d73089f02afb4b))
* tightens rules against orphan files ([950569a](https://github.com/hirosystems/stacks-wallet-web/commit/950569a3659f23e84021df5fe8f05b4e6e6217ce))
* use factory fn ([b43159a](https://github.com/hirosystems/stacks-wallet-web/commit/b43159a25729814cbffa0cba4debb80e392f62d2))
* validation schemas ([3cd15c5](https://github.com/hirosystems/stacks-wallet-web/commit/3cd15c5705eced4954cd235d38440af6ba4bce2a))

## [3.25.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.24.0...v3.25.0) (2022-11-16)


### Features

* send form amount field ([c8621bc](https://github.com/hirosystems/stacks-wallet-web/commit/c8621bce93394e76558b67175179f46a7e6cba4c))
* support bns recipients, closes [#1840](https://github.com/hirosystems/stacks-wallet-web/issues/1840) ([6dae61e](https://github.com/hirosystems/stacks-wallet-web/commit/6dae61ee5b8b59c06036178774c43d156b2783d5))


### Bug Fixes

* missing address chars, closes [#2860](https://github.com/hirosystems/stacks-wallet-web/issues/2860) ([793f90a](https://github.com/hirosystems/stacks-wallet-web/commit/793f90ad2a74ab227eaba269d06bf0f2f6373340))


### Internal

* remove unused suspense ([4cab35f](https://github.com/hirosystems/stacks-wallet-web/commit/4cab35fcfd2f1912c4c7018135c78ccb73e009fc))

## [3.24.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.23.0...v3.24.0) (2022-11-15)


### Features

* add chain-specific network config, closes [#2689](https://github.com/hirosystems/stacks-wallet-web/issues/2689) ([5404f75](https://github.com/hirosystems/stacks-wallet-web/commit/5404f755982cb546ea00a6f31beb37795cd24d0d))
* add send crypto asset routes and choose asset ([d92f98c](https://github.com/hirosystems/stacks-wallet-web/commit/d92f98c16e0defecc6ee90037d0a6262ede04d01))
* capture analytics on consent screen only by default, closes [#2784](https://github.com/hirosystems/stacks-wallet-web/issues/2784) ([8f7d61d](https://github.com/hirosystems/stacks-wallet-web/commit/8f7d61d01e2799987fa50437dcd02d2d14e9f5ef))
* strengthen signout message, closes [#2748](https://github.com/hirosystems/stacks-wallet-web/issues/2748) ([6358807](https://github.com/hirosystems/stacks-wallet-web/commit/6358807ae4572d73f3a609e1d404ae53064689a5))


### Bug Fixes

* balance with wrong decimals, closes [#2828](https://github.com/hirosystems/stacks-wallet-web/issues/2828) ([37f0c10](https://github.com/hirosystems/stacks-wallet-web/commit/37f0c10b1f911ec334fab3d0f68f0789b9fca458))
* clipped label ([8414602](https://github.com/hirosystems/stacks-wallet-web/commit/8414602e1954bf1d7678be866acc9a39149a79cf))
* logic with client fallback nonce ([22d77eb](https://github.com/hirosystems/stacks-wallet-web/commit/22d77eb75210053662b04c6a53ac727a6691c1c8))
* merge conflicts ([8992adc](https://github.com/hirosystems/stacks-wallet-web/commit/8992adc6eded0d91c152e0c54eb6e502beca9a9d))
* remove unused types ([24d1ca6](https://github.com/hirosystems/stacks-wallet-web/commit/24d1ca6ea842a0546bac8ebccfd91929091bf37b))
* rename settings actions ([ea16169](https://github.com/hirosystems/stacks-wallet-web/commit/ea1616999818f1f5f14fc533250dec76290f112e))


### Internal

* audit tx request errors ([c58b4cb](https://github.com/hirosystems/stacks-wallet-web/commit/c58b4cb036de8f066d750ea9d3444745947f9f34))
* configurable query hook pattern ([35893ab](https://github.com/hirosystems/stacks-wallet-web/commit/35893ab043aff5a848bde62c8cdbf5399ee6ad19))
* **linting:** import order ([239e7d7](https://github.com/hirosystems/stacks-wallet-web/commit/239e7d781722a63a0399097e2ebc4bbe49c76f5b))
* remove capsize library ([4d5db43](https://github.com/hirosystems/stacks-wallet-web/commit/4d5db4309ac5fa6e6db27f6c23f96c51e3a514a3))
* remove capsize workaround ([a7e8cf4](https://github.com/hirosystems/stacks-wallet-web/commit/a7e8cf42e6602e97d7b848326da1d8a6653f371c))
* test dev access ([c3ac636](https://github.com/hirosystems/stacks-wallet-web/commit/c3ac636071164ee3ef7f6fedbc20ddfbc581fc5c))
* **tooling:** add decrypt mnemonic page ([befb98b](https://github.com/hirosystems/stacks-wallet-web/commit/befb98b50dde109d0ce1732265ab9e49012d5c62))

## [3.23.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.22.1...v3.23.0) (2022-11-07)


### Features

* add btc to balance list ([c13e27f](https://github.com/hirosystems/stacks-wallet-web/commit/c13e27f96b9caa1fe5c4812c35c4171fb6a6cf2f))


### Bug Fixes

* **ledger:** failing to broadcast from send form ([25ba10c](https://github.com/hirosystems/stacks-wallet-web/commit/25ba10c210d2fd13f17583b2b4100a45339c1eba))
* persist user selected theme, fixes [#2789](https://github.com/hirosystems/stacks-wallet-web/issues/2789) ([adabbaa](https://github.com/hirosystems/stacks-wallet-web/commit/adabbaa8a1ebea3ce1886de9cf3220fab3a93d53))


### Internal

* enable btc query with address ([404f904](https://github.com/hirosystems/stacks-wallet-web/commit/404f9042f1ba9b9b548da235e6bec5433e0d52cc))
* network switcher ([708e638](https://github.com/hirosystems/stacks-wallet-web/commit/708e6386fd40d972c2f2240dd49ffeb767d6fa9b))
* remove btc test address ([463bc17](https://github.com/hirosystems/stacks-wallet-web/commit/463bc17a7f31059f41863979d88350763290a0cf))
* rename vars, closes [#2779](https://github.com/hirosystems/stacks-wallet-web/issues/2779) ([d2a7e17](https://github.com/hirosystems/stacks-wallet-web/commit/d2a7e1718b327fdc1267a71e50c0c48761103bb9))

## [3.22.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.22.0...v3.22.1) (2022-11-03)


### Bug Fixes

* **market-data:** conversion creating decimal money ([1557fe0](https://github.com/hirosystems/stacks-wallet-web/commit/1557fe011772dc110bb950f5765ff2a1b264319b))

## [3.22.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.21.1...v3.22.0) (2022-11-03)


### Features

* dark theme, closes [#2701](https://github.com/hirosystems/stacks-wallet-web/issues/2701) ([6d43dad](https://github.com/hirosystems/stacks-wallet-web/commit/6d43dad07301a1ef6d0b21fdce943346e8f78449))


### Bug Fixes

* padding on switch acct list, closes [#2751](https://github.com/hirosystems/stacks-wallet-web/issues/2751) ([3a190e2](https://github.com/hirosystems/stacks-wallet-web/commit/3a190e231abb96b5db2c02d7594dda8518751f21))
* reintroduces usd amounts, closes [#2756](https://github.com/hirosystems/stacks-wallet-web/issues/2756), [#2735](https://github.com/hirosystems/stacks-wallet-web/issues/2735) ([b9574a8](https://github.com/hirosystems/stacks-wallet-web/commit/b9574a8446c99243ccae08b4c66a7a2f116b6823))
* remove unnecessary call to setShowSignOut ([ce7ad3c](https://github.com/hirosystems/stacks-wallet-web/commit/ce7ad3caa814abe7639030ebce44b3fbd90f74cb))
* show spinner when activity is loading ([f9fbca3](https://github.com/hirosystems/stacks-wallet-web/commit/f9fbca3dcf3dc7762c611af7cc313cbc1d24bc56))

## [3.21.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.21.0...v3.21.1) (2022-10-31)


### Bug Fixes

* add analytics events to local log ([b0bfb9a](https://github.com/hirosystems/stacks-wallet-web/commit/b0bfb9ad022dcac450ff76023a4b72d899aa905c))
* disable input on pw field when loading ([9e26a45](https://github.com/hirosystems/stacks-wallet-web/commit/9e26a457cb50a397002648243d889655a6c9f93a))
* parsing invalid punycode ([18f59fa](https://github.com/hirosystems/stacks-wallet-web/commit/18f59fa1fb5b90a32f696338bbdf7aef0beaee6b))
* tooltip label ([ff587cd](https://github.com/hirosystems/stacks-wallet-web/commit/ff587cd6d56075a69688f5c1a728285bd06ccb33))


### Internal

* broadcast fn ([07e4362](https://github.com/hirosystems/stacks-wallet-web/commit/07e43627f29dd4efb954c0f20a548f922b009f95))

## [3.21.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.20.0...v3.21.0) (2022-10-27)


### Features

* **logging:** add client side logs ([6d5b355](https://github.com/hirosystems/stacks-wallet-web/commit/6d5b355940b212ba4633e635fbf1d217b1ede584))
* punycode support ([521c05b](https://github.com/hirosystems/stacks-wallet-web/commit/521c05baafeadd227b964a2dc156476188ce8401))


### Bug Fixes

* not quite strong strength bar full ([dcfb1ec](https://github.com/hirosystems/stacks-wallet-web/commit/dcfb1ec3aad26faf0deef1ea91c2ce38b0399239))
* send form loading ui ([eaf313b](https://github.com/hirosystems/stacks-wallet-web/commit/eaf313b141872527179356ebbc39a5eddbb98f0a))
* throw on http error response ([5291cc3](https://github.com/hirosystems/stacks-wallet-web/commit/5291cc3eddfa58201979d2467cd6ad7dc600c47d))


### Internal

* prevent vercel msgs ([11278e5](https://github.com/hirosystems/stacks-wallet-web/commit/11278e5fe663d170018d22203904a6afc247bdc7))

## [3.20.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.19.1...v3.20.0) (2022-10-21)


### Features

* add bitcoin to tx list ([711ad3c](https://github.com/hirosystems/stacks-wallet-web/commit/711ad3ceae001ededad2d2cfa722835c567d281d))


### Bug Fixes

* no suspense on market data query ([100e927](https://github.com/hirosystems/stacks-wallet-web/commit/100e927c24e228cd2f9d22e058ef0fade943be5e))

## [3.19.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.19.0...v3.19.1) (2022-10-20)


### Bug Fixes

* menu items casing ([ab4fbc9](https://github.com/hirosystems/stacks-wallet-web/commit/ab4fbc9cac4124d1383590cfd6bb75f8d3bf2490))
* slow firefox sign in times, persistent worker ([7eb353a](https://github.com/hirosystems/stacks-wallet-web/commit/7eb353ad799d3a2398127d4de328848f8536e23d))
* white screen on account select list ([12d77a1](https://github.com/hirosystems/stacks-wallet-web/commit/12d77a16fde366f6d4055a270a599ca7f32801e5))


### Internal

* removes 1 of the 2 expensive tx generations on input change ([7dd067c](https://github.com/hirosystems/stacks-wallet-web/commit/7dd067c7975a4ec645a262bce443e69a3ac2cd8c))

## [3.19.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.18.2...v3.19.0) (2022-10-18)


### Features

* add base queries to fetch market data ([d98db75](https://github.com/hirosystems/stacks-wallet-web/commit/d98db75c36dd9b59d169311aa1ec073ff61f6490))
* display address segments, closes [#2690](https://github.com/hirosystems/stacks-wallet-web/issues/2690) ([5e07f88](https://github.com/hirosystems/stacks-wallet-web/commit/5e07f88bf25e9858f38c136084c5f4507175a713))


### Bug Fixes

* fees query options ([16068b1](https://github.com/hirosystems/stacks-wallet-web/commit/16068b1138b5ebbdeb9230ba61660a09e28d098f))
* password box lag issue, closes [#2697](https://github.com/hirosystems/stacks-wallet-web/issues/2697) ([d3aad11](https://github.com/hirosystems/stacks-wallet-web/commit/d3aad11b7a3e331635797714f7c9dcae1c7b6837))
* remove deprecated substr methods ([10b9b62](https://github.com/hirosystems/stacks-wallet-web/commit/10b9b6231f64d3388ee5bea2f6e7c7cd40870dc2))
* simulated fee estimations ([669ade2](https://github.com/hirosystems/stacks-wallet-web/commit/669ade25264ea97fc70b56fc38d98553e3481952))


### Internal

* add mailing list link to readme ([956840d](https://github.com/hirosystems/stacks-wallet-web/commit/956840dccad0155358c3e6739af1b622f536b941))
* migrate to @tanstack/react-query ([b103bee](https://github.com/hirosystems/stacks-wallet-web/commit/b103bee8ac33fc7ceb451f7bf72930014fe5a99a))
* reusable base type, Money, MarketPair, MarketData ([025c5f1](https://github.com/hirosystems/stacks-wallet-web/commit/025c5f1c47cfb18186e610300f0d9f3ce85c8d3d))
* reuse account item layout component ([b6be275](https://github.com/hirosystems/stacks-wallet-web/commit/b6be2753e1b3dfe06badf3ea01d6c0fbb44fe2a5))

## [3.18.2](https://github.com/hirosystems/stacks-wallet-web/compare/v3.18.1...v3.18.2) (2022-10-14)


### Bug Fixes

* no fallback when no gaia profile found ([12d796d](https://github.com/hirosystems/stacks-wallet-web/commit/12d796d1c0cb032d4b309681b78301df71391aba))

## [3.18.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.18.0...v3.18.1) (2022-10-05)


### Bug Fixes

* path url trailing slash ([ff4cc7b](https://github.com/hirosystems/stacks-wallet-web/commit/ff4cc7bd62179d11d42e085aa1862d3f81abf8ef))


### Internal

* upgrade stacks.js v5 ([fc8dadc](https://github.com/hirosystems/stacks-wallet-web/commit/fc8dadc4388c2ff2e05429be7c47ffd57c25f5bc))

## [3.18.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.17.2...v3.18.0) (2022-10-04)


### Features

* add warning msg for outdated ledger app versions ([1af7a04](https://github.com/hirosystems/stacks-wallet-web/commit/1af7a047cadc6050add2178da77fc2822a617b88))
* bitcoin data ([f6b4166](https://github.com/hirosystems/stacks-wallet-web/commit/f6b416645b7256a6617ebc28a59bdebdbca75d1e))


### Bug Fixes

* edit nonce to zero ([1fb1e36](https://github.com/hirosystems/stacks-wallet-web/commit/1fb1e362dd5d641f235357bbdf2c7c1c6984eb4e))
* hide menu in send form ([78c2001](https://github.com/hirosystems/stacks-wallet-web/commit/78c20017197d044d1e019e30d6b35e73ac15d737))
* **ledger:** mismatching public key ([d1be7be](https://github.com/hirosystems/stacks-wallet-web/commit/d1be7bebaff98569c34406a753d011b9643e4208))
* **network:** full path not accepted, closes [#2680](https://github.com/hirosystems/stacks-wallet-web/issues/2680) ([23fb2f6](https://github.com/hirosystems/stacks-wallet-web/commit/23fb2f686e9b3d85d885c9076ba4a93eca5d7ba1))


### Internal

* add bitcoin feature flag ([f0d284c](https://github.com/hirosystems/stacks-wallet-web/commit/f0d284c43b4ba8d1eec561eca9bf31d1e9b7923d))
* network state to redux ([c475572](https://github.com/hirosystems/stacks-wallet-web/commit/c4755728904dbc747e0a4886d3a69de560274e22))

## [3.17.2](https://github.com/hirosystems/stacks-wallet-web/compare/v3.17.1...v3.17.2) (2022-09-16)


### Bug Fixes

* **query:** reuse of query key ([9c654bc](https://github.com/hirosystems/stacks-wallet-web/commit/9c654bc409be2d1690ef9023dc25a25c2b897a19))

## [3.17.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.17.0...v3.17.1) (2022-09-15)


### Bug Fixes

* throwing error with contract function ([6f528fe](https://github.com/hirosystems/stacks-wallet-web/commit/6f528febb75f504f487f91c2ba42096d925d1ffc))

## [3.17.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.16.1...v3.17.0) (2022-09-14)


### Features

* **ledger:** add utf-8 message signing support ([99239b2](https://github.com/hirosystems/stacks-wallet-web/commit/99239b2648c227a6d045962fde9c206d46800315))


### Bug Fixes

* cached data bug in atom with wrong network, closes [#2645](https://github.com/hirosystems/stacks-wallet-web/issues/2645) ([2a180ee](https://github.com/hirosystems/stacks-wallet-web/commit/2a180ee7940d2208654b4062fba7f5cc5143c0f2))
* chrome rejections, unused permissions ([86e1ddb](https://github.com/hirosystems/stacks-wallet-web/commit/86e1ddbae9d69cbf4475d58f490b532aceedc575))
* **message-signing:** message wrapping, closes [#2594](https://github.com/hirosystems/stacks-wallet-web/issues/2594), [#2441](https://github.com/hirosystems/stacks-wallet-web/issues/2441) ([3ca2d10](https://github.com/hirosystems/stacks-wallet-web/commit/3ca2d10c252056270a16212c0d86549c683e0838))
* querying fee endpoint empty payload, closes [#2653](https://github.com/hirosystems/stacks-wallet-web/issues/2653) ([cf2ca3b](https://github.com/hirosystems/stacks-wallet-web/commit/cf2ca3b21d0d69dcc5c39e016cf3d64066e23cd0))
* sponsored txs confirm button ([4d01442](https://github.com/hirosystems/stacks-wallet-web/commit/4d01442f4f51c5b94a3dc46a0b359790d2623577))


### Internal

* broadcast error ux ([70fe208](https://github.com/hirosystems/stacks-wallet-web/commit/70fe2082efa571b14ce235b69d4a42b303980263))
* **deps-dev:** bump @actions/core from 1.6.0 to 1.9.1 ([fca2545](https://github.com/hirosystems/stacks-wallet-web/commit/fca2545e5de9bfa017a7d42b24fefc445254207c))
* **message-signing:** structured data formatting ([b3dd513](https://github.com/hirosystems/stacks-wallet-web/commit/b3dd513b431fc83fd74e263560770de29e8a1a80))
* remove useUpdateAuthRequest atom, closes [#2639](https://github.com/hirosystems/stacks-wallet-web/issues/2639) ([110d87c](https://github.com/hirosystems/stacks-wallet-web/commit/110d87c151b937cb537d0e9ae657c2a6af636825))
* select asset ([b5684d8](https://github.com/hirosystems/stacks-wallet-web/commit/b5684d8483d5aad46f85aa25a3af398a13a5bbb0))
* upgrade @zondax/ledger-stacks ([797ce5a](https://github.com/hirosystems/stacks-wallet-web/commit/797ce5aefeab64b9b715901f202823faba9fb424))
* upgrade packages ([9558376](https://github.com/hirosystems/stacks-wallet-web/commit/955837664cbc55d23a435065067129152e4071a1))
* upgrade stacks.js packages ([b6ed0a9](https://github.com/hirosystems/stacks-wallet-web/commit/b6ed0a9970daae671afa0ea4d99ed6ca472fc903))
* use onMount hook ([3712a30](https://github.com/hirosystems/stacks-wallet-web/commit/3712a3037bc3a48e6ff23b67ba80b593a1264630))

## [3.16.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.16.0...v3.16.1) (2022-08-17)


### Bug Fixes

* firefox origin url issue ([b46a97d](https://github.com/hirosystems/stacks-wallet-web/commit/b46a97d178522b751bee8f54a954567e53c919e7))


### Internal

* analytics event on worker error ([00cfb49](https://github.com/hirosystems/stacks-wallet-web/commit/00cfb49556444be3d4ccb69a9daa44a10f93052a))

## [3.16.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.15.0...v3.16.0) (2022-08-16)


### Features

* trigger release ([7ae759a](https://github.com/hirosystems/stacks-wallet-web/commit/7ae759a360c409263e6cd32051be3131c1bb84c4))


### Bug Fixes

* update create version release job ([efd2551](https://github.com/hirosystems/stacks-wallet-web/commit/efd2551e035f540a7211ca18d45ee35b432a1630))

## [3.15.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.14.0...v3.15.0) (2022-08-16)


### Features

* trigger release ([0f4d87f](https://github.com/hirosystems/stacks-wallet-web/commit/0f4d87fe80a02b9360dd5afb612ea56caa84ef5c))


### Bug Fixes

* remove locally installed pkg ([74d8de6](https://github.com/hirosystems/stacks-wallet-web/commit/74d8de6127ca35a206b97192bebe3637aefc4ad6))

## [3.14.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.13.5...v3.14.0) (2022-08-16)


### Features

* warn when originating tab closes ([552293e](https://github.com/hirosystems/stacks-wallet-web/commit/552293e59a895aa1ca08a06ca04151a86ce78ac3))


### Bug Fixes

* name spoofing detection from metadata ([d9c0e2d](https://github.com/hirosystems/stacks-wallet-web/commit/d9c0e2dea5b49d9a157a5679aef32cdcb6fdf223))
* redirect back after successful unlock ([717ad60](https://github.com/hirosystems/stacks-wallet-web/commit/717ad60db4eb3f63acd44102acf063548b943056))
* release notes ([3087cdf](https://github.com/hirosystems/stacks-wallet-web/commit/3087cdff0541cf251948a5c7126b6f966e90ea63))
* semantic release ([3a897b5](https://github.com/hirosystems/stacks-wallet-web/commit/3a897b593da0685b11e174946f65c187f6daf085))
* semantic release add, use yarn ([32a6785](https://github.com/hirosystems/stacks-wallet-web/commit/32a6785a84d0e084a92782ec57f34f3a16d44a41))
* semantic release package install ([ae59396](https://github.com/hirosystems/stacks-wallet-web/commit/ae59396df170a61938ae8575a443bf61947cad28))
* setup and relocate env variables ([e827f2e](https://github.com/hirosystems/stacks-wallet-web/commit/e827f2e330dd360ddf21722dadeb097918d56ef2))
* upgrade semantic-release action plugin ([ea7d747](https://github.com/hirosystems/stacks-wallet-web/commit/ea7d7470e2997be361026a0f4ffc75adfa82c01b))


### Internal

* <PopupHeader/> component ([4cf384d](https://github.com/hirosystems/stacks-wallet-web/commit/4cf384d72078dd467fe784d3ea35ebc5b70ecef5))
* add conventionalcommits pkg ([728f46d](https://github.com/hirosystems/stacks-wallet-web/commit/728f46d2fcd1e4339e053dc27508e8e56511d527))
* add job post ([486eedb](https://github.com/hirosystems/stacks-wallet-web/commit/486eedb879563e4801de4a64210b2f260c79fee8))
* **atoms:** remove transaction request atom ([ac29a32](https://github.com/hirosystems/stacks-wallet-web/commit/ac29a324a3a6a155fd8242fd2bfc6b1e6f0f37a7))
* avoid using localStorage to cache ephemeral values, closes [#2547](https://github.com/hirosystems/stacks-wallet-web/issues/2547) ([4f7126f](https://github.com/hirosystems/stacks-wallet-web/commit/4f7126fc309e63fda7a4b67157812c049d77ea0b))
* better handle window close event, closes [#1181](https://github.com/hirosystems/stacks-wallet-web/issues/1181) ([8b6523f](https://github.com/hirosystems/stacks-wallet-web/commit/8b6523f21c9b563c5f28150b850c7790f62bbd27))
* coinbase pay ui ([7ede3ce](https://github.com/hirosystems/stacks-wallet-web/commit/7ede3ced9330d79d1a64d23783684da97f32565c))
* **deps:** tidy unused packages ([664b59f](https://github.com/hirosystems/stacks-wallet-web/commit/664b59f3ec777aec2563fd06bf17d5fe747956e7))
* disable sentry ([d88b955](https://github.com/hirosystems/stacks-wallet-web/commit/d88b955b073011d01fdce9ff81dfca104ec04bad))
* enable coinbase pay fast checkout ([adcb2c0](https://github.com/hirosystems/stacks-wallet-web/commit/adcb2c04f0bcecbb823785515bea791fa576f40a))
* fee estimations ([20ef805](https://github.com/hirosystems/stacks-wallet-web/commit/20ef80510489fb7951c697c5ca74997079f47d98))
* remove more unused packages ([4cab525](https://github.com/hirosystems/stacks-wallet-web/commit/4cab525b518b7d7c4ce833f9bff81990809a207a))
* remove react query wrapper ([1e479e5](https://github.com/hirosystems/stacks-wallet-web/commit/1e479e5f25756a1c30aaf7fea4c0ac0ae100e1b0))
* **security:** add dev tools warning ([1021f34](https://github.com/hirosystems/stacks-wallet-web/commit/1021f34774df30faffbb29c73214a952bcfb54fe))
* spell incurred properly ([9fd7ec7](https://github.com/hirosystems/stacks-wallet-web/commit/9fd7ec77e46e7c0406a6683081faff98f791f396))
* steps state ([76e8c0a](https://github.com/hirosystems/stacks-wallet-web/commit/76e8c0a0cbc708a725c27c5125cb995cf0da4a05))
* **tooling:** fix redux devtools ([e42367d](https://github.com/hirosystems/stacks-wallet-web/commit/e42367dc72e99c5defbb81cb2ae1353971ed2a69))
* track on 'disconnected tab' error ([4577b21](https://github.com/hirosystems/stacks-wallet-web/commit/4577b214d0088f99573aa5f9d4b5c3fa8fd2e4b6))

## [3.13.5](https://github.com/hirosystems/stacks-wallet-web/compare/v3.13.4...v3.13.5) (2022-08-05)


### Bug Fixes

* new pop up window extension crash ([2eeb416](https://github.com/hirosystems/stacks-wallet-web/commit/2eeb4169ececb54b397bfd2aeb4ad52af679952d))

## [3.13.4](https://github.com/hirosystems/stacks-wallet-web/compare/v3.13.3...v3.13.4) (2022-08-04)


### Bug Fixes

* remove merge job from main ci ([55e8d98](https://github.com/hirosystems/stacks-wallet-web/commit/55e8d9864b57752b2fc73ce2dd7a6bc519db6340))

## [3.13.3](https://github.com/hirosystems/stacks-wallet-web/compare/v3.13.2...v3.13.3) (2022-08-04)


### Bug Fixes

* remove referrer header adding ([0c72776](https://github.com/hirosystems/stacks-wallet-web/commit/0c72776051ed10cc6f62b28f9fd993dafd15f6b0))

## [3.13.2](https://github.com/hirosystems/stacks-wallet-web/compare/v3.13.1...v3.13.2) (2022-08-01)


### Bug Fixes

* add 'all_frames' option, closes [#2351](https://github.com/hirosystems/stacks-wallet-web/issues/2351) ([276e5f6](https://github.com/hirosystems/stacks-wallet-web/commit/276e5f663052cef9ba713d9812170b285194bb5f))
* dockerfile to reduce vulnerabilities ([6291364](https://github.com/hirosystems/stacks-wallet-web/commit/62913647707dbbd69c3460dcd66bf0e469cc99fa))
* filter nonce txs by sender address ([8eaf9c7](https://github.com/hirosystems/stacks-wallet-web/commit/8eaf9c79f897d704a9350854b8b354183a0c902b))
* nan nonce ([ecd13c5](https://github.com/hirosystems/stacks-wallet-web/commit/ecd13c51f20611f54cd05705f55eb7bcc0cd7156))

## [3.13.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.13.0...v3.13.1) (2022-07-20)


### Bug Fixes

* wallet config path ([02d3c62](https://github.com/hirosystems/stacks-wallet-web/commit/02d3c623338626e60a15f10b02b2ed221ae8d598))

# [3.13.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.12.1...v3.13.0) (2022-07-19)


### Bug Fixes

* better error handling for broadcasting from apps ([759f1d5](https://github.com/hirosystems/stacks-wallet-web/commit/759f1d5f2fc03c5db8d14de9ca7b295bec84ced2))
* change confirmation logic while setting password ([7d052fb](https://github.com/hirosystems/stacks-wallet-web/commit/7d052fbeb7c6bc64ff045f23ccfe5a0f07ae529e))
* **ledger:** close transport on activity completion ([1133821](https://github.com/hirosystems/stacks-wallet-web/commit/1133821f07f0df4af285294bc8432c35a72b73a6))
* **ledger:** improve onboarding ux, close transport ([bdf57d1](https://github.com/hirosystems/stacks-wallet-web/commit/bdf57d1e2ff9ae68198af2d0bb72c6cb43d6ff60))
* **ledger:** non-zero index account signing, closes [#2572](https://github.com/hirosystems/stacks-wallet-web/issues/2572) ([f19142e](https://github.com/hirosystems/stacks-wallet-web/commit/f19142e466903f865f4aed3dd5314fa5b3a6c655))
* **ledger:** try again jwt signing wasn't working, closes [#2561](https://github.com/hirosystems/stacks-wallet-web/issues/2561) ([ab53a8b](https://github.com/hirosystems/stacks-wallet-web/commit/ab53a8b6f9aba644504eca597d709345b453ebcd))
* next tx nonce ([275c8f6](https://github.com/hirosystems/stacks-wallet-web/commit/275c8f6960c36ddbca0f18272f3c933db3b2ca61))
* password strength indicator ux ([b4c4c34](https://github.com/hirosystems/stacks-wallet-web/commit/b4c4c34e29cb7b93c0641730d018dc5d5d1b7d4f))
* remove instance of redirect_uri ([74328d2](https://github.com/hirosystems/stacks-wallet-web/commit/74328d28284ba010839bad2c490c492bc566ede6))
* unused import error ([9abca5f](https://github.com/hirosystems/stacks-wallet-web/commit/9abca5f19aba1faf97bb2b0017e97d2e19fb5af7))


### Features

* add coinbase pay support ([7fdf363](https://github.com/hirosystems/stacks-wallet-web/commit/7fdf36337c71ad2b4a5894a27aea93195039d0fb))

## [3.12.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.12.0...v3.12.1) (2022-07-16)


### Bug Fixes

* path to wallet config ([4e7d978](https://github.com/hirosystems/stacks-wallet-web/commit/4e7d978f4eb7ee68f225a480d77efc1b5e273f48))

# [3.12.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.11.2...v3.12.0) (2022-07-12)


### Bug Fixes

* add transition to fund account tile ([a4cc29a](https://github.com/hirosystems/stacks-wallet-web/commit/a4cc29af44317c27f4b10bf8f877802f8d90eb9d))
* drawer header ([1be4f88](https://github.com/hirosystems/stacks-wallet-web/commit/1be4f88d3cb0671aea7727a7797dbfe8b605a413))
* error during sign out on lock screen ([8f04a0e](https://github.com/hirosystems/stacks-wallet-web/commit/8f04a0e78ae85f11e12af77bff8ce2d62d1e0fd4))
* error when selecting tx request fee ([ee64d9b](https://github.com/hirosystems/stacks-wallet-web/commit/ee64d9b33b956a7e9cba2ecc244ae193e474edda))
* first steps limit to five accounts ([7058fb5](https://github.com/hirosystems/stacks-wallet-web/commit/7058fb53f752b059af4b270b919489b600256715))
* **ledger:** add new error screen ([173af14](https://github.com/hirosystems/stacks-wallet-web/commit/173af1469034af45d8675f3a5677839fe082f55d))
* **ledger:** conditional finalise tx req ([00830d1](https://github.com/hirosystems/stacks-wallet-web/commit/00830d1604392717320dfd379f344a86a9cc6e7f))
* **ledger:** returning values back to app ([b0c5700](https://github.com/hirosystems/stacks-wallet-web/commit/b0c5700b4404a005b4631124934abda8badab309))
* **ledger:** unsupported browser modal not opening ([e78864b](https://github.com/hirosystems/stacks-wallet-web/commit/e78864b9ed1bcb080f45f19216c77081a22bb5a6))
* onclose after confirm ledger tx ([ad8b2b4](https://github.com/hirosystems/stacks-wallet-web/commit/ad8b2b49d6c7dac814acae8d7dfc5dbf3647adca))
* query hook dependency ([378f0d1](https://github.com/hirosystems/stacks-wallet-web/commit/378f0d1a2b95d3336ece3b9ba01129a0b641eff5))
* referrer header modifying page origins, closes [#2533](https://github.com/hirosystems/stacks-wallet-web/issues/2533) ([cfdc1e6](https://github.com/hirosystems/stacks-wallet-web/commit/cfdc1e625a17e6dae80ef46af7c8e74fc2d67e2c))
* show unlock waiting message only when loading ([c1111b7](https://github.com/hirosystems/stacks-wallet-web/commit/c1111b776040ef713eb3f22bdfaa802fcabbc913))
* sponsored tx edit nonce ([edd5c48](https://github.com/hirosystems/stacks-wallet-web/commit/edd5c48a112bf703107023565a7dd218bf51cdec))
* **tx-signing:** missing sip10 detection, closes [#2537](https://github.com/hirosystems/stacks-wallet-web/issues/2537) ([a41ef58](https://github.com/hirosystems/stacks-wallet-web/commit/a41ef58778ac6a3bdf84863f3fffc40967eaf94b))
* **tx-signing:** routes missing, readded, [#2534](https://github.com/hirosystems/stacks-wallet-web/issues/2534) ([4257768](https://github.com/hirosystems/stacks-wallet-web/commit/4257768cde6e36bea2819394eaf1e2cacb8bd794))
* validate redirect uri ([8b180f2](https://github.com/hirosystems/stacks-wallet-web/commit/8b180f2fc98844f3ac99e9a293bcc84afec89f5c))


### Features

* ledger increase fee tx signing ([d8ff5eb](https://github.com/hirosystems/stacks-wallet-web/commit/d8ff5eb9ac8ae5988307d90b23bf4bb5fad4fa58))

## [3.11.2](https://github.com/hirosystems/stacks-wallet-web/compare/v3.11.1...v3.11.2) (2022-07-07)


### Bug Fixes

* validate redirect uri ([5264c9f](https://github.com/hirosystems/stacks-wallet-web/commit/5264c9f31a84cce439194e0268812f39692f03be))

## [3.11.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.11.0...v3.11.1) (2022-07-06)


### Bug Fixes

* first steps limit to five accounts ([f2baa11](https://github.com/hirosystems/stacks-wallet-web/commit/f2baa1158a8495227b888c1ecc6f851649e38187))
* query hook dependency ([927af6a](https://github.com/hirosystems/stacks-wallet-web/commit/927af6ae93fb68dc04bab93f87a4a4a044b4ed84))
* transaction nonce not incrementing ([2528cf3](https://github.com/hirosystems/stacks-wallet-web/commit/2528cf31b352f7d3a25b176af68e83d1789db7be))

# [3.11.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.10.0...v3.11.0) (2022-06-30)


### Bug Fixes

* add referer headers to api calls ([4b23da1](https://github.com/hirosystems/stacks-wallet-web/commit/4b23da187ab5e9560746d31979b199860bd68f59))
* bad ui copy practices ([828082a](https://github.com/hirosystems/stacks-wallet-web/commit/828082abc8908e73c944f88358d62577571012da))
* current account name ([7b54aa4](https://github.com/hirosystems/stacks-wallet-web/commit/7b54aa4cc516841f5602a2c40d9e2a010c20441d))
* direct landing on send form page, closes [#2470](https://github.com/hirosystems/stacks-wallet-web/issues/2470) ([b98d570](https://github.com/hirosystems/stacks-wallet-web/commit/b98d570c1a17534772d4189a89641bdfcee5bd14))
* firefox white screen with referer header ([427e592](https://github.com/hirosystems/stacks-wallet-web/commit/427e592bef3cdd82c4bb63362efe1ee8a5cc36f0))
* fund page layout shift ([9f66227](https://github.com/hirosystems/stacks-wallet-web/commit/9f66227f925171bb28d61eff120ed11e48286dbb))
* header version alignment ([676b5dd](https://github.com/hirosystems/stacks-wallet-web/commit/676b5dd2f033384c43275fca41e60a57b4fcd794))
* loading first steps ([bbbff9c](https://github.com/hirosystems/stacks-wallet-web/commit/bbbff9cfafcd894249fda8295eae7183b0f1fc90))
* new tab send form nonce and scroll ([62e6d11](https://github.com/hirosystems/stacks-wallet-web/commit/62e6d118d6681c641a280064d3c5e218a96a7dc3))
* nonce with pending tx ([9ba8234](https://github.com/hirosystems/stacks-wallet-web/commit/9ba8234c27b8d3e25923e1b4002c9c3548739811))
* onboarding state ([40bb84b](https://github.com/hirosystems/stacks-wallet-web/commit/40bb84b0c92a67cc07bbba0df6b61d5f77f2e4e8))
* receive page scroll ([fd363de](https://github.com/hirosystems/stacks-wallet-web/commit/fd363de08dad6d63c8757f0498985d7a01d0e689))
* remove double scrollbars, emotion set up ([fc0be70](https://github.com/hirosystems/stacks-wallet-web/commit/fc0be704deb0a3d0884869fde8ce5faf9dc9fdf2))
* send form white screen ([1ff0e70](https://github.com/hirosystems/stacks-wallet-web/commit/1ff0e7056f4ff34e43ca2cfcf31a2ff731a3e856))
* sign message oncancel ([f2d75f8](https://github.com/hirosystems/stacks-wallet-web/commit/f2d75f8fe7226f14c9b27d8f1abd48a299eb5875))
* sign message with line breaks ([fdc8866](https://github.com/hirosystems/stacks-wallet-web/commit/fdc8866861abf143dba3815b97ea85946914eae9))
* suggested steps only updating with refresh ([2dea9c6](https://github.com/hirosystems/stacks-wallet-web/commit/2dea9c6954117e127f251fb1b72c258c93b81482))
* support SIP-018 for structured data signing ([8087cd6](https://github.com/hirosystems/stacks-wallet-web/commit/8087cd604a6c3a6d8a8c0e0673d70fd7d543d282)), closes [#2443](https://github.com/hirosystems/stacks-wallet-web/issues/2443) [#2460](https://github.com/hirosystems/stacks-wallet-web/issues/2460) [#2419](https://github.com/hirosystems/stacks-wallet-web/issues/2419)
* use the anchor mode from the input transaction ([92c7c6a](https://github.com/hirosystems/stacks-wallet-web/commit/92c7c6a7afc3a5f8fde052aa412f8418e8f8eea3))


### Features

* add image to fungible token ([c891983](https://github.com/hirosystems/stacks-wallet-web/commit/c8919833102ba490dfb011407c3be57c6282bc01)), closes [#1800](https://github.com/hirosystems/stacks-wallet-web/issues/1800)
* initial support jwt signing on ledger ([5f4696e](https://github.com/hirosystems/stacks-wallet-web/commit/5f4696ecfa8127ae682a98190a32d7e52d3e4ecc))
* support Ledger hardware wallets ([8a7d0d2](https://github.com/hirosystems/stacks-wallet-web/commit/8a7d0d2a3d09848393f6fc033dcb24c48b758bef))

# [3.10.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.9.0...v3.10.0) (2022-06-13)


### Bug Fixes

* bad ui copy practices ([d92a767](https://github.com/hirosystems/stacks-wallet-web/commit/d92a767cabbda41861ecd419ee7353c89a3d5f3b))
* fund page layout shift ([748136c](https://github.com/hirosystems/stacks-wallet-web/commit/748136c510006aab5a44e5cb18160c4195a4e8f2))
* header version alignment ([99af515](https://github.com/hirosystems/stacks-wallet-web/commit/99af5153294ced1fad05f4f7d64809fb51bf1144))
* onboarding state ([061f383](https://github.com/hirosystems/stacks-wallet-web/commit/061f383377f2864d4fdf2c43c13b5b5b4ffd1094))
* receive page scroll ([9c41ace](https://github.com/hirosystems/stacks-wallet-web/commit/9c41acea45058858040598f9aa076c3607d43f6e))
* suggested steps only updating with refresh ([edb5ace](https://github.com/hirosystems/stacks-wallet-web/commit/edb5ace2a8de9f45c626ddc1b0c3fbb1eb40ffcb))
* use the anchor mode from the input transaction ([8f16d5b](https://github.com/hirosystems/stacks-wallet-web/commit/8f16d5bd8080a7359265ac070b5b45784882c9c3))


### Features

* add image to fungible token ([3c52fae](https://github.com/hirosystems/stacks-wallet-web/commit/3c52fae7b3e476b3a12829ecd75d25a20d7db7c2)), closes [#1800](https://github.com/hirosystems/stacks-wallet-web/issues/1800)

# [3.9.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.8.0...v3.9.0) (2022-05-16)


### Bug Fixes

* hide nfts with zero balance ([67294a2](https://github.com/hirosystems/stacks-wallet-web/commit/67294a259ffca1b87323cb9c7d4e5419bc64430f))
* refetch account balance ([20f11cb](https://github.com/hirosystems/stacks-wallet-web/commit/20f11cb62dc35416df6defd64bc29ad89dae8dfd))
* scrollbars from padding changes ([1dffe55](https://github.com/hirosystems/stacks-wallet-web/commit/1dffe55ddca70fca4e400a53999b9ee449b2667d))
* subtract pending txs from send max balance ([8de6523](https://github.com/hirosystems/stacks-wallet-web/commit/8de65235cbc4c015d6dc8e0967f5b05ac6dd9907))
* use recoverable key format ([c80e651](https://github.com/hirosystems/stacks-wallet-web/commit/c80e6515d7c5a336b90d4a228c963f369fcdd122))


### Features

* add signature for structured data, closes [#2387](https://github.com/hirosystems/stacks-wallet-web/issues/2387) ([23d9d9a](https://github.com/hirosystems/stacks-wallet-web/commit/23d9d9ac388ecf54f570be93f0b909cc662f0b2e))

# [3.8.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.7.2...v3.8.0) (2022-05-16)


### Bug Fixes

* choose account padding ([13d091e](https://github.com/hirosystems/stacks-wallet-web/commit/13d091eeaa2931e571f142bfe01010ad9863fc52))
* disable confirm button until fees are loaded ([0500796](https://github.com/hirosystems/stacks-wallet-web/commit/05007964d07d1f7eec3f3e54fe1e1038c24a5e2f))
* error message page ([228e9b7](https://github.com/hirosystems/stacks-wallet-web/commit/228e9b7f5118e3a0073a10065bff023104b8c971))
* scrollbars from padding changes ([1038ddb](https://github.com/hirosystems/stacks-wallet-web/commit/1038ddbc9aeef83f57238ac22bf9fd3d02f78410))
* transaction page, keep padding at all breakpoints ([feebd62](https://github.com/hirosystems/stacks-wallet-web/commit/feebd62e0eab314eb238a6cbf546299db6bba2e6))


### Features

* add arbitrary message signing ([cfb28e8](https://github.com/hirosystems/stacks-wallet-web/commit/cfb28e8d8eaef7db56741cdcff321129dac368f9)), closes [#1051](https://github.com/hirosystems/stacks-wallet-web/issues/1051)
* update NFTs URL ([5bd221a](https://github.com/hirosystems/stacks-wallet-web/commit/5bd221a1b2b44633ce8041bc04c7554d126723fc))

## [3.7.2](https://github.com/hirosystems/stacks-wallet-web/compare/v3.7.1...v3.7.2) (2022-04-26)


### Bug Fixes

* error message page ([e579961](https://github.com/hirosystems/stacks-wallet-web/commit/e5799617b9229bf5a6da4db6948f26a810292ab3))

## [3.7.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.7.0...v3.7.1) (2022-04-25)


### Bug Fixes

* bug where wallet doesn't sign out, closes [#2341](https://github.com/hirosystems/stacks-wallet-web/issues/2341) ([5d6d52d](https://github.com/hirosystems/stacks-wallet-web/commit/5d6d52d745d5ad58215c16c63f5bce9a609ee3aa))
* create account drawer to toast ([db7cbf3](https://github.com/hirosystems/stacks-wallet-web/commit/db7cbf38fb978a32eecd2105e3196f5ca79be762))
* switch account drawer ([1d59e69](https://github.com/hirosystems/stacks-wallet-web/commit/1d59e69d515100df27ad08ce57727e272d0875c0))

# [3.7.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.6.1...v3.7.0) (2022-04-06)


### Bug Fixes

* fee dropdown positioning ([936199a](https://github.com/hirosystems/stacks-wallet-web/commit/936199a7ef117ae0abc4dfa0708549236f008615))
* search and select asset ([dc077b1](https://github.com/hirosystems/stacks-wallet-web/commit/dc077b18488541e859ceca1d3ee0ce3833302859))
* track tx signing errors ([a387ef1](https://github.com/hirosystems/stacks-wallet-web/commit/a387ef15dd232d5d397445422ecdb8f775b129fd))
* unauthorized request error ([28c1fa5](https://github.com/hirosystems/stacks-wallet-web/commit/28c1fa55d2cf7df1e47b1ad8eb00cbda125dd9e9))


### Features

* track first deposit ([07f661b](https://github.com/hirosystems/stacks-wallet-web/commit/07f661b3ed300913f431677f822c272015b116e9)), closes [#2232](https://github.com/hirosystems/stacks-wallet-web/issues/2232)

## [3.6.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.6.0...v3.6.1) (2022-03-30)


### Bug Fixes

* fee dropdown positioning ([a5d9121](https://github.com/hirosystems/stacks-wallet-web/commit/a5d91216144c467bbc58fdfb7c56284201e68528))
* track tx signing errors ([48d854f](https://github.com/hirosystems/stacks-wallet-web/commit/48d854fcbb668dfee246bb3d3126c814cf129aaa))
* unauthorized request error ([a0377d8](https://github.com/hirosystems/stacks-wallet-web/commit/a0377d850aa1d9d484a389b21d01bd14bca94a5e))

# [3.6.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.5.1...v3.6.0) (2022-03-28)


### Bug Fixes

* add low fee caps ([7196a88](https://github.com/hirosystems/stacks-wallet-web/commit/7196a8856363fd6c52817b97b8b684b6bf9ca19b))
* re-add dependency array for getAccountDisplayName usage ([e69dcac](https://github.com/hirosystems/stacks-wallet-web/commit/e69dcacafd6c0682ce27d5fa60ddf9dde8761c97))
* remove conditional code for post conditions in fts ([d1ca5df](https://github.com/hirosystems/stacks-wallet-web/commit/d1ca5df88897422d8b23a948333f4789aa18cfbc))


### Features

* add moonpay fiat onramp ([e20a2ea](https://github.com/hirosystems/stacks-wallet-web/commit/e20a2ea8c2bfbe1dbdd0f69200f30bd79d59eb9e)), closes [#2068](https://github.com/hirosystems/stacks-wallet-web/issues/2068)
* add new onboarding home page ([8e17124](https://github.com/hirosystems/stacks-wallet-web/commit/8e1712477dadb8d850716f4ce6e4605d29b84810))
* show account username suffices ([f8d631e](https://github.com/hirosystems/stacks-wallet-web/commit/f8d631e3e93103a6e23b82abb481bdbfade7ee78))

## [3.5.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.5.0...v3.5.1) (2022-03-24)


### Bug Fixes

* add low fee caps ([f391ccf](https://github.com/hirosystems/stacks-wallet-web/commit/f391ccf77bff5d48c119e3173ea1f669690261d0))

# [3.5.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.4.0...v3.5.0) (2022-03-22)


### Bug Fixes

* re-add dependency array for getAccountDisplayName usage ([9a40fd8](https://github.com/hirosystems/stacks-wallet-web/commit/9a40fd87dd2853ab724921e5443452dc117c955f))
* remove conditional code for post conditions in fts ([16624e2](https://github.com/hirosystems/stacks-wallet-web/commit/16624e2918d7ca4ca1187a8ddfbc5d2aaf49dd67))


### Features

* revert "Release/2022 03 02 white buffalo" ([3dee883](https://github.com/hirosystems/stacks-wallet-web/commit/3dee883878fc788426754910f8a20655aea335d2))
* show account username suffices ([289b44d](https://github.com/hirosystems/stacks-wallet-web/commit/289b44dd45bf8b18966261bbb371749d296f3450))

# [3.4.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.3.0...v3.4.0) (2022-03-21)


### Bug Fixes

* pull request template cc ([756aa4a](https://github.com/hirosystems/stacks-wallet-web/commit/756aa4a9bc718d236a36621c804dbc9a602f6afc))


### Features

* force trigger release ([222a448](https://github.com/hirosystems/stacks-wallet-web/commit/222a448737b4a0ba5cc36205dfebbf26fa181d6f))
* force trigger release redo ([b8c9f87](https://github.com/hirosystems/stacks-wallet-web/commit/b8c9f874380432a9eaae70000092f295be5cd862))
* force trigger version action ([7f4e4dc](https://github.com/hirosystems/stacks-wallet-web/commit/7f4e4dcb84f7f9f2f71c43adf01a477c1f3704de))

# [3.3.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.2.1...v3.3.0) (2022-03-16)


### Bug Fixes

* account names not displayed on sign in screen ([c2448fc](https://github.com/hirosystems/stacks-wallet-web/commit/c2448fc9a7a40496b40602d85faa3189bb5cbf57))
* backup old wallet salt key to gaia ([58696e3](https://github.com/hirosystems/stacks-wallet-web/commit/58696e36d6d982a167d44495141da8b2b3189f1e)), closes [#2238](https://github.com/hirosystems/stacks-wallet-web/issues/2238)
* removing localstorage vaules, remove later ([e62ab64](https://github.com/hirosystems/stacks-wallet-web/commit/e62ab6401afc4e8937f3a490c223f625060b51e0))
* unlock auth routing bug ([04c093d](https://github.com/hirosystems/stacks-wallet-web/commit/04c093d806d31affcc20a3e06f4e0e2ccc10800a))


### Features

* add testnet survey msg, closes [#2253](https://github.com/hirosystems/stacks-wallet-web/issues/2253) ([4f98430](https://github.com/hirosystems/stacks-wallet-web/commit/4f98430d8ca5c546363f8350c83be493423bd1ee))

## [3.2.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.2.0...v3.2.1) (2022-03-09)


### Bug Fixes

* account names not displayed on sign in screen ([15f9bbd](https://github.com/hirosystems/stacks-wallet-web/commit/15f9bbd50dff98e9300bae7ee8ba9258eac54326))
* prismjs vulnerability ([0dbc1d7](https://github.com/hirosystems/stacks-wallet-web/commit/0dbc1d7fe3a442790bba83a0b59d17a2758bb4bf))

# [3.2.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.1.1...v3.2.0) (2022-02-21)


### Bug Fixes

* add back tippy styles ([7ee08c8](https://github.com/hirosystems/stacks-wallet-web/commit/7ee08c8bcc8c9e3a410bd1d36bfa8273a05929a2))
* add release rules to commit analyzer ([2080626](https://github.com/hirosystems/stacks-wallet-web/commit/20806261e65dc49db34041a708e786409d520ffb))
* change okcoin wording ([41e7255](https://github.com/hirosystems/stacks-wallet-web/commit/41e72558682cb6c5ffc66e2e007144d8ca571949)), closes [#2170](https://github.com/hirosystems/stacks-wallet-web/issues/2170)
* disable performance tracking ([4dda809](https://github.com/hirosystems/stacks-wallet-web/commit/4dda809be1a4d45f5506cbe72a71c4151efe2ccd))
* double scrollbar issue firefox, closes [#2228](https://github.com/hirosystems/stacks-wallet-web/issues/2228) ([75f60a7](https://github.com/hirosystems/stacks-wallet-web/commit/75f60a75f60a25605670522fb55c00d536168620))
* hitting api with metadata queries ([8776d6b](https://github.com/hirosystems/stacks-wallet-web/commit/8776d6bd19835e430a8631b728a39cef250ac6ee))
* missing account balance ([0d5cdd8](https://github.com/hirosystems/stacks-wallet-web/commit/0d5cdd81627ce46efa0025b8c7199037a0b08d0c))
* near render loop issue ([e60d527](https://github.com/hirosystems/stacks-wallet-web/commit/e60d527b49b3bc88a3ad7f5bdcdae987452a2d70))
* pending label styling ([4f671eb](https://github.com/hirosystems/stacks-wallet-web/commit/4f671eb141a2e60758f3080d220136579d275e51)), closes [#2187](https://github.com/hirosystems/stacks-wallet-web/issues/2187)
* remove suspense, causes scroll bug, closes [#2220](https://github.com/hirosystems/stacks-wallet-web/issues/2220) ([664a3ae](https://github.com/hirosystems/stacks-wallet-web/commit/664a3aeb44993d0d5b10a4323c42371951bf47cb))
* send form styles ([a52696e](https://github.com/hirosystems/stacks-wallet-web/commit/a52696e0558d2f17a95be45d1703238dac9bf5ba))
* send max invalid fee calculation, closes [#2175](https://github.com/hirosystems/stacks-wallet-web/issues/2175) ([db22161](https://github.com/hirosystems/stacks-wallet-web/commit/db221617c5ffcf9bcb6cbf989a8646336984c227))
* slow fetching of metadata, hit api faster ([0b5fb74](https://github.com/hirosystems/stacks-wallet-web/commit/0b5fb744853b67c8570e0a3f6f2f7b3cd4f5782f))
* slower render performance on create account list, fixes [#2139](https://github.com/hirosystems/stacks-wallet-web/issues/2139) ([1e21648](https://github.com/hirosystems/stacks-wallet-web/commit/1e21648c393d5b599569261c043784b128a2584d))
* slower render performance on create account list, fixes [#2139](https://github.com/hirosystems/stacks-wallet-web/issues/2139) ([4e372e4](https://github.com/hirosystems/stacks-wallet-web/commit/4e372e4dd17994954269b80701835e3c82a7e0c2))
* sponsored tx fee ([9cfa3fd](https://github.com/hirosystems/stacks-wallet-web/commit/9cfa3fd52ddc28a69a9bf9bac8c7cb8662bba81e))
* thrown error with sponsored tx ([396a87f](https://github.com/hirosystems/stacks-wallet-web/commit/396a87fbbd40a6d59014ac185709c7f99088201e))


### Features

* add analytics to tx signing & fiat onramp ([e943119](https://github.com/hirosystems/stacks-wallet-web/commit/e943119b06a76d3ac5776ad94a408fd7e0dfcd26)), closes [#2037](https://github.com/hirosystems/stacks-wallet-web/issues/2037) [#2035](https://github.com/hirosystems/stacks-wallet-web/issues/2035)
* add back up secret key page ([6e11303](https://github.com/hirosystems/stacks-wallet-web/commit/6e113032d13ed1690be6944f2839add8ae592eb5))
* add config for max fee estimations ([0a7a20e](https://github.com/hirosystems/stacks-wallet-web/commit/0a7a20e4fad2b63b62d4155c6d6946fc0f319339)), closes [#2039](https://github.com/hirosystems/stacks-wallet-web/issues/2039)
* add message in activity list ([f67f7ab](https://github.com/hirosystems/stacks-wallet-web/commit/f67f7ab8aeb3209513e9479405700fe6ca627acd)), closes [#2187](https://github.com/hirosystems/stacks-wallet-web/issues/2187)
* add set password page ([9d18c72](https://github.com/hirosystems/stacks-wallet-web/commit/9d18c72bdebc014dc0f8d648064023b2dbd61e3f))
* add welcome page ([431e63b](https://github.com/hirosystems/stacks-wallet-web/commit/431e63b7a09404a7e20317146b5bdde9521b636b))


### Reverts

* Revert "feat: upgrade @stacks package to 3.1.0" ([58e3ee0](https://github.com/hirosystems/stacks-wallet-web/commit/58e3ee0f6b74ea87af7677b62015dcda2a13cd4e))
* Revert "chore: upgrade @stacks/wallet-sdk,auth to 3.1.1" ([27de05c](https://github.com/hirosystems/stacks-wallet-web/commit/27de05c3054caf1dd4b352b586a46d54c9cb6f39))
* Revert "fix: missing stx derivation type err" ([6da1ad6](https://github.com/hirosystems/stacks-wallet-web/commit/6da1ad6a69265373a08b996a88adcd4352ebf750))

## [3.1.1](https://github.com/hirosystems/stacks-wallet-web/compare/v3.1.0...v3.1.1) (2022-02-07)


### Bug Fixes

* virtual account list ([d94deec](https://github.com/hirosystems/stacks-wallet-web/commit/d94deec7b9c7e3d9b4e02a1d1512a7cd51bac021))

# [3.1.0](https://github.com/hirosystems/stacks-wallet-web/compare/v3.0.0...v3.1.0) (2022-02-07)


### Bug Fixes

* add back tippy styles ([1c7f7d4](https://github.com/hirosystems/stacks-wallet-web/commit/1c7f7d40dbbca52647e7a02daf349c56f65a152c))
* change okcoin wording ([8437cf3](https://github.com/hirosystems/stacks-wallet-web/commit/8437cf36c958e07d15b9afaee361f5948f1c9f52)), closes [#2170](https://github.com/hirosystems/stacks-wallet-web/issues/2170)
* disable performance tracking ([5059e5f](https://github.com/hirosystems/stacks-wallet-web/commit/5059e5ff4717134ce0a470366627f30102816b2d))
* hitting api with metadata queries ([6283e9c](https://github.com/hirosystems/stacks-wallet-web/commit/6283e9cc7d025fc15ace044818deb7ff34929766))
* missing account balance ([c6f9bca](https://github.com/hirosystems/stacks-wallet-web/commit/c6f9bca428a2f439e7d225c2767e10edf35927bf))
* near render loop issue ([7b7d097](https://github.com/hirosystems/stacks-wallet-web/commit/7b7d0972cdfcf977e38d244b4a7027b451b117b7))
* send form styles ([4aa6fd3](https://github.com/hirosystems/stacks-wallet-web/commit/4aa6fd3e1e5c85b2f786bceb32d1cd7beeb23c04))
* send max invalid fee calculation, closes [#2175](https://github.com/hirosystems/stacks-wallet-web/issues/2175) ([f764ed2](https://github.com/hirosystems/stacks-wallet-web/commit/f764ed2104e8ae1343fb387e12cd4ce6d8553730))
* slower render performance on create account list, fixes [#2139](https://github.com/hirosystems/stacks-wallet-web/issues/2139) ([87077cf](https://github.com/hirosystems/stacks-wallet-web/commit/87077cf18d48074dc89976491490426301d9eda2))
* slower render performance on create account list, fixes [#2139](https://github.com/hirosystems/stacks-wallet-web/issues/2139) ([cbb1fa5](https://github.com/hirosystems/stacks-wallet-web/commit/cbb1fa53680208230fe3602e425182dbaf424ea4))
* sponsored tx fee ([b0203b3](https://github.com/hirosystems/stacks-wallet-web/commit/b0203b32065b8fc632cf9e40c318c890c5c6a3f0))
* thrown error with sponsored tx ([f943979](https://github.com/hirosystems/stacks-wallet-web/commit/f9439796330aedc0bffa7e9a217f0b82705c4772))


### Features

* add analytics to tx signing & fiat onramp ([d1a986e](https://github.com/hirosystems/stacks-wallet-web/commit/d1a986e23c549d35a806018aff0cb981ebda307a)), closes [#2037](https://github.com/hirosystems/stacks-wallet-web/issues/2037) [#2035](https://github.com/hirosystems/stacks-wallet-web/issues/2035)
* add back up secret key page ([7a0acc0](https://github.com/hirosystems/stacks-wallet-web/commit/7a0acc0a774a08103e2ebef3542850ec2113e37a))
* add config for max fee estimations ([4a3a1bd](https://github.com/hirosystems/stacks-wallet-web/commit/4a3a1bdb24a77da19872625f7744ce47818238a5)), closes [#2039](https://github.com/hirosystems/stacks-wallet-web/issues/2039)
* add set password page ([cd7962e](https://github.com/hirosystems/stacks-wallet-web/commit/cd7962eedf447fce36be3cd9ca8d98b5f47940b7))
* add welcome page ([bc17596](https://github.com/hirosystems/stacks-wallet-web/commit/bc175968339cb761670c5ddb3e91f7c5b4a81bea))

# [3.0.0](https://github.com/hirosystems/stacks-wallet-web/compare/v2.24.1...v3.0.0) (2022-01-26)


### Bug Fixes

* breaking change from stacks.js ([d09244c](https://github.com/hirosystems/stacks-wallet-web/commit/d09244c32fe27701074f1700a41bef0e8c4e31d1))
* can't unlock wallet after upgrade ([1882c1f](https://github.com/hirosystems/stacks-wallet-web/commit/1882c1f101f1a0be2d52e2df0d8cc1dead9fbb0c)), closes [#2124](https://github.com/hirosystems/stacks-wallet-web/issues/2124)
* change wallet config default branch to main ([400a55a](https://github.com/hirosystems/stacks-wallet-web/commit/400a55a2aa5034d21329150e2a09c57a8b62e2d8))
* gaia config being fetched on every key press, closes [#2101](https://github.com/hirosystems/stacks-wallet-web/issues/2101) ([013ec9e](https://github.com/hirosystems/stacks-wallet-web/commit/013ec9e88d049559bff2f0eab79c35bb80e5d277))
* improve list render performance ([fd0154e](https://github.com/hirosystems/stacks-wallet-web/commit/fd0154ea3628a939f839ec8cfd829d84ea86a9bd))
* increase fee showing zero ([297afa8](https://github.com/hirosystems/stacks-wallet-web/commit/297afa891de11543bd482ca33551f88aac3bbbb9))
* is asset transferable logic, closes [#2154](https://github.com/hirosystems/stacks-wallet-web/issues/2154) ([32dbd96](https://github.com/hirosystems/stacks-wallet-web/commit/32dbd967b330a5cea4ab1d9464ca79e98d61355f))
* lock and unlocking routes ([5df9e88](https://github.com/hirosystems/stacks-wallet-web/commit/5df9e8803107659da89aed16fbc5126b62005d7b))
* long white screens ([ad41051](https://github.com/hirosystems/stacks-wallet-web/commit/ad4105155b6fd77bd13f9a118501784f4f247902))
* null rendering when accounts are undefined, closes [#2000](https://github.com/hirosystems/stacks-wallet-web/issues/2000) ([973dcc4](https://github.com/hirosystems/stacks-wallet-web/commit/973dcc447d6e8fc1cb71f1cb77e4601306766a97))
* onboarding route flashing ([b2e478b](https://github.com/hirosystems/stacks-wallet-web/commit/b2e478bb32088b8caf5cd259875e51d4db915a41))
* remove disabled regtest option from networks list ([6aafe89](https://github.com/hirosystems/stacks-wallet-web/commit/6aafe8964a3b262aa9d59ad48376779e3bb07109))
* remove gaia call when unlocking wallet ([837cef7](https://github.com/hirosystems/stacks-wallet-web/commit/837cef72d508a61b0b5c3e17c709a42204a59a0d)), closes [#1877](https://github.com/hirosystems/stacks-wallet-web/issues/1877)
* remove gaia call when unlocking wallet ([b717b03](https://github.com/hirosystems/stacks-wallet-web/commit/b717b03d125a6df88a2c0cb51402b6c3b3a6bcbf)), closes [#1877](https://github.com/hirosystems/stacks-wallet-web/issues/1877)
* remove inline source maps in prod ([46ddd28](https://github.com/hirosystems/stacks-wallet-web/commit/46ddd2829ecb40d1343143b39f7c03fc2038104c))
* rename localnet to devnet ([5e489d5](https://github.com/hirosystems/stacks-wallet-web/commit/5e489d5334f39595ca2a896e92965eef37a7bddb))
* render whole account list when fewer than 10 accounts ([abe1597](https://github.com/hirosystems/stacks-wallet-web/commit/abe1597c3b44a475500181d314156a434c02a52e))
* routing sign and signed out ([61d4851](https://github.com/hirosystems/stacks-wallet-web/commit/61d485190718b99f019c58207571af856a733ce6))
* security vulnerability from audit ([c80cd98](https://github.com/hirosystems/stacks-wallet-web/commit/c80cd980905bc0efc198cb1b322a5b8fde79f36e))
* show fiat onramp buy button only on mainnet ([6d1df94](https://github.com/hirosystems/stacks-wallet-web/commit/6d1df94d07bbc7af4d58543b2dcf411b25b469b4)), closes [#2049](https://github.com/hirosystems/stacks-wallet-web/issues/2049)
* submitted transactions not appearing ([e1e902d](https://github.com/hirosystems/stacks-wallet-web/commit/e1e902daa4c6cc836fc6ab80045f3b7ed0a62243))
* switch account failing test ([7efd8c9](https://github.com/hirosystems/stacks-wallet-web/commit/7efd8c989cf87181a01faf14a18ea60ab7dd4225))
* trigger release ([691a14b](https://github.com/hirosystems/stacks-wallet-web/commit/691a14b4f1630fb33a5bc269ef3d15dfe5758c80))
* use saved hasSetPassword from storage ([f3cfbff](https://github.com/hirosystems/stacks-wallet-web/commit/f3cfbffc9686a4c76c8f3a21b4463b3f90140cc1))


### chore

* **release:** 2.25.0 ([1747358](https://github.com/hirosystems/stacks-wallet-web/commit/1747358ea2d41fb81824fc383c5fc41d991ac3f9)), closes [#2124](https://github.com/hirosystems/stacks-wallet-web/issues/2124) [#2101](https://github.com/hirosystems/stacks-wallet-web/issues/2101) [#2000](https://github.com/hirosystems/stacks-wallet-web/issues/2000) [#1877](https://github.com/hirosystems/stacks-wallet-web/issues/1877) [#1877](https://github.com/hirosystems/stacks-wallet-web/issues/1877) [#2049](https://github.com/hirosystems/stacks-wallet-web/issues/2049) [#2041](https://github.com/hirosystems/stacks-wallet-web/issues/2041) [#2062](https://github.com/hirosystems/stacks-wallet-web/issues/2062)


### Features

* activate okcoin fiat onramp integration ([881e88d](https://github.com/hirosystems/stacks-wallet-web/commit/881e88de1fe04dff3bc6c619340636309e552703)), closes [#2105](https://github.com/hirosystems/stacks-wallet-web/issues/2105)
* add metrics for fee estimation ([2788a9b](https://github.com/hirosystems/stacks-wallet-web/commit/2788a9b75d3ff09bee29b4af9b7556b313a1da01)), closes [#2041](https://github.com/hirosystems/stacks-wallet-web/issues/2041)
* add unlock waiting message ([e2cf9f1](https://github.com/hirosystems/stacks-wallet-web/commit/e2cf9f13df5a6b74a5c34a22ec841d83c41535c2)), closes [#2062](https://github.com/hirosystems/stacks-wallet-web/issues/2062)
* reduce sentry tracesSampleRate ([a08a36d](https://github.com/hirosystems/stacks-wallet-web/commit/a08a36df21c9601b6e7c7694481546383285478a))


### Reverts

* Revert "feat: add welcome page" ([4b7859a](https://github.com/hirosystems/stacks-wallet-web/commit/4b7859a4f926b7020967293bf8be98a2821e82e3))
* Revert "refactor: global styles" ([97b16c1](https://github.com/hirosystems/stacks-wallet-web/commit/97b16c1f50f1ef061ae71c35514ad4bf904ec93b))
* Revert "feat: add back up secret key page" ([95c3a76](https://github.com/hirosystems/stacks-wallet-web/commit/95c3a766b74b0670b18d4d4ba0428771020b3d38))
* Revert "feat: add set password page" ([4f44c48](https://github.com/hirosystems/stacks-wallet-web/commit/4f44c48ca68de9614b0027d7fa49c24e30ddba00))
* Revert "refactor: update existing styles to match changes" ([326b0b2](https://github.com/hirosystems/stacks-wallet-web/commit/326b0b2834884a143b9af0d96aa51bb71e8dabf0))
* Revert "refactor: add primary button" ([152fffd](https://github.com/hirosystems/stacks-wallet-web/commit/152fffd2d38edb05e338c37a1cc3466cdafde076))


### BREAKING CHANGES

* **release:** from stacks.js ([d09244c](https://github.com/hirosystems/stacks-wallet-web/commit/d09244c32fe27701074f1700a41bef0e8c4e31d1))

## [2.25.1](https://github.com/hirosystems/stacks-wallet-web/compare/v2.25.0...v2.25.1) (2022-01-18)


### Bug Fixes

* security vulnerability ([c9dd7f0](https://github.com/hirosystems/stacks-wallet-web/commit/c9dd7f0547460f72258ff684c25768d0d068926c))

# [2.25.0](https://github.com/hirosystems/stacks-wallet-web/compare/v2.24.1...v2.25.0) (2022-01-18)


### Bug Fixes

* breaking change from stacks.js ([d09244c](https://github.com/hirosystems/stacks-wallet-web/commit/d09244c32fe27701074f1700a41bef0e8c4e31d1))
* can't unlock wallet after upgrade ([1882c1f](https://github.com/hirosystems/stacks-wallet-web/commit/1882c1f101f1a0be2d52e2df0d8cc1dead9fbb0c)), closes [#2124](https://github.com/hirosystems/stacks-wallet-web/issues/2124)
* change wallet config default branch to main ([400a55a](https://github.com/hirosystems/stacks-wallet-web/commit/400a55a2aa5034d21329150e2a09c57a8b62e2d8))
* gaia config being fetched on every key press, closes [#2101](https://github.com/hirosystems/stacks-wallet-web/issues/2101) ([013ec9e](https://github.com/hirosystems/stacks-wallet-web/commit/013ec9e88d049559bff2f0eab79c35bb80e5d277))
* improve list render performance ([fd0154e](https://github.com/hirosystems/stacks-wallet-web/commit/fd0154ea3628a939f839ec8cfd829d84ea86a9bd))
* increase fee showing zero ([297afa8](https://github.com/hirosystems/stacks-wallet-web/commit/297afa891de11543bd482ca33551f88aac3bbbb9))
* long white screens ([ad41051](https://github.com/hirosystems/stacks-wallet-web/commit/ad4105155b6fd77bd13f9a118501784f4f247902))
* null rendering when accounts are undefined, closes [#2000](https://github.com/hirosystems/stacks-wallet-web/issues/2000) ([973dcc4](https://github.com/hirosystems/stacks-wallet-web/commit/973dcc447d6e8fc1cb71f1cb77e4601306766a97))
* onboarding route flashing ([b2e478b](https://github.com/hirosystems/stacks-wallet-web/commit/b2e478bb32088b8caf5cd259875e51d4db915a41))
* remove disabled regtest option from networks list ([6aafe89](https://github.com/hirosystems/stacks-wallet-web/commit/6aafe8964a3b262aa9d59ad48376779e3bb07109))
* remove gaia call when unlocking wallet ([837cef7](https://github.com/hirosystems/stacks-wallet-web/commit/837cef72d508a61b0b5c3e17c709a42204a59a0d)), closes [#1877](https://github.com/hirosystems/stacks-wallet-web/issues/1877)
* remove gaia call when unlocking wallet ([b717b03](https://github.com/hirosystems/stacks-wallet-web/commit/b717b03d125a6df88a2c0cb51402b6c3b3a6bcbf)), closes [#1877](https://github.com/hirosystems/stacks-wallet-web/issues/1877)
* remove inline source maps in prod ([46ddd28](https://github.com/hirosystems/stacks-wallet-web/commit/46ddd2829ecb40d1343143b39f7c03fc2038104c))
* rename localnet to devnet ([5e489d5](https://github.com/hirosystems/stacks-wallet-web/commit/5e489d5334f39595ca2a896e92965eef37a7bddb))
* render whole account list when fewer than 10 accounts ([abe1597](https://github.com/hirosystems/stacks-wallet-web/commit/abe1597c3b44a475500181d314156a434c02a52e))
* security vulnerability from audit ([c80cd98](https://github.com/hirosystems/stacks-wallet-web/commit/c80cd980905bc0efc198cb1b322a5b8fde79f36e))
* show fiat onramp buy button only on mainnet ([6d1df94](https://github.com/hirosystems/stacks-wallet-web/commit/6d1df94d07bbc7af4d58543b2dcf411b25b469b4)), closes [#2049](https://github.com/hirosystems/stacks-wallet-web/issues/2049)
* switch account failing test ([7efd8c9](https://github.com/hirosystems/stacks-wallet-web/commit/7efd8c989cf87181a01faf14a18ea60ab7dd4225))
* use saved hasSetPassword from storage ([f3cfbff](https://github.com/hirosystems/stacks-wallet-web/commit/f3cfbffc9686a4c76c8f3a21b4463b3f90140cc1))


### Features

* add metrics for fee estimation ([2788a9b](https://github.com/hirosystems/stacks-wallet-web/commit/2788a9b75d3ff09bee29b4af9b7556b313a1da01)), closes [#2041](https://github.com/hirosystems/stacks-wallet-web/issues/2041)
* add unlock waiting message ([e2cf9f1](https://github.com/hirosystems/stacks-wallet-web/commit/e2cf9f13df5a6b74a5c34a22ec841d83c41535c2)), closes [#2062](https://github.com/hirosystems/stacks-wallet-web/issues/2062)


### Reverts

* Revert "feat: add welcome page" ([4b7859a](https://github.com/hirosystems/stacks-wallet-web/commit/4b7859a4f926b7020967293bf8be98a2821e82e3))
* Revert "refactor: global styles" ([97b16c1](https://github.com/hirosystems/stacks-wallet-web/commit/97b16c1f50f1ef061ae71c35514ad4bf904ec93b))
* Revert "feat: add back up secret key page" ([95c3a76](https://github.com/hirosystems/stacks-wallet-web/commit/95c3a766b74b0670b18d4d4ba0428771020b3d38))
* Revert "feat: add set password page" ([4f44c48](https://github.com/hirosystems/stacks-wallet-web/commit/4f44c48ca68de9614b0027d7fa49c24e30ddba00))
* Revert "refactor: update existing styles to match changes" ([326b0b2](https://github.com/hirosystems/stacks-wallet-web/commit/326b0b2834884a143b9af0d96aa51bb71e8dabf0))
* Revert "refactor: add primary button" ([152fffd](https://github.com/hirosystems/stacks-wallet-web/commit/152fffd2d38edb05e338c37a1cc3466cdafde076))

## [2.24.1](https://github.com/hirosystems/stacks-wallet-web/compare/v2.24.0...v2.24.1) (2022-01-11)


### Reverts

* Revert "refactor(tx-signing): use unsigned serialised txs for fee estimation" ([114e1de](https://github.com/hirosystems/stacks-wallet-web/commit/114e1deaadf20e71dd39b7a30084a220af5ba616))
* Revert "refactor(tx-signing): remove implicit signing of transactions from send-form" ([3161ed7](https://github.com/hirosystems/stacks-wallet-web/commit/3161ed7ee72e1b1a0a3e4f6fbacd1d71b3709128))
* Revert "refactor(tx-signing): upgrade '@stacks/transaction', '@stacks/connect'" ([f4a3a52](https://github.com/hirosystems/stacks-wallet-web/commit/f4a3a52b9963fc7a507e1db84d5988e2ffc4c518))
* Revert "refactor(tx-signing): adjust unusual fee behaviour, kill signed tx file" ([e836021](https://github.com/hirosystems/stacks-wallet-web/commit/e836021913594d6efde0e2f56be35defbf1e3c36))
* Revert "fix: breaking change from stacks.js" ([1d9e6ba](https://github.com/hirosystems/stacks-wallet-web/commit/1d9e6ba9d83373a30c78178a92a6bb44c8464af5))
* Revert "chore: update webpack mode to 'production'" ([8b77480](https://github.com/hirosystems/stacks-wallet-web/commit/8b77480ab334e536738025c78d1bc7c4bd38f9bb))
* Revert "fix: change wallet config default branch to main" ([0e2159b](https://github.com/hirosystems/stacks-wallet-web/commit/0e2159b687b53768b1ae8e356312b9a939e7bbbc))
* Revert "refactor: app routes and account gate" ([2a2cb56](https://github.com/hirosystems/stacks-wallet-web/commit/2a2cb5648304c8f0d1c6d71f67828f5e2a31f7bf))
* Revert "refactor: address code comments" ([fa240f1](https://github.com/hirosystems/stacks-wallet-web/commit/fa240f100aac4ef3e0b83eca4d896c199e1f54f6))
* Revert "refactor: replace useChangeScreen with useNavigate" ([2ad1117](https://github.com/hirosystems/stacks-wallet-web/commit/2ad11175dd7aa473ef969cc2316f00d15f41075c))
* Revert "refactor(onboarding): use layout component for welcome page" ([31b787c](https://github.com/hirosystems/stacks-wallet-web/commit/31b787c820f387cb6e32d81ff8740386eb71977c))
* Revert "refactor: routing fixes and cleanup" ([18c9ca3](https://github.com/hirosystems/stacks-wallet-web/commit/18c9ca3e69e62f5f3247cd97bbc752c185af6b43))
* Revert "feat: add metrics for fee estimation" ([37ca5ae](https://github.com/hirosystems/stacks-wallet-web/commit/37ca5ae8f2e1316f59ac642acb53347967c184ef))
* Revert "fix: show fiat onramp buy button only on mainnet" ([813de90](https://github.com/hirosystems/stacks-wallet-web/commit/813de9088ffde25cd0583f68bf4db2ea5016ceaf))
* Revert "refactor: use container route with layout" ([a48e74b](https://github.com/hirosystems/stacks-wallet-web/commit/a48e74b3acf9cb1f11a4ed32b625f2926861aef0))
* Revert "refactor: header for layout route" ([9b51528](https://github.com/hirosystems/stacks-wallet-web/commit/9b51528d5a708112d8692453434541284d136a5d))
* Revert "fix: increase fee showing zero" ([9938d20](https://github.com/hirosystems/stacks-wallet-web/commit/9938d20ef9ff9b051e6e865b54a3e900433e2c27))
* Revert "fix: onboarding route flashing" ([c51972b](https://github.com/hirosystems/stacks-wallet-web/commit/c51972b09c55556f55b78835388296a879fbf573))
* Revert "refactor: tidy up <SwitchAccount /> component" ([60797e3](https://github.com/hirosystems/stacks-wallet-web/commit/60797e3e2ba6b5be7251f4c620a560ca958ca5b5))
* Revert "fix: null rendering when accounts are undefined, closes #2000" ([f5fdfc8](https://github.com/hirosystems/stacks-wallet-web/commit/f5fdfc846f903188c44bb832180c689e520fa9ef)), closes [#2000](https://github.com/hirosystems/stacks-wallet-web/issues/2000)
* Revert "fix: improve list render performance" ([72e2b7c](https://github.com/hirosystems/stacks-wallet-web/commit/72e2b7c94e89fc07c63a2a8e71a37ffbb3bd5b3c))
* Revert "refactor(deps): upgrade @stacks/wallet-sdk" ([0989ec6](https://github.com/hirosystems/stacks-wallet-web/commit/0989ec617d7b8724ac6104dcf21b7fc954f86507))
* Revert "refactor(deps): upgrade @stacks/{common,auth,network}" ([3c26ab2](https://github.com/hirosystems/stacks-wallet-web/commit/3c26ab2c886ff819c8ec3d7d36d26a281a93509d))
* Revert "refactor(deps): upgrade @stacks/{transactions,encryption}" ([6427aa1](https://github.com/hirosystems/stacks-wallet-web/commit/6427aa1e014c14eb488982f58c6cf84640568cbe))
* Revert "refactor: improve switch account behaviour" ([96727af](https://github.com/hirosystems/stacks-wallet-web/commit/96727af0b122250159dcdf3e979b20c1d942213a))
* Revert "refactor: move type definitions" ([359cf83](https://github.com/hirosystems/stacks-wallet-web/commit/359cf83f21c63e12ba1ad2b1e2d7f1131d6237b2))
* Revert "fix: use saved hasSetPassword from storage" ([9168f31](https://github.com/hirosystems/stacks-wallet-web/commit/9168f31f0b6bc09e122cc51d5c28c4fa6a2fca13))
* Revert "fix: switch account failing test" ([e68c7c2](https://github.com/hirosystems/stacks-wallet-web/commit/e68c7c20ed845b60f818ac40d929592875eaec5d))
* Revert "refactor: move vault utility" ([5bfba0a](https://github.com/hirosystems/stacks-wallet-web/commit/5bfba0acbe7c6d2c3750cc6784ef4f55f17607c9))
* Revert "fix: long white screens" ([489ec81](https://github.com/hirosystems/stacks-wallet-web/commit/489ec8155f3d5a26418e9adb2f1aaa7709269755))
* Revert "refactor: remove ShowDelay" ([df06783](https://github.com/hirosystems/stacks-wallet-web/commit/df06783645d0021a7d232e0d0fc22b33aa5c42c8))
* Revert "refactor: use React jsx transform" ([3524860](https://github.com/hirosystems/stacks-wallet-web/commit/3524860c7048f51ae60515c4bc675d2bf1c42425))
* Revert "refactor: remove unnecessary imports" ([564c2fb](https://github.com/hirosystems/stacks-wallet-web/commit/564c2fbdfb22885a8f9ac30c32eb436aea254a08))
* Revert "refactor: add test for unlock route" ([dbf69fc](https://github.com/hirosystems/stacks-wallet-web/commit/dbf69fc330eee8509efa46dac52f8fce75f207ba))
* Revert "fix: remove gaia call when unlocking wallet" ([2ffb470](https://github.com/hirosystems/stacks-wallet-web/commit/2ffb4700b63264d67e78ffe5ae6ede4c962710d7))
* Revert "refactor: move vault utility" ([6e0342e](https://github.com/hirosystems/stacks-wallet-web/commit/6e0342efdc3379c67c6fcfa0dec835b968edd5dc))
* Revert "fix: remove gaia call when unlocking wallet" ([098d90a](https://github.com/hirosystems/stacks-wallet-web/commit/098d90a9a5f28d85fc6187a5f0cb21d36097ee41))
* Revert "refactor: add test for unique route paths" ([f26c850](https://github.com/hirosystems/stacks-wallet-web/commit/f26c85059871338dd00e09b522a42356f897dd24))
* Revert "feat: add unlock waiting message" ([95c012a](https://github.com/hirosystems/stacks-wallet-web/commit/95c012a1249683ec802e2d42e2f5533384ea4218))
* Revert "refactor(folders): move components" ([2f977d6](https://github.com/hirosystems/stacks-wallet-web/commit/2f977d68517ade25711cf30890b0747c76eb6b72))
* Revert "refactor: rename linting actions" ([13814d7](https://github.com/hirosystems/stacks-wallet-web/commit/13814d734059ee2969f794c6182288bc2857cce8))
* Revert "refactor(deps): update client deps" ([91eadd6](https://github.com/hirosystems/stacks-wallet-web/commit/91eadd6715b4caa97a45d00afd3beb8291ae0b0c))
* Revert "refactor(deps): update dev deps" ([d528d77](https://github.com/hirosystems/stacks-wallet-web/commit/d528d7711d22db2180d2cfb610ef8b4095cb3e13))
* Revert "fix: render whole account list when fewer than 10 accounts" ([b568c85](https://github.com/hirosystems/stacks-wallet-web/commit/b568c85100185e1094de325e858588e22e7d9705))
* Revert "fix: gaia config being fetched on every key press, closes #2101" ([96546e5](https://github.com/hirosystems/stacks-wallet-web/commit/96546e50ab7e7f5d6022d86b31168be04ebe5713)), closes [#2101](https://github.com/hirosystems/stacks-wallet-web/issues/2101)
* Revert "fix: remove disabled regtest option from networks list" ([5fd24dd](https://github.com/hirosystems/stacks-wallet-web/commit/5fd24ddf5057130e7d435b9fe9063e1ffb7caeb4))

# [2.24.0](https://github.com/hirosystems/stacks-wallet-web/compare/v2.23.2...v2.24.0) (2022-01-11)


### Bug Fixes

* breaking change from stacks.js ([85666ae](https://github.com/hirosystems/stacks-wallet-web/commit/85666ae3d1f33fbbe61c24877702a7caa03facc1))
* change wallet config default branch to main ([69ce2f0](https://github.com/hirosystems/stacks-wallet-web/commit/69ce2f00ea92b294b6393712778adf5b08b0c1a7))
* gaia config being fetched on every key press, closes [#2101](https://github.com/hirosystems/stacks-wallet-web/issues/2101) ([2484d78](https://github.com/hirosystems/stacks-wallet-web/commit/2484d78a9545b36518a444230f37a4185387e215))
* improve list render performance ([df65dbb](https://github.com/hirosystems/stacks-wallet-web/commit/df65dbbeeb5cc0b8256b6efc1eee3994ffe11bd1))
* increase fee showing zero ([492ed1c](https://github.com/hirosystems/stacks-wallet-web/commit/492ed1c0073f254004f848ab0f2794edcdefa722))
* long white screens ([feba515](https://github.com/hirosystems/stacks-wallet-web/commit/feba5157e071800a514f44d7d5d2168bc6f61482))
* null rendering when accounts are undefined, closes [#2000](https://github.com/hirosystems/stacks-wallet-web/issues/2000) ([5d95af0](https://github.com/hirosystems/stacks-wallet-web/commit/5d95af09622a7ebe7470a29a1a1384aea4511b31))
* onboarding route flashing ([f2419d5](https://github.com/hirosystems/stacks-wallet-web/commit/f2419d524a86f2064e6e9f4abd5902d09050cd82))
* remove disabled regtest option from networks list ([6a68a2f](https://github.com/hirosystems/stacks-wallet-web/commit/6a68a2f728a5574344602a56fa904ff8f073f51b))
* remove gaia call when unlocking wallet ([2bc01d4](https://github.com/hirosystems/stacks-wallet-web/commit/2bc01d44668f7e9190570617ae8e65d6315d6787)), closes [#1877](https://github.com/hirosystems/stacks-wallet-web/issues/1877)
* remove gaia call when unlocking wallet ([e6c3947](https://github.com/hirosystems/stacks-wallet-web/commit/e6c39470b1b39af0e18104c65b33de5929370e41)), closes [#1877](https://github.com/hirosystems/stacks-wallet-web/issues/1877)
* render whole account list when fewer than 10 accounts ([8464b74](https://github.com/hirosystems/stacks-wallet-web/commit/8464b7497f48552128584aaf4791478ab17257a7))
* show fiat onramp buy button only on mainnet ([c02f138](https://github.com/hirosystems/stacks-wallet-web/commit/c02f1382186af0e7ae2da9b5d40216c73d9d14fa)), closes [#2049](https://github.com/hirosystems/stacks-wallet-web/issues/2049)
* switch account failing test ([982e3e9](https://github.com/hirosystems/stacks-wallet-web/commit/982e3e96649e44d62b21dc2623cb6f06bf67cdf8))
* use saved hasSetPassword from storage ([5e8869d](https://github.com/hirosystems/stacks-wallet-web/commit/5e8869dff511ea2083b35b12b169c840efd5a7fc))


### Features

* add metrics for fee estimation ([00690f2](https://github.com/hirosystems/stacks-wallet-web/commit/00690f2c981446a5989a5acae34581c57ac8d252)), closes [#2041](https://github.com/hirosystems/stacks-wallet-web/issues/2041)
* add unlock waiting message ([03ffdf7](https://github.com/hirosystems/stacks-wallet-web/commit/03ffdf7cb3ed33b2789e72254b9cf01be5f803b7)), closes [#2062](https://github.com/hirosystems/stacks-wallet-web/issues/2062)

## [2.23.2](https://github.com/hirosystems/stacks-wallet-web/compare/v2.23.1...v2.23.2) (2021-12-08)


### Bug Fixes

* change transak copy for US citizens ([3353fa3](https://github.com/hirosystems/stacks-wallet-web/commit/3353fa331afd0babd2c37999175fa8f2db34a9c8)), closes [#2051](https://github.com/hirosystems/stacks-wallet-web/issues/2051)

## [2.23.1](https://github.com/hirosystems/stacks-wallet-web/compare/v2.23.0...v2.23.1) (2021-12-07)


### Bug Fixes

* remove a fullstop from the password placeholder ([e6f865a](https://github.com/hirosystems/stacks-wallet-web/commit/e6f865a6e377208aab7f930a7eb09129b6c70368))

# [2.23.0](https://github.com/hirosystems/stacks-wallet-web/compare/v2.22.0...v2.23.0) (2021-12-07)


### Bug Fixes

* don't warn of no writekey in dev by default ([d6f4d2b](https://github.com/hirosystems/stacks-wallet-web/commit/d6f4d2b5dc171c06b0555afa8475539cdb7582eb))
* lint issue on transak-helper ([46a95e5](https://github.com/hirosystems/stacks-wallet-web/commit/46a95e5f6c0a9edbd8336e3e326f00b17d2c6af5))
* send form white screen ([a8c7e74](https://github.com/hirosystems/stacks-wallet-web/commit/a8c7e74d672f90c71378eb63a1c1a454661df568))
* use transak production env for preview build ([3e9e432](https://github.com/hirosystems/stacks-wallet-web/commit/3e9e43223dce6c7bb4d0fd915abb80617f8c6ecc))


### Features

* add fiat onramp UI + providers ([14f6cba](https://github.com/hirosystems/stacks-wallet-web/commit/14f6cbab8eaed16f5eb93871ec0dbb84a2c08daa))

# [2.22.0](https://github.com/hirosystems/stacks-wallet-web/compare/v2.21.5...v2.22.0) (2021-11-29)


### Features

* inconsequential comment change to trigger release, part 3 ([f766b5d](https://github.com/hirosystems/stacks-wallet-web/commit/f766b5d5a6c360a21b6a34c10de95571937e8b01))

## [2.21.5](https://github.com/hirosystems/stacks-wallet-web/compare/v2.21.4...v2.21.5) (2021-11-29)


### Bug Fixes

* inconsequential comment change to trigger release, part 2 ([fc4d922](https://github.com/hirosystems/stacks-wallet-web/commit/fc4d9229e86dd08772973197f65c170a70879192))

## [2.21.4](https://github.com/hirosystems/stacks-wallet-web/compare/v2.21.3...v2.21.4) (2021-11-29)


### Bug Fixes

* empty commit, trigger new release ([99578bd](https://github.com/hirosystems/stacks-wallet-web/commit/99578bdd1eabbba16c667cf477c6c5de0ce28e1b))
* inconsequential comment change to trigger release ([a3c6b2b](https://github.com/hirosystems/stacks-wallet-web/commit/a3c6b2ba12ed562354d31342580a10f83bc970be))

## [2.21.3](https://github.com/hirosystems/stacks-wallet-web/compare/v2.21.2...v2.21.3) (2021-11-29)


### Bug Fixes

* send form white screen ([a8c7e74](https://github.com/hirosystems/stacks-wallet-web/commit/a8c7e74d672f90c71378eb63a1c1a454661df568))
* add max values for fee estimations ([06bda04](https://github.com/hirosystems/stacks-wallet-web/commit/06bda04414cddae596b5d17612ba433e21f1d461))
* update max fee estimation ([98f2186](https://github.com/hirosystems/stacks-wallet-web/commit/98f21861aac0ca98982912638e48fa286a62f968))

## [2.21.2](https://github.com/hirosystems/stacks-wallet-web/compare/v2.21.1...v2.21.2) (2021-11-26)


### Bug Fixes

* fallback to default estimations ([c3044ff](https://github.com/hirosystems/stacks-wallet-web/commit/c3044ffcbd3628a1d90f79d26e4b985b1d4a31ad))
* fees query network ([ccb3182](https://github.com/hirosystems/stacks-wallet-web/commit/ccb3182774fdd7a30763629502406d407d629547))
* logger import ([2ccae06](https://github.com/hirosystems/stacks-wallet-web/commit/2ccae06bf718ab8a814b6d03deedb4e0f1059455))
* remove fee form suspense ([e2f2e2c](https://github.com/hirosystems/stacks-wallet-web/commit/e2f2e2c76916d4dfed35b921bd2b2e375773b63d))

## [2.21.1](https://github.com/hirosystems/stacks-wallet-web/compare/v2.21.0...v2.21.1) (2021-11-24)

### Bug Fixes

- logger import ([828aa50](https://github.com/hirosystems/stacks-wallet-web/commit/828aa50f65a09e3980ea0e6db64a01c6b0c335a3))

# [2.21.0](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.3...v2.21.0) (2021-11-24)

### Bug Fixes

- close estimations on click outside ([45bec9a](https://github.com/hirosystems/stacks-wallet-web/commit/45bec9a90329e70b98c64b4490b6e52869bdd5fd))
- custom fee state after fallback ([6d2a02e](https://github.com/hirosystems/stacks-wallet-web/commit/6d2a02e32e45015f98b5cc9c1c0de6f8692c65ee))
- fee estimations fail default ([72b25cb](https://github.com/hirosystems/stacks-wallet-web/commit/72b25cbaafa863b76e486d7050d3f4c7224c9625))
- mempool txs query atom ([73f5b01](https://github.com/hirosystems/stacks-wallet-web/commit/73f5b016fb996015c67adb55f774754d52675a33))
- replace by fee cache bug, closes [#1975](https://github.com/hirosystems/stacks-wallet-web/issues/1975) ([a99a14e](https://github.com/hirosystems/stacks-wallet-web/commit/a99a14e7c49dc5f8171bf62588298807a62327c8))
- send max calc ([9e05290](https://github.com/hirosystems/stacks-wallet-web/commit/9e052909a098f60e4bbbd7b564fb90903e0dab6a))
- send max toast ([a66c62d](https://github.com/hirosystems/stacks-wallet-web/commit/a66c62dc8689a67c784b0b25ae710d8ab9e8422e))
- **types:** loose tx type results in stable release bugs ([3b17de0](https://github.com/hirosystems/stacks-wallet-web/commit/3b17de0a243f95f0acf82af733ee779d6f40efda))
- use react-query for mempool calls ([f45edff](https://github.com/hirosystems/stacks-wallet-web/commit/f45edff2ec777faf7d555ed8b0500441fbb1757e))

### Features

- add segment integration ([0999431](https://github.com/hirosystems/stacks-wallet-web/commit/0999431bf05bf03328b5a4c5e8d75c341a7f8539)), closes [#1748](https://github.com/hirosystems/stacks-wallet-web/issues/1748)
- use fee estimation endpoint ([78fd652](https://github.com/hirosystems/stacks-wallet-web/commit/78fd65269eb9d2a38670676cf82a09492f1f01a0))

# [2.21.0-dev.9](https://github.com/hirosystems/stacks-wallet-web/compare/v2.21.0-dev.8...v2.21.0-dev.9) (2021-11-24)

### Bug Fixes

- mempool txs query atom ([605e1e7](https://github.com/hirosystems/stacks-wallet-web/commit/605e1e74b2aaa11d5832737bdb09ff7f59404353))

## [2.20.3](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.2...v2.20.3) (2021-11-12)

### Bug Fixes

- mempool txs query atom ([605e1e7](https://github.com/hirosystems/stacks-wallet-web/commit/605e1e74b2aaa11d5832737bdb09ff7f59404353))

## [2.20.3-dev.1](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.2...v2.20.3-dev.1) (2021-11-11)

### Bug Fixes

- mempool txs query atom ([73f5b01](https://github.com/hirosystems/stacks-wallet-web/commit/73f5b016fb996015c67adb55f774754d52675a33))

## [2.20.2-dev.2](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.2-dev.1...v2.20.2-dev.2) (2021-11-11)

### Bug Fixes

- mempool txs query atom ([b707d87](https://github.com/hirosystems/stacks-wallet-web/commit/b707d87c490fb08c63cb14fa96b28c49ded0b8ff))

## [2.20.2](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1...v2.20.2) (2021-11-11)

### Bug Fixes

- sip010 token transfer not going through ([e9258ae](https://github.com/hirosystems/stacks-wallet-web/commit/e9258ae27769ed2328dc68fce4e5dd953b34c7d5)), closes [#1915](https://github.com/hirosystems/stacks-wallet-web/issues/1915)

## [2.20.2-dev.1](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1...v2.20.2-dev.1) (2021-11-11)

### Bug Fixes

- sip010 token transfer not going through ([7da7d51](https://github.com/hirosystems/stacks-wallet-web/commit/7da7d5149574c855f490d0ec162f0ca11704700e)), closes [#1915](https://github.com/hirosystems/stacks-wallet-web/issues/1915)

## [2.20.1](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.0...v2.20.1) (2021-11-10)

### Bug Fixes

- add preview release images, delete unused assets ([89a49fd](https://github.com/hirosystems/stacks-wallet-web/commit/89a49fd09e8d882383c41b29ca6859348dba86fc))
- clean hex value for deserializeCV ([377031d](https://github.com/hirosystems/stacks-wallet-web/commit/377031d003632116bf3fd639fcdc278bb06392b5))
- **csp:** chrome 96 regression breaks argon2 ([4492ed2](https://github.com/hirosystems/stacks-wallet-web/commit/4492ed229eb65ad39e0903ee131011cbc82bedfa))
- **csp:** external images broken ([91331d9](https://github.com/hirosystems/stacks-wallet-web/commit/91331d9133a31e36a66368ef61ca2b09e8532e5d))
- generate release with preview name ([0baaced](https://github.com/hirosystems/stacks-wallet-web/commit/0baaced4189e59419bfdc27f6ea7c054752aa195))
- local dev not injecting provider, closes [#1795](https://github.com/hirosystems/stacks-wallet-web/issues/1795) ([d95b413](https://github.com/hirosystems/stacks-wallet-web/commit/d95b413f38fc3a706a169aa70bbf8573a17284cd))
- manifest app version doesn't include -dev ([8660262](https://github.com/hirosystems/stacks-wallet-web/commit/8660262fe56e267df517efc31e4f249adc1feda5))
- qa build url ([eae4633](https://github.com/hirosystems/stacks-wallet-web/commit/eae4633d5f4a5124c46d5f97920e1f3853e56fb8))
- show stx transfers from contract call ([514cc61](https://github.com/hirosystems/stacks-wallet-web/commit/514cc617a9fcf1f5dae19ba31ebb231496587dec)), closes [#1713](https://github.com/hirosystems/stacks-wallet-web/issues/1713)
- tidy CI jobs, update readme ([1496af9](https://github.com/hirosystems/stacks-wallet-web/commit/1496af9c12f64113eb351ea2af57aa4765abd1c2))
- upload release as zip ([d244bfa](https://github.com/hirosystems/stacks-wallet-web/commit/d244bfaa65b00cafa0c8ad8b899cad5427b7e359))
- upload release assets ([efd278a](https://github.com/hirosystems/stacks-wallet-web/commit/efd278a972af847a83c3bbbfb552db1fba11a676))
- use semantic release ([7eba15a](https://github.com/hirosystems/stacks-wallet-web/commit/7eba15a7ae45273dea13fec6f01f9c745d166dfb))
- wallet dependence on gaia, closes [#1732](https://github.com/hirosystems/stacks-wallet-web/issues/1732) ([c5b86dd](https://github.com/hirosystems/stacks-wallet-web/commit/c5b86dd5bcd1b7c93fd6dd7a66a2d30803a2f0b7))

## [2.20.1-dev.12](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.11...v2.20.1-dev.12) (2021-11-10)

### Bug Fixes

- **csp:** chrome 96 regression breaks argon2 ([f5b064c](https://github.com/hirosystems/stacks-wallet-web/commit/f5b064cb2d2293d79292768b3e3a3391e543134e))

## [2.20.1-dev.11](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.10...v2.20.1-dev.11) (2021-11-09)

### Bug Fixes

- clean hex value for deserializeCV ([4d98347](https://github.com/hirosystems/stacks-wallet-web/commit/4d98347ba61b1a48dbf5950782d2e70b1650a17d))

## [2.20.1-dev.10](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.9...v2.20.1-dev.10) (2021-11-09)

### Bug Fixes

- show stx transfers from contract call ([9bd7d10](https://github.com/hirosystems/stacks-wallet-web/commit/9bd7d10f8b58f3735153f0b924a91742aeae1654)), closes [#1713](https://github.com/hirosystems/stacks-wallet-web/issues/1713)

## [2.20.1-dev.9](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.8...v2.20.1-dev.9) (2021-11-02)

### Bug Fixes

- qa build url ([cfa5abe](https://github.com/hirosystems/stacks-wallet-web/commit/cfa5abe1d6290dd0774be4a99bcbe68ad620cb10))

## [2.20.1-dev.8](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.7...v2.20.1-dev.8) (2021-10-30)

### Bug Fixes

- **csp:** external images broken ([29ca0f3](https://github.com/hirosystems/stacks-wallet-web/commit/29ca0f30eab3ccd78a4613fb59a57da2373c515f))

## [2.20.1-dev.7](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.6...v2.20.1-dev.7) (2021-10-29)

### Bug Fixes

- add preview release images, delete unused assets ([01c3121](https://github.com/hirosystems/stacks-wallet-web/commit/01c31218f3771e2434fc95a5b95ee20c68746632))

## [2.20.1-dev.6](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.5...v2.20.1-dev.6) (2021-10-29)

### Bug Fixes

- generate release with preview name ([bdaa8bf](https://github.com/hirosystems/stacks-wallet-web/commit/bdaa8bfde95d04bb7aa355be217a20b28389b139))

## [2.20.1-dev.5](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.4...v2.20.1-dev.5) (2021-10-29)

### Bug Fixes

- manifest app version doesn't include -dev ([83fd238](https://github.com/hirosystems/stacks-wallet-web/commit/83fd2389a4b387c19d047bf501abc015a46dd680))

## [2.20.1-dev.4](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.3...v2.20.1-dev.4) (2021-10-29)

### Bug Fixes

- tidy CI jobs, update readme ([3c55a11](https://github.com/hirosystems/stacks-wallet-web/commit/3c55a11b497e68ba210444c1b3faab55ea73f5e8))

## [2.20.1-dev.3](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.2...v2.20.1-dev.3) (2021-10-29)

### Bug Fixes

- upload release as zip ([0b9d471](https://github.com/hirosystems/stacks-wallet-web/commit/0b9d47157ab457870c7d848f4c2a3794d5749caf))

## [2.20.1-dev.2](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.1-dev.1...v2.20.1-dev.2) (2021-10-29)

### Bug Fixes

- upload release assets ([0fc66ea](https://github.com/hirosystems/stacks-wallet-web/commit/0fc66ea4dd7751a8d50fea0a2336af6dc029aac5))

## [2.20.1-dev.1](https://github.com/hirosystems/stacks-wallet-web/compare/v2.20.0...v2.20.1-dev.1) (2021-10-29)

### Bug Fixes

- local dev not injecting provider, closes [#1795](https://github.com/hirosystems/stacks-wallet-web/issues/1795) ([d95b413](https://github.com/hirosystems/stacks-wallet-web/commit/d95b413f38fc3a706a169aa70bbf8573a17284cd))
- use semantic release ([24b752c](https://github.com/hirosystems/stacks-wallet-web/commit/24b752c952bc2b1628cbedfbe163482964fd5f0c))
- wallet dependence on gaia, closes [#1732](https://github.com/hirosystems/stacks-wallet-web/issues/1732) ([c5b86dd](https://github.com/hirosystems/stacks-wallet-web/commit/c5b86dd5bcd1b7c93fd6dd7a66a2d30803a2f0b7))

# Changelog

## 2.20.0

### Minor Changes

- [#1720](https://github.com/blockstack/stacks-wallet-web/pull/1720) [`dad028e8d`](https://github.com/blockstack/stacks-wallet-web/commit/dad028e8d8a417dadfb75ad8b02e08712aa07595) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Add a new state that asks users for permission to record application diagnostics

## 2.19.4

### Patch Changes

- [#1804](https://github.com/blockstack/stacks-wallet-web/pull/1804) [`8cb4909d6`](https://github.com/blockstack/stacks-wallet-web/commit/8cb4909d635081bbe2270fec137754138cee9e59) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This fixes passing in a custom fee not working for apps using the wallet.

* [#1785](https://github.com/blockstack/stacks-wallet-web/pull/1785) [`55684b197`](https://github.com/blockstack/stacks-wallet-web/commit/55684b197c3b196d8a1377a1c435d16010addea7) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This fixes signing out from the locked transaction popup.

- [#1798](https://github.com/blockstack/stacks-wallet-web/pull/1798) [`0e4b9c7c5`](https://github.com/blockstack/stacks-wallet-web/commit/0e4b9c7c5ade4a86905f78557ff10559fce150a1) Thanks [@kyranjamie](https://github.com/kyranjamie)! - This fixes breaking changes caused by updating webpack-dev-server to pass security audit checks.

## 2.19.3

### Patch Changes

- [#1753](https://github.com/blockstack/stacks-wallet-web/pull/1753) [`6eab6659b`](https://github.com/blockstack/stacks-wallet-web/commit/6eab6659b5572d166610be656020268046d84f92) Thanks [@aulneau](https://github.com/aulneau)! - This update makes it so any drawer component (network select, account select, etc) will be a modal when used in larger screens, but a drawer when used in the extension view (smaller widths).

* [#1779](https://github.com/blockstack/stacks-wallet-web/pull/1779) [`b33e34834`](https://github.com/blockstack/stacks-wallet-web/commit/b33e348341bcc322b5e11cc0f3c95174c80596f9) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This adds rendering the stx post condition in the list of post conditions.

- [#1767](https://github.com/blockstack/stacks-wallet-web/pull/1767) [`15d2ba6cd`](https://github.com/blockstack/stacks-wallet-web/commit/15d2ba6cd02bf2a7f1121297dea9cf58ccca6860) Thanks [@beguene](https://github.com/beguene)! - Display Regtest instead of Testnet when the network is Regtest.

* [#1754](https://github.com/blockstack/stacks-wallet-web/pull/1754) [`d6493cdbc`](https://github.com/blockstack/stacks-wallet-web/commit/d6493cdbc0ecb45c36464c36d33f62d30b6014d2) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This fixes how asset metadata displays in post conditions. It should display correctly now even if a user doesn't have that token in their account.

- [#1752](https://github.com/blockstack/stacks-wallet-web/pull/1752) [`91cf29e88`](https://github.com/blockstack/stacks-wallet-web/commit/91cf29e8811c46cc6ce382b42b9ed7acdc7a874b) Thanks [@aulneau](https://github.com/aulneau)! - This update fixes the loading state for when the status of a network is not yet available.

* [#1780](https://github.com/blockstack/stacks-wallet-web/pull/1780) [`c90ed29f0`](https://github.com/blockstack/stacks-wallet-web/commit/c90ed29f0bf24e2d14d4eee4dee4f2cb59618bd5) Thanks [@beguene](https://github.com/beguene)! - This fixes the test-app post conditions that were causing contract call failures.

- [#1777](https://github.com/blockstack/stacks-wallet-web/pull/1777) [`589a96fdc`](https://github.com/blockstack/stacks-wallet-web/commit/589a96fdcab5e937b3678be2556af82bf6457e8a) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This fixes filtering local transactions using the safely formatted hex txid.

## 2.19.2

### Patch Changes

- [#1762](https://github.com/blockstack/stacks-wallet-web/pull/1762) [`4f4b9637b`](https://github.com/blockstack/stacks-wallet-web/commit/4f4b9637ba4d477ce0545bba3b924fe45509eaed) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This fixes deploying contracts with local transactions.

## 2.19.1

### Patch Changes

- [#1758](https://github.com/blockstack/stacks-wallet-web/pull/1758) [`3890723ae`](https://github.com/blockstack/stacks-wallet-web/commit/3890723ae2429cddb0c546017ccbbd3a15cdb7d9) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Fixes bug where it auto-scrolls up

## 2.19.0

### Minor Changes

- [#1738](https://github.com/blockstack/stacks-wallet-web/pull/1738) [`b470c7a57`](https://github.com/blockstack/stacks-wallet-web/commit/b470c7a574b67e3dfc9547b03c13300222026ac5) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Adds messages sourced from the main branch of the repository

* [#1726](https://github.com/blockstack/stacks-wallet-web/pull/1726) [`9fe5b22df`](https://github.com/blockstack/stacks-wallet-web/commit/9fe5b22df156ca9d859d4147e86a87395536345c) Thanks [@aulneau](https://github.com/aulneau)! - This update improves the way in which the wallet persists user activity. When a user sends a transaction, the wallet will store a version of it locally. This improves the performance and feedback of the application.

### Patch Changes

- [#1737](https://github.com/blockstack/stacks-wallet-web/pull/1737) [`92aee034b`](https://github.com/blockstack/stacks-wallet-web/commit/92aee034b31c9a1a79fa2ff7ef1f9391e8acfae1) Thanks [@josecanhelp](https://github.com/josecanhelp)! - This change allows a wallet with zero STX balance to sign a sponsored transaction.

## 2.18.0

### Minor Changes

- [#1704](https://github.com/blockstack/stacks-wallet-web/pull/1704) [`81e039c97`](https://github.com/blockstack/stacks-wallet-web/commit/81e039c97479637c93652f1a615da69339fbae39) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Makes use of a WebWorker to prevent main thread from lagging during unlock operation

### Patch Changes

- [#1741](https://github.com/blockstack/stacks-wallet-web/pull/1741) [`2655b649c`](https://github.com/blockstack/stacks-wallet-web/commit/2655b649ceebb74bcdd57532757290dca2068579) Thanks [@kyranjamie](https://github.com/kyranjamie)! - This adds the sign out drawer to the lock screen so users can sign out.

* [#1708](https://github.com/blockstack/stacks-wallet-web/pull/1708) [`5aa6498a3`](https://github.com/blockstack/stacks-wallet-web/commit/5aa6498a3dd4d6c6675e82d368bb7082b282dbee) Thanks [@aulneau](https://github.com/aulneau)! - This update adds the global variable VERSION to all cache keys for any data that is persisted in local storage. This makes it so when the wallet updates, there isn't any leaking between versions and avoids using possibily outdated/stale data.

## 2.17.0

### Minor Changes

- [#1691](https://github.com/blockstack/stacks-wallet-web/pull/1691) [`4b685917b`](https://github.com/blockstack/stacks-wallet-web/commit/4b685917bf8e3a887e2d60593f87b4da4af60614) Thanks [@aulneau](https://github.com/aulneau)! - This update removes a lot of the code we implemented to determine if a fungible token asset can be transferred/conforms to [SIP-010](https://github.com/stacksgov/sips/blob/main/sips/sip-010/sip-010-fungible-token-standard.md), and in place we now rely on the new [token metadata endpoints](https://blockstack.github.io/stacks-blockchain-api/#tag/tokens) in the stacks-blockchain-api.

  **NOTICE: This update removes the ability to transfer certain fungible tokens that conformed to an older version of SIP-010 (with no memo).**

* [#1686](https://github.com/blockstack/stacks-wallet-web/pull/1686) [`88682a9b3`](https://github.com/blockstack/stacks-wallet-web/commit/88682a9b39c3690d71509b2a7c3357edce6f0315) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Adds a confirmation page before user is able to delete their wallet

### Patch Changes

- [#1530](https://github.com/blockstack/stacks-wallet-web/pull/1530) [`990bec70a`](https://github.com/blockstack/stacks-wallet-web/commit/990bec70aa797857d14f23f72accdb19f415fbd4) Thanks [@beguene](https://github.com/beguene)! - Use the api to get possible nonce and fallback to default nonce calculation if the api is not available.

* [#1617](https://github.com/blockstack/stacks-wallet-web/pull/1617) [`e38fafbe6`](https://github.com/blockstack/stacks-wallet-web/commit/e38fafbe6aeb2053889e9f43f117d6dca1236d4e) Thanks [@aulneau](https://github.com/aulneau)! - This update enables some additional persistence of query data, such as transactions and balances. This makes it so the wallet can be more performant when opening it.

- [#1669](https://github.com/blockstack/stacks-wallet-web/pull/1669) [`fa4b49721`](https://github.com/blockstack/stacks-wallet-web/commit/fa4b49721782eb61fd74c93d9bcce1364a311d15) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This relocates the 'Learn more' text link in the advanced settings drawer.

## 2.16.0

### Minor Changes

- [#1639](https://github.com/blockstack/stacks-wallet-web/pull/1639) [`c051ef56c`](https://github.com/blockstack/stacks-wallet-web/commit/c051ef56c53b72903837fd05691013ebc12b7b86) Thanks [@aulneau](https://github.com/aulneau)! - This update adds the ability for users to update the fee for a given transaction. Additionally, users can now update the fee for a pending transaction (replace by fee), to increase the miner incentives for that transaction.

## 2.15.2

### Patch Changes

- [#1625](https://github.com/blockstack/stacks-wallet-web/pull/1625) [`98fcd2548`](https://github.com/blockstack/stacks-wallet-web/commit/98fcd254851ee4846bcbc81fb1958d7e4411c26c) Thanks [@aulneau](https://github.com/aulneau)! - This update adds a warning for any contract call that is set to ALLOW mode -- if a user is signing a transaction with ALLOW mode set, any post conditions displayed will have no effect.

## 2.15.1

### Patch Changes

- [#1619](https://github.com/blockstack/stacks-wallet-web/pull/1619) [`df283d3cc`](https://github.com/blockstack/stacks-wallet-web/commit/df283d3ccb3e164c1eb3168181c12ab8e5b36203) Thanks [@aulneau](https://github.com/aulneau)! - Fixes bug where balance contained a comma, thus preventing it from being converted to a BigNumber

* [#1614](https://github.com/blockstack/stacks-wallet-web/pull/1614) [`7a0cd03a2`](https://github.com/blockstack/stacks-wallet-web/commit/7a0cd03a253ab1cd4f750ec663da8829306c0fd2) Thanks [@aulneau](https://github.com/aulneau)! - This fixes a rare bug where if an address has received more transactions than we fetch for, it would assume it was a fresh account and return the incorrect nonce.

## 2.15.0

### Minor Changes

- [#1572](https://github.com/blockstack/stacks-wallet-web/pull/1572) [`46a90aab`](https://github.com/blockstack/stacks-wallet-web/commit/46a90aabd16dc2b7b403d692c5dfd73665de9401) Thanks [@aulneau](https://github.com/aulneau)! - This update improves data fetching in the wallet in a few ways: removes duplicate fetches, migrates legacy fetching methods to use the api client from `@stacks/blockchain-api-client`, and fixes a few network related bugs. Additionally, work has started on improving how quickly the UI is available, working towards progressive upgrading of components as new data is available. Lastly, the foundation has been laid to enable use of persistence of certain data, enabling faster boot times.

### Patch Changes

- [#1598](https://github.com/blockstack/stacks-wallet-web/pull/1598) [`7d8bbbf0`](https://github.com/blockstack/stacks-wallet-web/commit/7d8bbbf067c49fb3349775a519db043b51472fe0) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This fixes an error in the wallet by initializing the merged asset balance as a BigNumber.

* [#1599](https://github.com/blockstack/stacks-wallet-web/pull/1599) [`ee45a99d`](https://github.com/blockstack/stacks-wallet-web/commit/ee45a99dcfe64128448ad71121b140da6e2333a4) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Fixes bug where users are unable to set the extension to the localhost url, owing to stacks.js changes

## 2.14.0

### Minor Changes

- [#1430](https://github.com/blockstack/stacks-wallet-web/pull/1430) [`371c9545`](https://github.com/blockstack/stacks-wallet-web/commit/371c95450519c9d51d7875140e40a6bd5f1d5907) Thanks [@beguene](https://github.com/beguene)! - Add microblocks support. Show both balances, anchored and unanchored, with the anchored one as primary balance. Add an indicator to signal microblock in the asset icon.

### Patch Changes

- [#1578](https://github.com/blockstack/stacks-wallet-web/pull/1578) [`aeb48279`](https://github.com/blockstack/stacks-wallet-web/commit/aeb4827919923bc5205d35bb9723f45db5b8fadf) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This updates the STX token icon in all places to match current designs.

* [#1573](https://github.com/blockstack/stacks-wallet-web/pull/1573) [`40f49ace`](https://github.com/blockstack/stacks-wallet-web/commit/40f49ace0d8fe77f6c1ee5722269be1cbfed3ce6) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This fixes the placement of the tooltip when copying the user address in the wallet header.

- [#1564](https://github.com/blockstack/stacks-wallet-web/pull/1564) [`eca0ae6f`](https://github.com/blockstack/stacks-wallet-web/commit/eca0ae6f5bbcc935ba3e40c28680b358dd096ded) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This updates the network badge by removing 'mode' from the label. It now reads 'Testnet'.

## 2.13.0

### Minor Changes

- [#1540](https://github.com/blockstack/stacks-wallet-web/pull/1540) [`92f2cd26`](https://github.com/blockstack/stacks-wallet-web/commit/92f2cd26d946e0dcd066645c85140ff7aa022255) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Adds a context menu that opens the wallet in full page mode

### Patch Changes

- [#1561](https://github.com/blockstack/stacks-wallet-web/pull/1561) [`5947b000`](https://github.com/blockstack/stacks-wallet-web/commit/5947b000e22040220148262256cd65d97b263aef) Thanks [@aulneau](https://github.com/aulneau)! - This fixes a bug where the overflow for the choose account screen was incorrectly set, thus preventing users from scrolling down to accounts that were off screen.

## 2.12.5

### Patch Changes

- [#1521](https://github.com/blockstack/stacks-wallet-web/pull/1521) [`77a33488`](https://github.com/blockstack/stacks-wallet-web/commit/77a334883bcb4c191ca3757aa40930f994ac0d89) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This fixes inconsistent balances shown in the send form when a user has locked STX. It also fixes an inaccurate validation error shown when sending max STX.

* [#1512](https://github.com/blockstack/stacks-wallet-web/pull/1512) [`b7952eae`](https://github.com/blockstack/stacks-wallet-web/commit/b7952eaeab8b51dc8cb1934485622588742e2265) Thanks [@beguene](https://github.com/beguene)! - Fix font-weight issue in activity list.

- [#1455](https://github.com/blockstack/stacks-wallet-web/pull/1455) [`b882838e`](https://github.com/blockstack/stacks-wallet-web/commit/b882838e2bd8995fe4fc2fbbe06e424640019dea) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This updates the wallet name in all places to Hiro Wallet.

* [#1522](https://github.com/blockstack/stacks-wallet-web/pull/1522) [`cc6741bb`](https://github.com/blockstack/stacks-wallet-web/commit/cc6741bbdbef3a6291fcd027adcac60a10513e9b) Thanks [@aulneau](https://github.com/aulneau)! - This update refactors the way we implement the helper library `@stacks/blockchain-api-client`.

## 2.12.4

### Patch Changes

- [#1491](https://github.com/blockstack/stacks-wallet-web/pull/1491) [`52ee7587`](https://github.com/blockstack/stacks-wallet-web/commit/52ee758737925bef3458953cd0f6e37410218945) Thanks [@beguene](https://github.com/beguene)! - Change wording of the select asset dropdown.

* [#1494](https://github.com/blockstack/stacks-wallet-web/pull/1494) [`12821cd0`](https://github.com/blockstack/stacks-wallet-web/commit/12821cd06f0eb591b71aaa1836c3c5c0fd453cc4) Thanks [@aulneau](https://github.com/aulneau)! - This fixes an issue where a promise was caught when it should not have been.

## 2.12.3

### Patch Changes

- [#1487](https://github.com/blockstack/stacks-wallet-web/pull/1487) [`f00fa93f`](https://github.com/blockstack/stacks-wallet-web/commit/f00fa93f6ce7bc04b7436af45bfc4cc2e7042d52) Thanks [@beguene](https://github.com/beguene)! - Fix button border-radius to be consistent. Set it to 10px.

* [#1481](https://github.com/blockstack/stacks-wallet-web/pull/1481) [`211990f5`](https://github.com/blockstack/stacks-wallet-web/commit/211990f56b89a047e6485fee95bc4deb170b9eed) Thanks [@beguene](https://github.com/beguene)! - Some addresses were displayed with 6 or 4 char on both side of the ellipsis. This makes it consistent with 4 char.

- [#1456](https://github.com/blockstack/stacks-wallet-web/pull/1456) [`fa37093c`](https://github.com/blockstack/stacks-wallet-web/commit/fa37093c987af77e78dca2a49042f8a9e2e1aa30) Thanks [@beguene](https://github.com/beguene)! - Some text are displayed with font-feature ss01 on, some off. This removes all those font-features to keep the font display consistent across pages.

* [#1468](https://github.com/blockstack/stacks-wallet-web/pull/1468) [`a8abb466`](https://github.com/blockstack/stacks-wallet-web/commit/a8abb466d73bb12488d55d8eb89e0135a8b2c4bd) Thanks [@aulneau](https://github.com/aulneau)! - This fixes a bug where the principal contained in a postcondition would be incorrectly changed when it was a contract principal.

- [#1467](https://github.com/blockstack/stacks-wallet-web/pull/1467) [`0532be11`](https://github.com/blockstack/stacks-wallet-web/commit/0532be1109aa8e0a99162bb6d109dae30fb69495) Thanks [@aulneau](https://github.com/aulneau)! - This adds validation and error messaging for when a contract call has been initiated with an invalid stacks address passed for the contract address

* [#1489](https://github.com/blockstack/stacks-wallet-web/pull/1489) [`7110398a`](https://github.com/blockstack/stacks-wallet-web/commit/7110398a270116c0872ca74f939b6b57bff7a8be) Thanks [@aulneau](https://github.com/aulneau)! - When selecting an account to authenticate an application, you can now see the balances for each account.

- [#1485](https://github.com/blockstack/stacks-wallet-web/pull/1485) [`662bb4c8`](https://github.com/blockstack/stacks-wallet-web/commit/662bb4c88a532408b99ac7d58d101ba828b6ba42) Thanks [@beguene](https://github.com/beguene)! - Make all our Open Sauce titles consistent with their font-weight. Set it to medium

* [#1448](https://github.com/blockstack/stacks-wallet-web/pull/1448) [`45e7d207`](https://github.com/blockstack/stacks-wallet-web/commit/45e7d20752d75f459c21a898032da73f9daeff98) Thanks [@aulneau](https://github.com/aulneau)! - This update attempts to fix when sometimes network requests fail due to a CORS related issues. Additionally, this fixes a runtime react key warning.

## 2.12.2

### Patch Changes

- [#1445](https://github.com/blockstack/stacks-wallet-web/pull/1445) [`e3b6062f`](https://github.com/blockstack/stacks-wallet-web/commit/e3b6062f7dbaec369486cd83a49751e6aa63ca4f) Thanks [@aulneau](https://github.com/aulneau)! - This change removes our dependency on @tabler/icons and uses `react-icons/fi` for all our icon needs, which matches our figma designs. Additionally, this reduces our minified package from over 4mb to under 3.5mb

## 2.12.1

### Patch Changes

- [#1442](https://github.com/blockstack/stacks-wallet-web/pull/1442) [`1ec4c001`](https://github.com/blockstack/stacks-wallet-web/commit/1ec4c0014b3e0eb70dbde8499240626ef418c445) Thanks [@aulneau](https://github.com/aulneau)! - This fixes an issue with our publishing scripts

## 2.12.0

### Minor Changes

- [#1420](https://github.com/blockstack/stacks-wallet-web/pull/1420) [`0097c7bb`](https://github.com/blockstack/stacks-wallet-web/commit/0097c7bbd31272c0ca9a7d3460dfec363c602a99) Thanks [@aulneau](https://github.com/aulneau)! - This update fixes a visual bug that caused the network drawer to persist longer than expected, and adds in a global app error boundary to capture run time errors and provide a way for users to report issues.

* [#1326](https://github.com/blockstack/stacks-wallet-web/pull/1326) [`f1382d1b`](https://github.com/blockstack/stacks-wallet-web/commit/f1382d1b5f849a19ebe8d2b24ecfce6433de187d) Thanks [@aulneau](https://github.com/aulneau)! - This update replaces our use of recoil for state management to jotai. This gives us tighter integrations with tools such as react-query and rxjs.

### Patch Changes

- [#1301](https://github.com/blockstack/stacks-wallet-web/pull/1301) [`9c24f96e`](https://github.com/blockstack/stacks-wallet-web/commit/9c24f96ef7c3fb6b1dc175ceac7fc9f1f387b9b7) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Adds [dependency-cruiser](https://github.com/sverweij/dependency-cruiser), a tool which can both visualize and validate import dependencies in the Stacks Wallet. This PR adds a single rule stating that the `src/components` folder cannot import from `src/pages`

* [#1408](https://github.com/blockstack/stacks-wallet-web/pull/1408) [`dcca229f`](https://github.com/blockstack/stacks-wallet-web/commit/dcca229f9efe52136a3b6fde878d901d502cf4e9) Thanks [@aulneau](https://github.com/aulneau)! - This fixes the logic used to allow or disallow the usage of decimals in the send field. Previously SIP 10 compliant tokens that defined a value of "0" would pass the condition, thus allowing users to incorrectly try to send a decimal value of a token which uses no decimal places.

- [#1437](https://github.com/blockstack/stacks-wallet-web/pull/1437) [`df71881e`](https://github.com/blockstack/stacks-wallet-web/commit/df71881e8b0d28e2b5f31e00f2967cb3fa6950b4) Thanks [@aulneau](https://github.com/aulneau)! - This fixes a bug where if a user switched accounts while on a page like the receive or view secret key, and navigated home, their balances would show stale data related to the previous account they were on.

* [#1386](https://github.com/blockstack/stacks-wallet-web/pull/1386) [`cf687aa7`](https://github.com/blockstack/stacks-wallet-web/commit/cf687aa74dca474c560d088cdde1751da78f5672) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This sets up the ability to perform integration tests in full page rather than in the extension popup for transactions.

- [#1294](https://github.com/blockstack/stacks-wallet-web/pull/1294) [`d40af091`](https://github.com/blockstack/stacks-wallet-web/commit/d40af091dc872ed7f21626d0c0738bea86984065) Thanks [@aulneau](https://github.com/aulneau)! - This update adds the current version number next to the logo for better debugging and information display.

* [#1333](https://github.com/blockstack/stacks-wallet-web/pull/1333) [`b6c9a5b8`](https://github.com/blockstack/stacks-wallet-web/commit/b6c9a5b808f4306c2bf6c9cd835070db93e012ca) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This updates connect version packages to capture changes to the intro modal in the test-app.

- [#1222](https://github.com/blockstack/stacks-wallet-web/pull/1222) [`08fe3e99`](https://github.com/blockstack/stacks-wallet-web/commit/08fe3e996428f23e7ede969d9ab03004ed0be6d0) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Removes unused old code once used in the authenticator

* [#1365](https://github.com/blockstack/stacks-wallet-web/pull/1365) [`8bc31589`](https://github.com/blockstack/stacks-wallet-web/commit/8bc31589e5b696b5b2ec6020313f4b8318729ecb) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This adds integration tests for the wallet settings menu.

- [#1431](https://github.com/blockstack/stacks-wallet-web/pull/1431) [`07b79809`](https://github.com/blockstack/stacks-wallet-web/commit/07b79809ec1115d5c5655e726aaecad416e99951) Thanks [@aulneau](https://github.com/aulneau)! - This update does a minor refactor to how we were fetching BNS names for a given address, and improves the performance of the application by removing the use of the jotai util `waitForAll` from the names atom.

* [#1434](https://github.com/blockstack/stacks-wallet-web/pull/1434) [`ff55f99c`](https://github.com/blockstack/stacks-wallet-web/commit/ff55f99c74e4904d7cf8795e466fe8e602dc3d5d) Thanks [@aulneau](https://github.com/aulneau)! - This update adds better error handling for when a transaction is failed to broadcast. Sometimes the endpoint returns a string as an error message, and previously that was accepted because there was no validation happening on the string. The string is now validated to be a correct txid, and if it fails, the UI will display the correct error message.

- [#1285](https://github.com/blockstack/stacks-wallet-web/pull/1285) [`859d9a64`](https://github.com/blockstack/stacks-wallet-web/commit/859d9a64260be58a096a95b2e685b3658a9a9caf) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Fixes issue where the fee wasn't subtracted from the maximum amount you can send, as well as using the principal's available balance, rather than total.

* [#1404](https://github.com/blockstack/stacks-wallet-web/pull/1404) [`af763d56`](https://github.com/blockstack/stacks-wallet-web/commit/af763d5655948a414ccf7078b835de75061565d9) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Adds validation to prevent a user from being able to send more than their SIP-10 balance. Fixes #1400

- [#1433](https://github.com/blockstack/stacks-wallet-web/pull/1433) [`a895107f`](https://github.com/blockstack/stacks-wallet-web/commit/a895107f3da2a9a3eed543c29f63575b74be5f7c) Thanks [@aulneau](https://github.com/aulneau)! - This update enables quicker and more responsive refreshing of an accounts remote data

## 2.11.1

### Patch Changes

- [#1308](https://github.com/blockstack/stacks-wallet-web/pull/1308) [`4eeec781`](https://github.com/blockstack/stacks-wallet-web/commit/4eeec7813cbce1ec64919157552484a7c4cb59ed) Thanks [@aulneau](https://github.com/aulneau)! - This updates fixes a display bug that rounded STX values incorrectly. This bug had no effect on values used in transactions, only with the display of the amounts.

## 2.11.0

### Minor Changes

- [#1221](https://github.com/blockstack/stacks-wallet-web/pull/1221) [`b438b324`](https://github.com/blockstack/stacks-wallet-web/commit/b438b324d10dd34d1b22474983f7f62b9d9a3df3) Thanks [@aulneau](https://github.com/aulneau)! - This update refactors much of the architecture of the internal state of the extension and attempts to reduce much of the tech debt we have accumulated.

* [#1293](https://github.com/blockstack/stacks-wallet-web/pull/1293) [`ce60d212`](https://github.com/blockstack/stacks-wallet-web/commit/ce60d212b3f9c0f8e24bac3aa8b73f21a15d8d97) Thanks [@aulneau](https://github.com/aulneau)! - This update improves the error handling we have around unauthorized transactions and expired requests.

- [#1268](https://github.com/blockstack/stacks-wallet-web/pull/1268) [`b2ecacf9`](https://github.com/blockstack/stacks-wallet-web/commit/b2ecacf975875fadeddaa2c195667456c2a2b5e3) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Changes transaction activity screen to order transactions by date, rather than in a single list

### Patch Changes

- [#1292](https://github.com/blockstack/stacks-wallet-web/pull/1292) [`d93a6eac`](https://github.com/blockstack/stacks-wallet-web/commit/d93a6eac2ca0610c5a6fc013895090c313695c48) Thanks [@SergeyVolynkin](https://github.com/SergeyVolynkin)! - This update fixes a regression where the set-password page became mis-aligned.

* [#1299](https://github.com/blockstack/stacks-wallet-web/pull/1299) [`99434b6c`](https://github.com/blockstack/stacks-wallet-web/commit/99434b6c91e49023b3b48386a028f0be6a80ff61) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Refactor of our component organization, making efforts to structure by feature, and giving clearer responsibilities to each top level directory

- [#1269](https://github.com/blockstack/stacks-wallet-web/pull/1269) [`6777a57a`](https://github.com/blockstack/stacks-wallet-web/commit/6777a57a6a474ce204410d349d6bccfc1b5e1ec8) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Fixes issue where pending transactions aren't always shown

* [#1267](https://github.com/blockstack/stacks-wallet-web/pull/1267) [`117abb0c`](https://github.com/blockstack/stacks-wallet-web/commit/117abb0c2a584ee2460603e517961a9bfe77f92e) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Fixes border radius

- [#1291](https://github.com/blockstack/stacks-wallet-web/pull/1291) [`342a1144`](https://github.com/blockstack/stacks-wallet-web/commit/342a11445e409d3d8e8316d19e5da8c3d45bb896) Thanks [@kyranjamie](https://github.com/kyranjamie)! - A handful of UI-related errors were being thrown, this PR fixes them, as well as addressing unknown prop issues with the tooltip component

## 2.10.0

### Minor Changes

- [#1208](https://github.com/blockstack/stacks-wallet-web/pull/1208) [`b76efa57`](https://github.com/blockstack/stacks-wallet-web/commit/b76efa5793ab64a0c7a679c8441ac2e3a6bea0a9) Thanks [@aulneau](https://github.com/aulneau)! - ### SIP 010 support

  The main goal behind this PR was to support tokens that conform to the [SIP 010 Fungible token standard](https://github.com/stacksgov/sips/pull/5). Changes to the
  extension to enable this touched many areas, but mostly had to do with how we construct the state for each token and
  how we are displaying it. I've designed things in a way that we can still display older tokens or other FTs that do not conform
  by using the code we had from before as a fallback when there aren't decimals/symbol/name methods available.

  _High level overview of changes:_

  - dynamically fetch and cache meta data for a given token
  - display and format balances with correct decimal offset
  - display ticker/name as defined in contract
  - allow only tokens that have a correct transfer method to be sent via the extension
  - correct decimal placeholder in amount input field
  - better fallback/loading UI for FTs
  - progressive fallback for tokens that don't conform
  - improved form validation based on meta data
  - automatically switch to "activity" tab on successful transfer
  - other misc improvements

### Patch Changes

- [#1233](https://github.com/blockstack/stacks-wallet-web/pull/1233) [`09dddb5a`](https://github.com/blockstack/stacks-wallet-web/commit/09dddb5a4d034e7d42a854e010fe600b638c4e9e) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Adds code coverage and deploys to Github Pages https://blockstack.github.io/stacks-wallet-web/

## 2.9.0

### Minor Changes

- [#1175](https://github.com/blockstack/stacks-wallet-web/pull/1175) [`09c9b857`](https://github.com/blockstack/stacks-wallet-web/commit/09c9b857bffab754381703df1314b19fc7fb9ca6) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This adds firing an event when a user cancels an auth or transaction popup which triggers calling an onCancel callback function.

### Patch Changes

- [#1214](https://github.com/blockstack/stacks-wallet-web/pull/1214) [`71524bfc`](https://github.com/blockstack/stacks-wallet-web/commit/71524bfcb1e22792f9429d3fbe11238254ee7da0) Thanks [@kyranjamie](https://github.com/kyranjamie)! - Fixes #1204, where a rerender issues causes users in the onboarding flow to enter a prohibative glitch. Credit to community member @whoabuddy for reporting

## 2.8.0

### Minor Changes

- [#1193](https://github.com/blockstack/stacks-wallet-web/pull/1193) [`0e3619ea`](https://github.com/blockstack/stacks-wallet-web/commit/0e3619eadfbed22c5a7668c0518cf0c5928ca085) Thanks [@aulneau](https://github.com/aulneau)! - This update refactors and improve much of the UI and functionality of the transaction signing popup. Fixes these issues: #1172 #1165 #1146 #1115 #1147.

### Patch Changes

- [#1194](https://github.com/blockstack/stacks-wallet-web/pull/1194) [`c331563a`](https://github.com/blockstack/stacks-wallet-web/commit/c331563aefe2a37d7161a7998e5ed19190483db1) Thanks [@aulneau](https://github.com/aulneau)! - This update adds initial support for fetching and dispaying names associated with a given account stx address.

* [#1200](https://github.com/blockstack/stacks-wallet-web/pull/1200) [`5d863cb8`](https://github.com/blockstack/stacks-wallet-web/commit/5d863cb8a21bf85ddef0a267a31ddbe184d65c42) Thanks [@aulneau](https://github.com/aulneau)! - This update removes the `BlockstackProvider` that the extension would inejct into apps. This is to allow apps that are still using legacy auth (`app.blockstack.org`) to work without needing to update to the extension. Other apps should be on the latest versions of connect that no longer use `BlockstackProvider`, but instead use `StacksProvider`.

- [#1178](https://github.com/blockstack/stacks-wallet-web/pull/1178) [`3c26a6b8`](https://github.com/blockstack/stacks-wallet-web/commit/3c26a6b88b3095b20444cccd8efbebf93f2098d4) Thanks [@aulneau](https://github.com/aulneau)! - This fixes a bug with the positioning of the popup to fallback to the default window object if the chrome extension api window is not available.

## 2.7.1

### Patch Changes

- [#1173](https://github.com/blockstack/stacks-wallet-web/pull/1173) [`c6d18b45`](https://github.com/blockstack/stacks-wallet-web/commit/c6d18b4507eab3420ce29946c6bad15a11769e41) Thanks [@aulneau](https://github.com/aulneau)! - This removes any git commands and instead relies on default env vars provided by github actions. If they don't exist, they aren't used.

## 2.7.0

### Minor Changes

- [#1168](https://github.com/blockstack/stacks-wallet-web/pull/1168) [`7ac4c8fe`](https://github.com/blockstack/stacks-wallet-web/commit/7ac4c8fe66d47fbad58983f240299713f808c900) Thanks [@aulneau](https://github.com/aulneau)! - This update fixes the positioning of the popup in relation to the primary window that fired the action

### Patch Changes

- [#1166](https://github.com/blockstack/stacks-wallet-web/pull/1166) [`5e124022`](https://github.com/blockstack/stacks-wallet-web/commit/5e124022a673e39a2c3191e8a2a23713337867e7) Thanks [@hstove](https://github.com/hstove)! - Removes the `COMMIT_SHA` global variable for production builds, to help with reproducible builds in any environment.

* [#1171](https://github.com/blockstack/stacks-wallet-web/pull/1171) [`0814c1c6`](https://github.com/blockstack/stacks-wallet-web/commit/0814c1c6bbca6c12ac8b95f8d8b9a45a4857a157) Thanks [@aulneau](https://github.com/aulneau)! - This update cleans up the webpack config and updates many of our dependencies, and fixes some build related CI tasks

## 2.6.0

### Minor Changes

- [#1149](https://github.com/blockstack/stacks-wallet-web/pull/1149) [`8984f137`](https://github.com/blockstack/stacks-wallet-web/commit/8984f137f4fb7932ce569376685dbce6db50eeeb) Thanks [@aulneau](https://github.com/aulneau)! - This update removed all use of redux in our application in favor of Recoil.

## 2.5.0

### Minor Changes

- [#1110](https://github.com/blockstack/stacks-wallet-web/pull/1110) [`9cb73658`](https://github.com/blockstack/stacks-wallet-web/commit/9cb736581044a6b64eab3158e1eb604be622dfb2) Thanks [@agraebe](https://github.com/agraebe)! - Adds support for sponsored transactions. When a developer includes the option `sponsored: true` in a transaction request, the transaction will not be broadcasted. Instead, the developer will need to get the raw transaction and sign it as a sponsor, and then broadcast it.

### Patch Changes

- [#1161](https://github.com/blockstack/stacks-wallet-web/pull/1161) [`e28302b1`](https://github.com/blockstack/stacks-wallet-web/commit/e28302b1fb61cedc9279e4fdb25e14868dcce913) Thanks [@aulneau](https://github.com/aulneau)! - Updates our dependencies on @stacks/connect and @stacks/connect-react to the latest version of each.

* [`3599f0d0`](https://github.com/blockstack/stacks-wallet-web/commit/3599f0d08db173467d30dcf87a3e50f136b59d52) Thanks [@aulneau](https://github.com/aulneau)! - Updates the dockerfile and github actions to improve out publishing workflow.

## 2.4.7

### Patch Changes

- [#1155](https://github.com/blockstack/stacks-wallet-web/pull/1155) [`fc2cc397`](https://github.com/blockstack/stacks-wallet-web/commit/fc2cc397eab04ff7428baea1f9d525d522cc00e7) Thanks [@aulneau](https://github.com/aulneau)! - Updates the github actions to break out the different jobs for each browser extension.

## 2.4.6

### Patch Changes

- [#1139](https://github.com/blockstack/stacks-wallet-web/pull/1139) [`f00d1c14`](https://github.com/blockstack/stacks-wallet-web/commit/f00d1c144073dfc6bf806a5e27fd3427d9682ce8) Thanks [@fbwoolf](https://github.com/fbwoolf)! - This fixes onboarding elements from being pushed to the bottom of the screen and popup by removing the automatic margin-top spacing.

* [`86039691`](https://github.com/blockstack/stacks-wallet-web/commit/86039691ad4930bc22cf7fb30f1883d7e8fb1808) Thanks [@aulneau](https://github.com/aulneau)! - Made some fixes to the webpack config to better support building the extension from the DockerFile.

## 2.4.5

### Patch Changes

- [#1134](https://github.com/blockstack/stacks-wallet-web/pull/1134) [`a2d00798`](https://github.com/blockstack/stacks-wallet-web/commit/a2d0079838c566344d4066cef3eb3f5ef6c2c262) Thanks [@aulneau](https://github.com/aulneau)! - **This fixes two issues:**

  There was a race condition such that sometimes when a transaction would be generated from the requestToken, the
  postCondition hook would run before the token was decoded, and as such always returned an empty postConditions array.

  There was a bug where if the account had a pending function call transaction, the nonce store would never be correct
  while the tx was still pending.

## 2.4.4

### Patch Changes

- [#1129](https://github.com/blockstack/stacks-wallet-web/pull/1129) [`1f5e24ab`](https://github.com/blockstack/stacks-wallet-web/commit/1f5e24ab18bad8d4c5d04845c38c39dff7d9eec3) Thanks [@markmhx](https://github.com/markmhx)! - This is a patch version bump to get aligned with a manual version bump that was submitted to extension builds.

* [#1137](https://github.com/blockstack/stacks-wallet-web/pull/1137) [`2f0202a1`](https://github.com/blockstack/stacks-wallet-web/commit/2f0202a1ff26c49cc181a713eddf31e103b30eeb) Thanks [@aulneau](https://github.com/aulneau)! - Adds the ability to submit an attachment alongside a transaction. It displays the attachment in a separate row if present. It prints it as ascii if the attachment is composed of only readable characters, otherwise it displays it as a hex string.

  <img width="554" alt="Screenshot 2021-05-05 at 9 40 16 PM" src="https://user-images.githubusercontent.com/5727806/117242873-f936c200-adea-11eb-83f3-8054b8029c58.png">

## 2.4.2

### Patch Changes

- [#1127](https://github.com/blockstack/stacks-wallet-web/pull/1127) [`4a629e04`](https://github.com/blockstack/stacks-wallet-web/commit/4a629e04317a2b1a568c11a9512af74049dc3bb2) Thanks [@hstove](https://github.com/hstove)! - Fixes the version of the Github Action used to upload the chrome extension

## 2.4.1

### Patch Changes

- [#1117](https://github.com/blockstack/stacks-wallet-web/pull/1117) [`3f3f8762`](https://github.com/blockstack/stacks-wallet-web/commit/3f3f8762e54feac79680730e99bec61518499f48) Thanks [@CharlieC3](https://github.com/CharlieC3)! - Updates our Github Actions to automatically publish production versions of the extension to the Chrome and Firefox stoes.

## 2.4.0

### Minor Changes

- [#1123](https://github.com/blockstack/stacks-wallet-web/pull/1123) [`9985a3cb`](https://github.com/blockstack/stacks-wallet-web/commit/9985a3cbfcb8ac8332cde20592e0991b661eec93) Thanks [@hstove](https://github.com/hstove)! - This removes the dependence on `redirect_uri` when generating an `appPrivateKey`. Instead, the wallet will use the URL of the tab that originated this request.

  It also includes two chores:

  - Remove the `terser-webpack-plugin` package, which is unused and was flagged in `yarn audit`
  - Bumps the version of node.js used in Github Actions from 12.16 to 12.22

## 2.3.1

### Patch Changes

- [#1107](https://github.com/blockstack/stacks-wallet-web/pull/1107) [`054cef76`](https://github.com/blockstack/stacks-wallet-web/commit/054cef763bc72cddfb3edcb8098afb86428d725a) Thanks [@aulneau](https://github.com/aulneau)! - This update removes all analytics calls we were using while the extension was in alpha.

* [#1092](https://github.com/blockstack/stacks-wallet-web/pull/1092) [`81ed8f4e`](https://github.com/blockstack/stacks-wallet-web/commit/81ed8f4e1d539842227bcb0b39b8664267b07ebc) Thanks [@hstove](https://github.com/hstove)! - Added extra verification to a transaction signing request. If an app tries to have you sign a transaction, but you haven't logged into that app with any of the accounts currently in your wallet, the transaction will be blocked. Fixes [#1076](https://github.com/blockstack/stacks-wallet-web/issues/1076) and [#1078](https://github.com/blockstack/stacks-wallet-web/issues/1078).

- [#1099](https://github.com/blockstack/stacks-wallet-web/pull/1099) [`3a387b8e`](https://github.com/blockstack/stacks-wallet-web/commit/3a387b8e0343276e88ba21da9aa79b71d7e3b7e3) Thanks [@hstove](https://github.com/hstove)! - Adds Argon2 password hashing. This greatly improves the security of user's encrypted secret keys, because Argon2 vastly increases the time it takes to test a password.

## 2.3.0

### Minor Changes

- [#1084](https://github.com/blockstack/stacks-wallet-web/pull/1084) [`ae5c723e`](https://github.com/blockstack/stacks-wallet-web/commit/ae5c723ee2eb7fe50b1fac16ee9e353753ce4ed7) Thanks [@aulneau](https://github.com/aulneau)! - This update fixes https://github.com/blockstack/stacks-wallet-web/issues/1067. It seems that there were some issues with the way that we were keeping `StacksTransactions` in recoil store. Recoil serializes everything that is in an atom/selector, and that serialization was breaking the transaction class.

  **Changes & Improvements**

  - validation has been improved on the send screen
  - send screen design has been improved slightly moving towards the figma designs
  - tickers are now displayed in the same way as the explorer
  - error handling now displays a toast if the transaction fails for some reason
  - assets now use the same kind of gradient as on the explorer
  - amount placeholder updates based on asset selected

  ![stx-transfer](https://user-images.githubusercontent.com/11803153/111552123-b1cb7800-874f-11eb-9000-3d4cd499fd7c.gif)

  ![stella-transfer](https://user-images.githubusercontent.com/11803153/111552120-b09a4b00-874f-11eb-8599-b4e2c828e795.gif)

* [#1095](https://github.com/blockstack/stacks-wallet-web/pull/1095) [`f2092eb8`](https://github.com/blockstack/stacks-wallet-web/commit/f2092eb8a8f644d8bb353c5da58bde0848e385cb) Thanks [@aulneau](https://github.com/aulneau)! - This update resolves these issues:

  - fixes [#969](https://github.com/blockstack/stacks-wallet-web/issues/969)
  - fixes [#1093](https://github.com/blockstack/stacks-wallet-web/issues/1093)

  **Changes**

  refactors the hook `use-setup-tx` ([before](https://github.com/blockstack/stacks-wallet-web/blob/35bb9d7a786ffe236322a7c96eb091cc3b94fa49/src/common/hooks/use-setup-tx.ts#L28), [after](https://github.com/blockstack/stacks-wallet-web/blob/cafd37b6737960df4542490eeb74dcbcc7f1881e/src/common/hooks/use-setup-tx.ts)) into smaller, more manageable parts. From the original hook, there are a few new ones that each take care of their own responsibility:

  - [useAccountSwitchCallback](https://github.com/blockstack/stacks-wallet-web/blob/cafd37b6737960df4542490eeb74dcbcc7f1881e/src/common/hooks/callbacks/use-account-switch-callback.ts)
  - [useDecodeRequestCallback](https://github.com/blockstack/stacks-wallet-web/blob/cafd37b6737960df4542490eeb74dcbcc7f1881e/src/common/hooks/callbacks/use-decode-request-callback.ts)
  - [useNetworkSwitchCallback](https://github.com/blockstack/stacks-wallet-web/blob/cafd37b6737960df4542490eeb74dcbcc7f1881e/src/common/hooks/callbacks/use-network-switch-callback.ts)
  - [usePostConditionsCallback](https://github.com/blockstack/stacks-wallet-web/blob/cafd37b6737960df4542490eeb74dcbcc7f1881e/src/common/hooks/callbacks/use-post-conditions-callback.ts) (the one we care about for this PR)
    - [post-conditions-utils.ts](https://github.com/blockstack/stacks-wallet-web/blob/cafd37b6737960df4542490eeb74dcbcc7f1881e/src/common/post-condition-utils.ts#L16)
    - [postConditionFromString](https://github.com/blockstack/stacks-wallet-web/blob/cafd37b6737960df4542490eeb74dcbcc7f1881e/src/common/utils.ts#L168)

  **Other misc fixes**

  - There was a bug where if a `token_transfer` had post conditions defined (which it should not), it would not display them. [This fixes that bug.](https://github.com/blockstack/stacks-wallet-web/blob/cafd37b6737960df4542490eeb74dcbcc7f1881e/src/components/transactions/post-conditions/list.tsx#L33)
  - Very briefly refactored the base component that displays the post conditions, [see component](https://github.com/blockstack/stacks-wallet-web/blob/cafd37b6737960df4542490eeb74dcbcc7f1881e/src/components/transactions/post-conditions/single.tsx#L88).

### Patch Changes

- [#1096](https://github.com/blockstack/stacks-wallet-web/pull/1096) [`55635960`](https://github.com/blockstack/stacks-wallet-web/commit/55635960c108a7e184dbd77a38dc8f58c3451f20) Thanks [@aulneau](https://github.com/aulneau)! - This update adds headers to all outbound requests to the `stacks-node-api` server with the product name and version.

* [#1082](https://github.com/blockstack/stacks-wallet-web/pull/1082) [`84553743`](https://github.com/blockstack/stacks-wallet-web/commit/8455374374ee5d88eaa1c28bf0032249cb3d832c) Thanks [@hstove](https://github.com/hstove)! - Updates our dependencies so that all versions are pinned. Also adds some checks to CI to make sure dependencies are pinned, and that `yarn audit` does not flag anything.

## 2.2.0

### Minor Changes

- [#1065](https://github.com/blockstack/stacks-wallet-web/pull/1065) [`ed019a48`](https://github.com/blockstack/stacks-wallet-web/commit/ed019a48cd15db336b95951f935403a8a119e494) Thanks [@aulneau](https://github.com/aulneau)! - Seed input fixes:

  - A user can now paste in any combination of string and numbers and hopefully get a correct phrase out.
  - The input for the seed phrase is now the perfect height to not scroll when someone enters in a 12 or 24 word phrase
  - Hitting return/enter will submit the form
  - Pasting in a magic recovery code will get validated. Previously we were just checking to see if it was 1 word.

  Password entry fixes:

  - Now debounced and does not blur the input when validation occurs, fixes #942
  - improved the error message to be less dynamic with a sane, static, suggestion, resolves #1031

* [#1068](https://github.com/blockstack/stacks-wallet-web/pull/1068) [`618d6fd7`](https://github.com/blockstack/stacks-wallet-web/commit/618d6fd7f6c40f3cd71d1ffb9ece5cf33cf22bcd) Thanks [@aulneau](https://github.com/aulneau)! - This PR updates elements that link to the explorer throughout the application, and starts the work on displaying transaction items in a more robust way (working towards our designs in figma).

  **Improvements**

  - Added a copy action to the receive button
  - The latest transaction item component has been updated to reflect the designs/states in figma
  - items now link to explorer, fixes #1018
  - fixes the drawers component such that the contents will scroll, and the header stays fixed
  - created an `AccountAvatar` component to display a generated gradient (based on the account, will persist between
    sessions)
  - general code health improvements
  - added [capsize](https://github.com/seek-oss/capsize) for better typography sizing

- [#1068](https://github.com/blockstack/stacks-wallet-web/pull/1068) [`126e2342`](https://github.com/blockstack/stacks-wallet-web/commit/126e2342d1468e92101974d8397c079efe2ff3a5) Thanks [@aulneau](https://github.com/aulneau)! - This bumps the version for our @stacks/ui-\* libs to their latest versions.

### Patch Changes

- [#1054](https://github.com/blockstack/stacks-wallet-web/pull/1054) [`099b75c4`](https://github.com/blockstack/stacks-wallet-web/commit/099b75c4d6dfb1db1bf207ee11aac912006feecb) Thanks [@hstove](https://github.com/hstove)! - Added an integration test for creating an account, locking the wallet, and unlocking

## 2.1.0

### Minor Changes

- [#1053](https://github.com/blockstack/stacks-wallet-web/pull/1053) [`155ea173`](https://github.com/blockstack/stacks-wallet-web/commit/155ea17359a4b4729b737f9c76e4d0a21bd166c9) Thanks [@hstove](https://github.com/hstove)! - Fixed a bug where clicking 'create an account' did not properly update the wallet state.

### Patch Changes

- [#1062](https://github.com/blockstack/stacks-wallet-web/pull/1062) [`94d9c12f`](https://github.com/blockstack/stacks-wallet-web/commit/94d9c12fb2bbed0f3d4a7005ed1cb2d6877d5506) Thanks [@aulneau](https://github.com/aulneau)! - This change updates the tooling we use for versioning the exension, moving away from `standard-version` to changesets!

* [#1064](https://github.com/blockstack/stacks-wallet-web/pull/1064) [`5cd3f565`](https://github.com/blockstack/stacks-wallet-web/commit/5cd3f5657a97f057703afc28f5c79eb824dfdecf) Thanks [@hstove](https://github.com/hstove)! - Fixes webpack's versioning logic to only use "canonical" version on exactly the 'main' branch. Previously it only checked if the branch included "main", so this logic would execute for a branch named like `XX-main`.

  This also updates the `@changesets/action` version to point to a specific commit, for security reasons.

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 2.0.7 (2021-03-11)

### Bug Fixes

- remove demo app stick header ([3e7d19a](https://github.com/blockstack/ux/commit/3e7d19a6070f8a79555f668cf70c3be64bd0e43b))

### 2.0.6 (2021-03-11)

### Bug Fixes

- location of zip file after build-ext.sh ([0c003ba](https://github.com/blockstack/ux/commit/0c003baaf539dd9d0c53871c2e45c16a0c93de14))

### 2.0.5 (2021-03-11)

### Bug Fixes

- push new version and tags in version job ([98b9d46](https://github.com/blockstack/ux/commit/98b9d46b7413f48e82de3e465557b97c8b3f24bd))

## 2.0.3 (2021-03-08)

### Bug Fixes

- object-src replace ([5f54666](https://github.com/blockstack/ux/commit/5f54666f36a9b24362a09c5f03ebeeed28c12b33))

## 2.0.2 (2021-03-08)

### Bug Fixes

- deps ([86de1c1](https://github.com/blockstack/ux/commit/86de1c1a931ceaa141d4baf0c88612c180216f35))

## 2.0.1 (2021-03-08)

### Bug Fixes

- checkout main when publishing npm on main ([40446a0](https://github.com/blockstack/ux/commit/40446a0264ccdbcc4ddc556118517680e39b246f))

# [2.0.0](https://github.com/blockstack/ux/compare/@stacks/app@1.20.16...@stacks/app@2.0.0) (2021-03-05)

### Bug Fixes

- add ability to view secret key ([d7dca7d](https://github.com/blockstack/ux/commit/d7dca7d580f4dc294dab7b3b70ee40ae29a85b12))
- add in warning ([2906270](https://github.com/blockstack/ux/commit/2906270f5fb9ed952b5c9c58f5306d06c618a7ef))
- authentication error ([6abf504](https://github.com/blockstack/ux/commit/6abf504de6995e357c9c8fac7a291fe42e5edb1a))
- bad state after resetting recoil state ([1e89762](https://github.com/blockstack/ux/commit/1e8976275e9e961d8ffb327c114bbd267b44a5bb))
- broken extension locked state, fixes [#760](https://github.com/blockstack/ux/issues/760) ([c2bca4e](https://github.com/blockstack/ux/commit/c2bca4e0da406baaf9447a33bc82f89315de8be5))
- broken state after restoring extension ([7baf146](https://github.com/blockstack/ux/commit/7baf14648332dead4b4096881c4325ecff22b20c))
- bug when creating new account ([7bdeec6](https://github.com/blockstack/ux/commit/7bdeec6984f860fcf71ff18aa8a60c770f01ccbe))
- capitalize secret key, fixes [#768](https://github.com/blockstack/ux/issues/768) ([0706230](https://github.com/blockstack/ux/commit/0706230589202c4e4d7b452271f9340548004e7c))
- choose account page tweaks, fixes [#735](https://github.com/blockstack/ux/issues/735) ([6ae6889](https://github.com/blockstack/ux/commit/6ae688929363c6d0d8de4e75cd5d0db7cc0dbc06))
- close icon in drawers ([c4f1def](https://github.com/blockstack/ux/commit/c4f1defebe21ce32f8f6ff1d4b2de5c538db7959))
- conditional bug ([5f2ad4a](https://github.com/blockstack/ux/commit/5f2ad4aca1fb0f20ef9ae7a3c69d899654f5e1e6))
- correct network/chainID matching in tx signing, nonce error ([6190d5f](https://github.com/blockstack/ux/commit/6190d5fcfb62067d494718532215a1e043db8594))
- cursor on settings popover, fixes [#739](https://github.com/blockstack/ux/issues/739) ([8d58259](https://github.com/blockstack/ux/commit/8d58259d920267051ddac5809fdddfd05f215754))
- default font-size in extension ([320fea6](https://github.com/blockstack/ux/commit/320fea633eb67fb9c63afa501953c528496fbf64))
- font sizes on tx popup ([00bf475](https://github.com/blockstack/ux/commit/00bf475d13c8175755347b6ecf48dfc0cae8b586))
- header alignment ([7121f8a](https://github.com/blockstack/ux/commit/7121f8a3039017f1def47455bfed937c66f0f285))
- hide actions during onboarding, fixes [#738](https://github.com/blockstack/ux/issues/738) ([d1cede0](https://github.com/blockstack/ux/commit/d1cede0f2cc38a5d371455ea28d824d41adb682c))
- improve general sizing and layout, refactor some layout elements ([91f580c](https://github.com/blockstack/ux/commit/91f580c5b02fc88edd66d8b5f9e4f810fd86e39a))
- improvements from code review feedback ([2a1d243](https://github.com/blockstack/ux/commit/2a1d2433afffac19ae9728297995919fc991430c))
- improvements to reduce network load ([101b278](https://github.com/blockstack/ux/commit/101b278bbaa3419198edd91e225ab6017ca83b3a))
- index.html -> popup.html ([5e0b42f](https://github.com/blockstack/ux/commit/5e0b42fd01187855744dc63463f406b6aa6f4e84))
- input formatting on send page. fixes [#729](https://github.com/blockstack/ux/issues/729) ([c6ad05e](https://github.com/blockstack/ux/commit/c6ad05ec4b4591f641f908e473ec6a4418d42675))
- installation integration test ([8a2982b](https://github.com/blockstack/ux/commit/8a2982b41f769ea1faaa7b4266067f3ca4497ecf))
- integration tests ([c903de7](https://github.com/blockstack/ux/commit/c903de7d05b806d66fd23b5816d05be7f8ef9f3d))
- lint ([2197ea5](https://github.com/blockstack/ux/commit/2197ea58a7116b4ac4e67d26628c5780ae60182b))
- lint error ([75e60a4](https://github.com/blockstack/ux/commit/75e60a4f0f6ee4b6a87af0d905497ca227d95fe7))
- linting error ([35ca002](https://github.com/blockstack/ux/commit/35ca002b0b235962ee9823812862675eea2736f3))
- missing test selector for integration tests ([6691350](https://github.com/blockstack/ux/commit/6691350efc6dbba3fc8f49ab5fde1ff37e8c04ae))
- mock fee fetching in transaction-utils test ([135c3f4](https://github.com/blockstack/ux/commit/135c3f4f7047919223a13dcb3138eb67a4b47a8e))
- nasty bugs around password, redux state in ext, fixes [#770](https://github.com/blockstack/ux/issues/770) ([6fc81dd](https://github.com/blockstack/ux/commit/6fc81ddb978673c02288dd88e21324ce5c70c6c9))
- nonce issue ([225e1f3](https://github.com/blockstack/ux/commit/225e1f371aa8afa79faef2052d191608ab37f8c4))
- nonce issues causing pending tx's ([1e916f9](https://github.com/blockstack/ux/commit/1e916f9aa175e144ecce82ac4c031d32afd71447))
- nonce not set when zero ([b7a0724](https://github.com/blockstack/ux/commit/b7a0724f7326292d343c06c4088dc7003962faad))
- prevent overflow on save key in popup, fixes [#926](https://github.com/blockstack/ux/issues/926) ([e6be09b](https://github.com/blockstack/ux/commit/e6be09b489db4616510d170e951d4fb8ac9c3e9c))
- properly set post conditions from payload ([a53216e](https://github.com/blockstack/ux/commit/a53216ee2baf5f7a940af05e4ff0b9d057f934ce))
- quick fix to reduce node load ([63f00a1](https://github.com/blockstack/ux/commit/63f00a173de79b273601abadc4c00e97bf438809))
- remove incorrect typing for event ([eda8e64](https://github.com/blockstack/ux/commit/eda8e6404372a8ffdd15787fafa35ba7e0a454a8))
- revert to localStorage for ext, fix CI oddities ([e43b74d](https://github.com/blockstack/ux/commit/e43b74d9c22af8860f82f959b6d3d1334b49aa6f))
- secret key cut off, 24 words default, fixes [#771](https://github.com/blockstack/ux/issues/771) ([0f27637](https://github.com/blockstack/ux/commit/0f2763784508ef6f751d3289cc26f37601c99690))
- send max top ([0c8418e](https://github.com/blockstack/ux/commit/0c8418e5391fd2b9301c6b01f618141dd7c0ba10))
- serialize post conditions in connect payload ([faebbec](https://github.com/blockstack/ux/commit/faebbecb4994de6a439b78ad693017c279c3bc82))
- set PostCondition principal for string serialized PCs ([36b1aeb](https://github.com/blockstack/ux/commit/36b1aeb6f1412dd60fc043346410f9704117c9bf))
- show latest transaction on home page immediately, fixes [#766](https://github.com/blockstack/ux/issues/766) ([0ce2c74](https://github.com/blockstack/ux/commit/0ce2c747519f29f7bfb468bed4daa3e8188c5ee2))
- sizes in different contexts, clean up account select page ([b131429](https://github.com/blockstack/ux/commit/b13142943bfea3139fe001c823919444cd35c39f))
- small csp fix ([1306198](https://github.com/blockstack/ux/commit/13061987ce7f7c3b37aa54d7c4f1c349e1d9bfce))
- spacing, flow of sign up ([d514fd4](https://github.com/blockstack/ux/commit/d514fd4f104746f275789166f2d101b71db25206))
- stacks blockchain api language, fixes [#740](https://github.com/blockstack/ux/issues/740) ([2a3a6f9](https://github.com/blockstack/ux/commit/2a3a6f9ad887e9ad0dfb29d09b5b376b994f76ff))
- tests with new auth rules ([6934049](https://github.com/blockstack/ux/commit/693404953738b8a56ed0b56c07b5a9cd6aa15282))
- tons of tx-related improvements. fixes [#728](https://github.com/blockstack/ux/issues/728) and [#729](https://github.com/blockstack/ux/issues/729) ([d8b9e50](https://github.com/blockstack/ux/commit/d8b9e5096ea13b09fdbd1d2f5ba4245bdf15e9e4))
- track rehydrated from vault to reduce jitter on load ([8d76df9](https://github.com/blockstack/ux/commit/8d76df98a84518bdf9a95aae910336c1d4e9da01))
- ts error unused import ([c1180a3](https://github.com/blockstack/ux/commit/c1180a3a2f667d0e04bf8241ef750e392b9f855f))
- update blockchain API URLs, fixes [#802](https://github.com/blockstack/ux/issues/802) ([2aa204f](https://github.com/blockstack/ux/commit/2aa204fa90f4483f4d2e04efda50912ed72b37c8))
- validate STX address on send page, fixes [#945](https://github.com/blockstack/ux/issues/945) ([c14ab85](https://github.com/blockstack/ux/commit/c14ab85d44beca11ad35b4a4ea1331f05a7d4f59))
- webpack 5, fast refresh :~) ([63d7d38](https://github.com/blockstack/ux/commit/63d7d383855ab46545bccea4302858960e806a5c))
- wonky url causing issues in auth ([fba1619](https://github.com/blockstack/ux/commit/fba16199102272b52aea17031befeed9dbab15da))

### Features

- disable username registrations ([1f21428](https://github.com/blockstack/ux/commit/1f214285e111a1bdacbcdbe3f13188beb8004fcc))
- improved UX around wallet onboarding ([8ab3dd3](https://github.com/blockstack/ux/commit/8ab3dd397b16a6c46f225286826966b5ef5db250))
- mainnet network ([c9802a9](https://github.com/blockstack/ux/commit/c9802a93392b98b84f35c46d20bda91acf48cff5))
- move key management to 'vault' in background script ([b83cc7e](https://github.com/blockstack/ux/commit/b83cc7e181e4d45474e7c0d393d045052f4fdd94))
- password validation, fixes [#733](https://github.com/blockstack/ux/issues/733), fixes [#720](https://github.com/blockstack/ux/issues/720) ([d8f6832](https://github.com/blockstack/ux/commit/d8f6832e85199d05ad906236bd8c12614427e227))
- persist networks ChainID, use it everywhere ([66a21c6](https://github.com/blockstack/ux/commit/66a21c674bb76c57e93d4d35652407da9833504d))
- qol improvements for tx signing ([f86d568](https://github.com/blockstack/ux/commit/f86d568825aa7bcb5512885546862d892324c546))
- refactor wallet logic, remove keychain ([0f3ac1f](https://github.com/blockstack/ux/commit/0f3ac1fa86b81d7eef1da1db89f8ab3c30540d6c))
- restore from wallet config ([008b1a2](https://github.com/blockstack/ux/commit/008b1a2c13f9cafcd1dc73f659bb53a328baeec9))
- stacks wallet branding, icon, asset cleanup, fixes [#732](https://github.com/blockstack/ux/issues/732) ([b9cb445](https://github.com/blockstack/ux/commit/b9cb445c92554ffc8ed9b05622cf087739454498))
- stacks wallet for web ([6957c04](https://github.com/blockstack/ux/commit/6957c04bdcfb816fcf757815b9b2720e7a9209eb))
- switch to signed-in account with connect tx calls ([d6a896f](https://github.com/blockstack/ux/commit/d6a896f39ab150fb8a9d3d3d6aba219334547c9b))
- use extension-native apis for app messaging ([663281a](https://github.com/blockstack/ux/commit/663281ad6e7a29e572ae6a6f24cf2bc6925a6a3b))

## 1.20.16 (2021-01-09)

**Note:** Version bump only for package @stacks/app

## 1.20.15 (2021-01-08)

### Bug Fixes

- broken tx signing with extension ([0235140](https://github.com/blockstack/ux/commit/023514021c64e06a80bc31125831d5c35ece3118))

## 1.20.14 (2021-01-06)

### Bug Fixes

- ignore exit code from FF addon publish ([ae05d36](https://github.com/blockstack/ux/commit/ae05d3608ac48cf3944d6d62ead2be65bc11bfde))

## 1.20.13 (2021-01-06)

### Bug Fixes

- use job conditionals instead of workflow conditional ([772b374](https://github.com/blockstack/ux/commit/772b3740def1b31fccf004630ef2d29d167210a4))

## 1.20.12 (2021-01-06)

### Bug Fixes

- ignore tags refs for version workflow ([d2a18fc](https://github.com/blockstack/ux/commit/d2a18fc45a4198a112e881552fbb6c502e557d90))

## 1.20.11 (2021-01-06)

### Bug Fixes

- better syntax for excluding tagged commits' ([4729d01](https://github.com/blockstack/ux/commit/4729d01a5afea316c55dade9143f83748b25071b))

## 1.20.10 (2021-01-06)

### Bug Fixes

- dont run publish on master commits without tag ([0b7cb3a](https://github.com/blockstack/ux/commit/0b7cb3ac50af92bd9ad993b70d48cd930fd31c29))

## 1.20.9 (2021-01-06)

**Note:** Version bump only for package @stacks/app

## 1.20.8 (2020-12-29)

### Bug Fixes

- build rpc pkg before deploying contracts ([c56d3f7](https://github.com/blockstack/ux/commit/c56d3f776494cd471aba77d35b7c5eba20ec245f))

## 1.20.7 (2020-12-29)

### Bug Fixes

- support ts paths in deploy-contracts script ([4bc3ce3](https://github.com/blockstack/ux/commit/4bc3ce3030e392f850cdeaea0e55c6bbaba7c15e))

## 1.20.6 (2020-12-29)

### Bug Fixes

- build packages before deploy-contracts script ([66f0857](https://github.com/blockstack/ux/commit/66f0857cde41d197c29682eedefd46bc16910096))

## 1.20.5 (2020-12-29)

### Bug Fixes

- auto-deploy testnet contracts with github actions ([b1b5c97](https://github.com/blockstack/ux/commit/b1b5c977bc90a9c47e08264d7e0aef665099696e))

## 1.20.4 (2020-12-14)

### Bug Fixes

- prod deploy apps job action ([b8ccc59](https://github.com/blockstack/ux/commit/b8ccc59d1c024705b80991ecb604030f8590e89d))

## 1.20.3 (2020-12-14)

### Bug Fixes

- change lerna publish to skip existing versions ([ac16572](https://github.com/blockstack/ux/commit/ac16572dba7e8d3e770bb4ba61d77094bcad02f9))

## 1.20.1 (2020-12-04)

### Bug Fixes

- export auth from connect ([d201aab](https://github.com/blockstack/ux/commit/d201aab14f2ced0b5f666be571035b7cbf76c602))

# 1.20.0 (2020-11-25)

### Features

- update extension build instructions ([4d55afa](https://github.com/blockstack/ux/commit/4d55afa51dbc3b4cedb81de679b16b91b2df007c))

## 1.19.4 (2020-11-18)

### Bug Fixes

- duplicate 'powered by' on sign in, fixes [#629](https://github.com/blockstack/ux/issues/629) ([6648517](https://github.com/blockstack/ux/commit/6648517e01cdd34a91225dfe08483055b418439c))

## 1.19.3 (2020-11-17)

### Bug Fixes

- update actions to fix set-path err ([0b4fd95](https://github.com/blockstack/ux/commit/0b4fd955f920d5c549690945a18673ea5f0462ae))

## 1.19.2 (2020-11-13)

**Note:** Version bump only for package @stacks/app

## 1.19.1 (2020-11-09)

### Bug Fixes

- build connect ui in build-ext.sh ([c0bd586](https://github.com/blockstack/ux/commit/c0bd586da2baace269144d8797555177882de76a))

# 1.19.0 (2020-11-07)

### Features

- more tests for url validation ([cad6e6a](https://github.com/blockstack/ux/commit/cad6e6a489bfd4de67ff8c20e480b3db99e97e4e))

## 1.18.4 (2020-11-06)

### Bug Fixes

- blockstack, react dep versions ([7f23d36](https://github.com/blockstack/ux/commit/7f23d36b0b6e4531027cd4b2c3cf5d76c7a274d2))

## 1.18.3 (2020-11-05)

### Bug Fixes

- valid-url package for url validation ([2d0664b](https://github.com/blockstack/ux/commit/2d0664b302dbf7464a9c9c5730e85675375b5a0e))

## 1.18.2 (2020-11-05)

### Bug Fixes

- add dep to app ([eade246](https://github.com/blockstack/ux/commit/eade246edadfb2963c543f3647ba348f77c170ec))

## 1.18.1 (2020-11-05)

### Bug Fixes

- add additional url validation ([1b67fbd](https://github.com/blockstack/ux/commit/1b67fbd91d0eb3cbfabfed297b9e18dfd7ab497b))

# 1.18.0 (2020-11-04)

### Features

- further simplify app instructions ([598827d](https://github.com/blockstack/ux/commit/598827d919fb62f9cc5308ebee5eac6acec4e982))

## 1.17.1 (2020-11-03)

### Bug Fixes

- proper glob for lerna packages ([5367055](https://github.com/blockstack/ux/commit/5367055e9c6622dd0a93f97275ab652a9af56bf9))

# 1.17.0 (2020-11-02)

### Bug Fixes

- better handling for mobile and blocked popups ([3151863](https://github.com/blockstack/ux/commit/31518632bf91c6217734c21c1163ae076f22368a))
- stencil publishing tweaks ([db45290](https://github.com/blockstack/ux/commit/db45290e6effbae8e91c9f0d2ab3c9d205cca0f0))
- **app:** prefix hex with 0x in tx result ([2277bc0](https://github.com/blockstack/ux/commit/2277bc0d2b6d52ef32c7dcdcf6d8db277a4a10de))
- add Content Security Policy ([27200a3](https://github.com/blockstack/ux/commit/27200a37aad19061aa1acb273dbada2549a152f2))
- add frame CSP to extension manifest ([4df09ce](https://github.com/blockstack/ux/commit/4df09ce88dc860c202a112edd560388a45b0ba0b))
- back to only frame CSP ([e613210](https://github.com/blockstack/ux/commit/e613210488111adc481915192cebf1912885a087))
- better lookup for profile location, fixes [#377](https://github.com/blockstack/ux/issues/377) ([f292cc1](https://github.com/blockstack/ux/commit/f292cc13aee3b9b531a64bcb4fa8ed76013c406b))
- better readme for firefox install ([cbecc86](https://github.com/blockstack/ux/commit/cbecc86e975a9b758260dbb16e3c29a938717d60))
- connect version was behind published ([2d7633e](https://github.com/blockstack/ux/commit/2d7633e8b842cf231f10c2ea032de3bcd67258ff))
- create secret key link not working, [#436](https://github.com/blockstack/ux/issues/436) ([c5870f5](https://github.com/blockstack/ux/commit/c5870f5422c49c754943eba70d7cc5285fc0ea01))
- cursor pointer on dont show this again, fixes [#508](https://github.com/blockstack/ux/issues/508) ([fe4dcf4](https://github.com/blockstack/ux/commit/fe4dcf418526289685687ad9f4526cd45db85410))
- default allow csp ([48e4532](https://github.com/blockstack/ux/commit/48e45321dd60490a6865177a14954e66075d4a0d))
- dont have selected address when canceling reuse, fixes [#454](https://github.com/blockstack/ux/issues/454) ([27f8f61](https://github.com/blockstack/ux/commit/27f8f616549ef9acc1e121f1fda9a40f8a142898))
- dont show extension button on mobile, fixes [#575](https://github.com/blockstack/ux/issues/575) ([1580805](https://github.com/blockstack/ux/commit/15808053177e5701079fef8f371beedffc8828f1))
- fix all eslint and prettier tasks ([217ca35](https://github.com/blockstack/ux/commit/217ca350500dafd45797f15251bee78c787c361a))
- home page alignment, [#440](https://github.com/blockstack/ux/issues/440) ([06dde15](https://github.com/blockstack/ux/commit/06dde15a651f901222650c015c75f8c1343068b6))
- inject version into manifest.json, ignore .zip in git ([6c046aa](https://github.com/blockstack/ux/commit/6c046aaa5e4ea08fff8026f2bb401c8a08dda793))
- keychain package was behind published version ([acbd4b0](https://github.com/blockstack/ux/commit/acbd4b064db61a60f01ce60ab75f9f2f39456eb8))
- keychain version ([e1618f6](https://github.com/blockstack/ux/commit/e1618f61b18490e87760b810766beab38e7ef16f))
- lighter CSP ([fcaed93](https://github.com/blockstack/ux/commit/fcaed93e833b84869f530c0dd5a464b9a97e4f34))
- lint ([fd708ff](https://github.com/blockstack/ux/commit/fd708ff79fc5bb620edf66a76938d9231bb84dea))
- manually fix new eslint bugs ([7650b7a](https://github.com/blockstack/ux/commit/7650b7a753465a1767a70df45ec1a9fbdd9db1d1))
- non-JSX SVG attrs throwing errors ([1b3f37f](https://github.com/blockstack/ux/commit/1b3f37f1097d3e7fd4ce73c3bf1124079e2caafc))
- prettier/eslint resolutions and versions ([0fe69bb](https://github.com/blockstack/ux/commit/0fe69bb53a102905e57b49125f7c7901e5c09d15))
- prevent auto-zoom of sign in field, fixes [#510](https://github.com/blockstack/ux/issues/510) ([eea3219](https://github.com/blockstack/ux/commit/eea3219c2de0925b7dd34a5f9fe2e5f6adb0ddc4))
- reduce scope of CSP ([d4d52ff](https://github.com/blockstack/ux/commit/d4d52ffbb3b9913f8e9324e70ec2010a6b40adea))
- use non-eval source maps, script-src self ([995a8f4](https://github.com/blockstack/ux/commit/995a8f42034ae9cea455438c01153bf4a469b81d))
- **app:** create StacksNetwork from payload ([2229bcd](https://github.com/blockstack/ux/commit/2229bcdca0be7036c8b7805c620a06929a9a965a))
- **app:** use strict comparison ([0f74422](https://github.com/blockstack/ux/commit/0f74422ce20fd12e8cdb420e3ccda492878a5e78))
- remove import of d.ts in keychain ([5d5f2eb](https://github.com/blockstack/ux/commit/5d5f2ebf0ccacfb4ee059e69781d935eb9869d34))
- remove repeating console log, closes [#628](https://github.com/blockstack/ux/issues/628) ([5aee7e1](https://github.com/blockstack/ux/commit/5aee7e153bdf0f854d779f0c4d76e52bc03b1cde))
- remove unused perms from manifest ([52abc1f](https://github.com/blockstack/ux/commit/52abc1fc91396dd04d322894a18ed257f2a13864))
- removes need for `unsafe-eval` CSR ([3f62dc5](https://github.com/blockstack/ux/commit/3f62dc5edb7b185715300a47648420cd1b6be293))
- rpc-client version ([83cf48b](https://github.com/blockstack/ux/commit/83cf48b679fa0938f6550c02472a97400dd009bf))
- run new lint:fix ([c84c893](https://github.com/blockstack/ux/commit/c84c8933ce6d9f748ae531f40d37c364fde157da))
- sanitize input ([7f289a6](https://github.com/blockstack/ux/commit/7f289a68cf84a0e69db3988cd580db4984103b12))
- show correct secret key on home screen, fixes [#517](https://github.com/blockstack/ux/issues/517) ([e14afcf](https://github.com/blockstack/ux/commit/e14afcf036ef25d45a541005aa9bb88cd218f4ab))
- show loading when reusing account, fixes [#464](https://github.com/blockstack/ux/issues/464) ([19fbf4e](https://github.com/blockstack/ux/commit/19fbf4efdc5755d26587ca01f225557082d61701))
- spacing between reused account icons, fixes [#509](https://github.com/blockstack/ux/issues/509) ([f47c8f2](https://github.com/blockstack/ux/commit/f47c8f2ef5a5025255dd67b57e8c2c839aa84807))
- tweaks to get extension working ([e068dce](https://github.com/blockstack/ux/commit/e068dcec1eca8c30375564a748ff3df4f0e8c715))
- ui version behind published ([8198ca0](https://github.com/blockstack/ux/commit/8198ca050baa5e7294f99f4521aba78cab7635d8))
- update node api url ([7c71cc7](https://github.com/blockstack/ux/commit/7c71cc7fd47cdb5626d618be70c953f3bfb9d7f7))
- use async dispatch, fixes [#441](https://github.com/blockstack/ux/issues/441) ([b097348](https://github.com/blockstack/ux/commit/b0973483dac295747cd511af87e42d3b5e156185))
- use const instead of let ([b93c712](https://github.com/blockstack/ux/commit/b93c712f0fa0fa21f105697dc4b022c284048445))
- use spread operator ([f432d74](https://github.com/blockstack/ux/commit/f432d74fb4b0c2143e2e7f1eae7cb56676a508c6))
- **app:** routing bug when trying to create new key, fixes [#381](https://github.com/blockstack/ux/issues/381) ([66f78aa](https://github.com/blockstack/ux/commit/66f78aaf64c3dd38555173ba68ca49ef9445bb53))
- **app:** use BigNum for fungible post condition amount ([633ac80](https://github.com/blockstack/ux/commit/633ac801b9a0f2f17eadd2dd302b8c4c235233de))
- **app:** use network from payload ([a21ea67](https://github.com/blockstack/ux/commit/a21ea67a1d9cfd49ffe5a5a34b5e7691b5eadf77))
- 16px below app icon ([4097510](https://github.com/blockstack/ux/commit/4097510df66c28343782af3cb558348689bb9b36))
- add account loading/transition, fixes [#163](https://github.com/blockstack/ux/issues/163) ([fbd063c](https://github.com/blockstack/ux/commit/fbd063c740698d0269d3f6cd862a112a9fb082b7))
- Add hover action to '<Account/>' list ([c405989](https://github.com/blockstack/ux/commit/c405989b071adc070463a2047e9e7ae6751e974b))
- add spacing below title, fixes [#139](https://github.com/blockstack/ux/issues/139) and [#234](https://github.com/blockstack/ux/issues/234) ([336a235](https://github.com/blockstack/ux/commit/336a23562f4f5d769d6c0e846afac79c9e8b29ae))
- adjust task names, add bootstrap task ([099038f](https://github.com/blockstack/ux/commit/099038f26e6664a6de9a64c86dfb24eb03d94a31))
- Alignment of the onboarding create screen, Closes [#136](https://github.com/blockstack/ux/issues/136) ([7e16aa5](https://github.com/blockstack/ux/commit/7e16aa52f207146ef01bd5698bedfdb3eaf978db))
- All uses of seed phrase ([c9e32a2](https://github.com/blockstack/ux/commit/c9e32a2d7ba302c4669dcbfe416fa4be86dcd8e3))
- app name undefined on create screen ([d8930dd](https://github.com/blockstack/ux/commit/d8930ddaf5a7b157bf17fed134da0c861adc8125))
- change button sizes to lg ([9465556](https://github.com/blockstack/ux/commit/9465556a49dc73ba1e947c06ce196b486d8f34e5))
- choose account after sign in with key, fixes [#156](https://github.com/blockstack/ux/issues/156) ([432ab82](https://github.com/blockstack/ux/commit/432ab8236e9b135c836986e92292faf6dcd01469))
- choose account hover styles ([e924b04](https://github.com/blockstack/ux/commit/e924b04e9ad38b46353667b50d3eca87b30965eb))
- clear onboarding path on sign out [#341](https://github.com/blockstack/ux/issues/341) ([f0820c9](https://github.com/blockstack/ux/commit/f0820c999143f8a00d89bcc04ecef0fa1699b5f1))
- document.title bug [#335](https://github.com/blockstack/ux/issues/335), caused by invalid redux hydration ([882fdd6](https://github.com/blockstack/ux/commit/882fdd6bfcb34e1ff1caed114065dc7b7b228e4d))
- document.title undefined, fixes [#335](https://github.com/blockstack/ux/issues/335) ([378b903](https://github.com/blockstack/ux/commit/378b903af1d0c66eed499d4ddba951b3a62bb658))
- dont require built ui to build connect ([c354be7](https://github.com/blockstack/ux/commit/c354be7bae0937dbcfdbfbb971f1f85a0a6057a9))
- dont show secret key when logged out, [#340](https://github.com/blockstack/ux/issues/340) ([355d518](https://github.com/blockstack/ux/commit/355d518c545527337db8efad3038bf65544e5a33))
- dont show warning if app already used, closes [#188](https://github.com/blockstack/ux/issues/188) ([93e110a](https://github.com/blockstack/ux/commit/93e110a0f357b756e66546d13061176370583d54))
- Ensure key input trims whitespace, Closes blockstack/connect[#66](https://github.com/blockstack/ux/issues/66) ([5dc347f](https://github.com/blockstack/ux/commit/5dc347f79024b452ef1440e58701e05b77beb3e3))
- Ensure page events are tracked ([e64396f](https://github.com/blockstack/ux/commit/e64396fc2688d0cb62f14a8aa515b826907f9da8))
- Error message, Closes [#169](https://github.com/blockstack/ux/issues/169) ([02e7c46](https://github.com/blockstack/ux/commit/02e7c46b5d5522c165c0b045e375b75df2ca8ca2))
- ErrorLabels not formatted properly, Closes [#159](https://github.com/blockstack/ux/issues/159) ([981dab6](https://github.com/blockstack/ux/commit/981dab62c445e537cc5ee0df7ec1522b5eeb2a11))
- hard-coded "Messenger" in secret key page ([bfc0848](https://github.com/blockstack/ux/commit/bfc084809ff0e03ac588592d9c041e37fdfee21a))
- hide icon in ScreenHeader if missing ([75d0682](https://github.com/blockstack/ux/commit/75d06824fa47aa660772b185723d5882934e3633))
- Input/Textarea fields autocapitalizing on iOS, Closes [#180](https://github.com/blockstack/ux/issues/180) ([45ec252](https://github.com/blockstack/ux/commit/45ec25224633ea8cfaa43cd57377e23138b4fd64))
- long usernames text-align: left, fixes [#174](https://github.com/blockstack/ux/issues/174) ([0939f99](https://github.com/blockstack/ux/commit/0939f99efedb4ed9555df7d2ec742fbdadd8a3b9))
- magic recovery code flow getting stuck ([500fdeb](https://github.com/blockstack/ux/commit/500fdebfad77cb7690f6ba17dd2822c96c439aa7))
- missing app icon on username error, [#338](https://github.com/blockstack/ux/issues/338) ([7296f63](https://github.com/blockstack/ux/commit/7296f63c91d53bbc06fdc995d672c0c978c76adf))
- Prevent zoom on focus by increasing fontsize, Closes [#183](https://github.com/blockstack/ux/issues/183) ([4044c1b](https://github.com/blockstack/ux/commit/4044c1ba9a72ef03d402fa9fb27ae14c346c62bc))
- profile info not set in authResponse ([9e48475](https://github.com/blockstack/ux/commit/9e4847544e89dc1c8abcebeda6d34dc2bf8a4c7f))
- proper title tracking, [#201](https://github.com/blockstack/ux/issues/201) ([b715c8b](https://github.com/blockstack/ux/commit/b715c8b3eac8fdef953252e74912fdfdc36a68e3))
- Remove resize and spellchecking from all inputs/textareas, Closes [#153](https://github.com/blockstack/ux/issues/153) ([a0eff88](https://github.com/blockstack/ux/commit/a0eff8825ebe12dd0a66e713aeed823137eb9f04))
- remove undefined ([a50bcb4](https://github.com/blockstack/ux/commit/a50bcb492db9d5561e04b992d04c4cd931714b23))
- Remove username placeholder ([c6d6258](https://github.com/blockstack/ux/commit/c6d62587e01848d6a3fe66813157fd1038c42ec5))
- screens with inputs will now submit on return, fixes: [#147](https://github.com/blockstack/ux/issues/147), [#160](https://github.com/blockstack/ux/issues/160) ([31cbbe4](https://github.com/blockstack/ux/commit/31cbbe4df8e5a50744e2eaad0f9e18ee4f16fde0))
- send to sign-in if sendToSignIn, even if path = sign-up ([b397ff3](https://github.com/blockstack/ux/commit/b397ff39d6a78cb7ae4a7364b5ba4fcf1ee51163))
- sign in flows dont change screen properly ([3c162cd](https://github.com/blockstack/ux/commit/3c162cd8d9de84ece62b663d53003806e154fd1f))
- spacing on collapse component ([0541cba](https://github.com/blockstack/ux/commit/0541cba80df697541f4590cd7768dd7617c5c4c2))
- textarea height and title ([60df34a](https://github.com/blockstack/ux/commit/60df34a44fdcbe694f3db3809a8f89567e59e038))
- Tracking ([#111](https://github.com/blockstack/ux/issues/111)) ([4babe6b](https://github.com/blockstack/ux/commit/4babe6bd4235367ec09b43270b960d07dda41b23))
- ts error with react-router import ([8ecef0f](https://github.com/blockstack/ux/commit/8ecef0fbd537666c66f1f41bf85371b8ca80d166))
- typo ([5c40890](https://github.com/blockstack/ux/commit/5c40890f41678150fe3dee92aa67101326e552a3))
- update type for button mode prop ([3f8ad2f](https://github.com/blockstack/ux/commit/3f8ad2f15a6f2784b3440acf3265f991726fe8eb))
- username capitalization, fixes [#419](https://github.com/blockstack/ux/issues/419) ([97cb976](https://github.com/blockstack/ux/commit/97cb9764ddacccba820ff42cdf1734b230dbeb27))
- validate that seed is not empty on sign in, fixes [#170](https://github.com/blockstack/ux/issues/170) ([e0ea149](https://github.com/blockstack/ux/commit/e0ea14909bad5b7f428a835953eb01230fa709f1))
- Visual glitches with account warning dialog ([ca2224b](https://github.com/blockstack/ux/commit/ca2224b9a034f01181dc905baca77a623bc74d22))

### Features

- add ability to view secret key ([440c3e5](https://github.com/blockstack/ux/commit/440c3e5420321e1a3bcfe409cf65b44fe45e1330))
- add button to get extension ([f0ba354](https://github.com/blockstack/ux/commit/f0ba3545226886f928b01dbf2fb2e3e620ac5bf3))
- add CI, proper connections between packages ([5934829](https://github.com/blockstack/ux/commit/5934829a40338ac269b80783912c8dad17af1962))
- add debug mode for transaction signing ([3c66887](https://github.com/blockstack/ux/commit/3c6688714b070a38c2eefe0d93a6218163917c53))
- Add identity validation and availability to the auth flow ([3f51783](https://github.com/blockstack/ux/commit/3f51783d33373cb815121a55772d751fe2c09504))
- add keychain logic to restore identities ([e2a18d6](https://github.com/blockstack/ux/commit/e2a18d6036327efe403892eeec721ad9951c8983))
- add link back to Secret Key page, Closes [#168](https://github.com/blockstack/ux/issues/168) ([5ed74c7](https://github.com/blockstack/ux/commit/5ed74c7cd417994667b325cf4ca96a3fd23c7ed4))
- Add loading spinner when selecting account, Closes [#96](https://github.com/blockstack/ux/issues/96) ([386235d](https://github.com/blockstack/ux/commit/386235d6ec7dd7dc62286e0bd16fe3a44448c7cf))
- add proper page tracking to first page ([89b9f5d](https://github.com/blockstack/ux/commit/89b9f5d5bd52550e1d8b53a06302ed708060df2a))
- Add validation to seed entry field ([#63](https://github.com/blockstack/ux/issues/63)) ([6a34531](https://github.com/blockstack/ux/commit/6a345311037f61d19992284065696631c42f3f84))
- add variants to username error state ([19b603b](https://github.com/blockstack/ux/commit/19b603ba4ba40b42f2d0a9d99cf274af1c3eaf20))
- add vercel headers ([ae3c72a](https://github.com/blockstack/ux/commit/ae3c72afff49c09145d896412356cd129668f29d))
- Add write key segment ([8ff9be7](https://github.com/blockstack/ux/commit/8ff9be77b1494f44a69e890c5d4b2c724ad7e00b))
- adds appURL to onboarding store ([5085bb0](https://github.com/blockstack/ux/commit/5085bb0072c8640110b12ebf8e8d98bdd1928dcb))
- adds onCancel method for when popup closed ([c5800ae](https://github.com/blockstack/ux/commit/c5800aeb341c65e108b93b5e7a17a6d937292fc1))
- adds screen changed event ([b1600b6](https://github.com/blockstack/ux/commit/b1600b6e41a70d39f92a9818eb203d6941e81b6b))
- change copy of intro modal CTA, fixes [#466](https://github.com/blockstack/ux/issues/466) ([6b64222](https://github.com/blockstack/ux/commit/6b64222fc31ab5af4b9807ae280101039388b223))
- codebox and highlighter ([b9056f8](https://github.com/blockstack/ux/commit/b9056f8102eff8d32898201717a3cd3699234561))
- dont use popups in mobile, adds method to handle redirect auth ([450f58b](https://github.com/blockstack/ux/commit/450f58bcb5c3431d6b1ac649d19f319da34d9f7f))
- expose connect, app version ([b90a618](https://github.com/blockstack/ux/commit/b90a618fbeaac0ed998ec5ecd10eda8facdc6e10))
- implement basic homepage ([10ac702](https://github.com/blockstack/ux/commit/10ac70200e769ae91544073e75347e9d1de33e81))
- implementation of router ([bd03411](https://github.com/blockstack/ux/commit/bd034112a098868d07e04dc6aba97d15145707d1))
- improve accessibility of connect modal, links ([74352c7](https://github.com/blockstack/ux/commit/74352c74b5894fa2a612a20f00c02d9f8791a5c2))
- improve extension instructions ([e4f9f89](https://github.com/blockstack/ux/commit/e4f9f899a3e42796e34e70943efc52f68a77eba0))
- Layout closer to designs, created <ExplainerCard /> ([#68](https://github.com/blockstack/ux/issues/68)) ([52f4fe7](https://github.com/blockstack/ux/commit/52f4fe75f93676e35d6986246262acf1eb6a6c2f))
- more detailed events to username ([5cc323b](https://github.com/blockstack/ux/commit/5cc323b4ba7b122e7f5a60dfee422b3ca7f21942))
- more events, mostly around choosing an account ([a1f7401](https://github.com/blockstack/ux/commit/a1f7401b226fe2ae196d8dadc8c4d3711fada998))
- move changing screen into analytics hook ([0be47b5](https://github.com/blockstack/ux/commit/0be47b54619f9bb0bd859b14ce6e253017cd1e03)), closes [#130](https://github.com/blockstack/ux/issues/130)
- move doTrack into hook, [#130](https://github.com/blockstack/ux/issues/130) ([6b1d390](https://github.com/blockstack/ux/commit/6b1d390e5f4ac36fd1aeb5d28f53daa9b8ae0bce))
- move username screen to the end, closes [#110](https://github.com/blockstack/ux/issues/110) ([942379b](https://github.com/blockstack/ux/commit/942379b3c7de757d20bc43b85e5ed426cc086691))
- Page title changes between screens, Closes [#149](https://github.com/blockstack/ux/issues/149) ([e1373d8](https://github.com/blockstack/ux/commit/e1373d8c657e861d71d19311d6426f1c37c2a7d1))
- prompt password managers earlier in flow, closes [#224](https://github.com/blockstack/ux/issues/224) ([12a6772](https://github.com/blockstack/ux/commit/12a6772fa86096687bcdc5801ea46f7ab42985ee))
- refactor connect ui into web components with stencil ([7f65900](https://github.com/blockstack/ux/commit/7f65900fd6f648dcad57502d985b8dc862e7b72f)), closes [#581](https://github.com/blockstack/ux/issues/581) [#604](https://github.com/blockstack/ux/issues/604) [#612](https://github.com/blockstack/ux/issues/612) [#606](https://github.com/blockstack/ux/issues/606) [#613](https://github.com/blockstack/ux/issues/613)
- remove auto username generation ([b160f2b](https://github.com/blockstack/ux/commit/b160f2b05613118cc920d2344defa06b45ce214e))
- remove connect screen at end of onboarding ([42c8958](https://github.com/blockstack/ux/commit/42c895838786c6843113409148c0e6b263e96e0e))
- remove secret key branding, [#334](https://github.com/blockstack/ux/issues/334) ([e57c8bc](https://github.com/blockstack/ux/commit/e57c8bc84540b352078e56f19cada41ba0ef6904))
- rename all packages to [@stacks](https://github.com/stacks) ([b56e750](https://github.com/blockstack/ux/commit/b56e750db5b30d4c56e9669285a11db565e8a675))
- send user back into unfinished onboarding flow ([5ccda3c](https://github.com/blockstack/ux/commit/5ccda3c278e0caac7b4669a193b8e62209fda543))
- show error page when username registration fails ([fd457c6](https://github.com/blockstack/ux/commit/fd457c60f7081ee44c7fa7ae2cb3ab06070293c2))
- slight speedup on final auth transition ([6fb56a8](https://github.com/blockstack/ux/commit/6fb56a89181cdb99d4b20d27066647dd93f46fcb))
- support relative app icons in appDetails, closes [#348](https://github.com/blockstack/ux/issues/348) ([40f27dc](https://github.com/blockstack/ux/commit/40f27dcb64eecfa7d5f85ff8fba18999a21ea97f))
- use .id.blockstack subdomain, fixes [#123](https://github.com/blockstack/ux/issues/123) ([59d3087](https://github.com/blockstack/ux/commit/59d3087654bb52396d242467cab897621dce3f6c))
- use stats package for metrics ([710f1fc](https://github.com/blockstack/ux/commit/710f1fca0a3fc8ad4aaed75ec828ddb815b1483b))
- use window.location for ios redirect ([9d83fc9](https://github.com/blockstack/ux/commit/9d83fc916e029d437f6a2e8af9b19b734f4aa3ac))
- **app:** hide default domain placeholder during onboarding ([8a12763](https://github.com/blockstack/ux/commit/8a12763d65112626766630ff915e3ae802fe82ef)), closes [#221](https://github.com/blockstack/ux/issues/221) [#220](https://github.com/blockstack/ux/issues/220)
- **onboarding:** update branding, copy ([7b4f6ac](https://github.com/blockstack/ux/commit/7b4f6ac43f5764626bd59608ec0d1eed8d664d69))

## [1.16.1](https://github.com/blockstack/ux/compare/@stacks/app@1.16.0...@stacks/app@1.16.1) (2020-11-02)

**Note:** Version bump only for package @stacks/app

# 1.16.0 (2020-11-02)

### Bug Fixes

- **app:** prefix hex with 0x in tx result ([2277bc0](https://github.com/blockstack/ux/commit/2277bc0d2b6d52ef32c7dcdcf6d8db277a4a10de))
- add Content Security Policy ([27200a3](https://github.com/blockstack/ux/commit/27200a37aad19061aa1acb273dbada2549a152f2))
- add frame CSP to extension manifest ([4df09ce](https://github.com/blockstack/ux/commit/4df09ce88dc860c202a112edd560388a45b0ba0b))
- back to only frame CSP ([e613210](https://github.com/blockstack/ux/commit/e613210488111adc481915192cebf1912885a087))
- better handling for mobile and blocked popups ([3151863](https://github.com/blockstack/ux/commit/31518632bf91c6217734c21c1163ae076f22368a))
- better lookup for profile location, fixes [#377](https://github.com/blockstack/ux/issues/377) ([f292cc1](https://github.com/blockstack/ux/commit/f292cc13aee3b9b531a64bcb4fa8ed76013c406b))
- better readme for firefox install ([cbecc86](https://github.com/blockstack/ux/commit/cbecc86e975a9b758260dbb16e3c29a938717d60))
- connect version was behind published ([2d7633e](https://github.com/blockstack/ux/commit/2d7633e8b842cf231f10c2ea032de3bcd67258ff))
- create secret key link not working, [#436](https://github.com/blockstack/ux/issues/436) ([c5870f5](https://github.com/blockstack/ux/commit/c5870f5422c49c754943eba70d7cc5285fc0ea01))
- cursor pointer on dont show this again, fixes [#508](https://github.com/blockstack/ux/issues/508) ([fe4dcf4](https://github.com/blockstack/ux/commit/fe4dcf418526289685687ad9f4526cd45db85410))
- default allow csp ([48e4532](https://github.com/blockstack/ux/commit/48e45321dd60490a6865177a14954e66075d4a0d))
- dont have selected address when canceling reuse, fixes [#454](https://github.com/blockstack/ux/issues/454) ([27f8f61](https://github.com/blockstack/ux/commit/27f8f616549ef9acc1e121f1fda9a40f8a142898))
- dont show extension button on mobile, fixes [#575](https://github.com/blockstack/ux/issues/575) ([1580805](https://github.com/blockstack/ux/commit/15808053177e5701079fef8f371beedffc8828f1))
- fix all eslint and prettier tasks ([217ca35](https://github.com/blockstack/ux/commit/217ca350500dafd45797f15251bee78c787c361a))
- home page alignment, [#440](https://github.com/blockstack/ux/issues/440) ([06dde15](https://github.com/blockstack/ux/commit/06dde15a651f901222650c015c75f8c1343068b6))
- inject version into manifest.json, ignore .zip in git ([6c046aa](https://github.com/blockstack/ux/commit/6c046aaa5e4ea08fff8026f2bb401c8a08dda793))
- keychain package was behind published version ([acbd4b0](https://github.com/blockstack/ux/commit/acbd4b064db61a60f01ce60ab75f9f2f39456eb8))
- keychain version ([e1618f6](https://github.com/blockstack/ux/commit/e1618f61b18490e87760b810766beab38e7ef16f))
- lighter CSP ([fcaed93](https://github.com/blockstack/ux/commit/fcaed93e833b84869f530c0dd5a464b9a97e4f34))
- lint ([fd708ff](https://github.com/blockstack/ux/commit/fd708ff79fc5bb620edf66a76938d9231bb84dea))
- manually fix new eslint bugs ([7650b7a](https://github.com/blockstack/ux/commit/7650b7a753465a1767a70df45ec1a9fbdd9db1d1))
- non-JSX SVG attrs throwing errors ([1b3f37f](https://github.com/blockstack/ux/commit/1b3f37f1097d3e7fd4ce73c3bf1124079e2caafc))
- prettier/eslint resolutions and versions ([0fe69bb](https://github.com/blockstack/ux/commit/0fe69bb53a102905e57b49125f7c7901e5c09d15))
- prevent auto-zoom of sign in field, fixes [#510](https://github.com/blockstack/ux/issues/510) ([eea3219](https://github.com/blockstack/ux/commit/eea3219c2de0925b7dd34a5f9fe2e5f6adb0ddc4))
- reduce scope of CSP ([d4d52ff](https://github.com/blockstack/ux/commit/d4d52ffbb3b9913f8e9324e70ec2010a6b40adea))
- remove import of d.ts in keychain ([5d5f2eb](https://github.com/blockstack/ux/commit/5d5f2ebf0ccacfb4ee059e69781d935eb9869d34))
- use non-eval source maps, script-src self ([995a8f4](https://github.com/blockstack/ux/commit/995a8f42034ae9cea455438c01153bf4a469b81d))
- **app:** create StacksNetwork from payload ([2229bcd](https://github.com/blockstack/ux/commit/2229bcdca0be7036c8b7805c620a06929a9a965a))
- **app:** use network from payload ([a21ea67](https://github.com/blockstack/ux/commit/a21ea67a1d9cfd49ffe5a5a34b5e7691b5eadf77))
- **app:** use strict comparison ([0f74422](https://github.com/blockstack/ux/commit/0f74422ce20fd12e8cdb420e3ccda492878a5e78))
- remove repeating console log, closes [#628](https://github.com/blockstack/ux/issues/628) ([5aee7e1](https://github.com/blockstack/ux/commit/5aee7e153bdf0f854d779f0c4d76e52bc03b1cde))
- remove unused perms from manifest ([52abc1f](https://github.com/blockstack/ux/commit/52abc1fc91396dd04d322894a18ed257f2a13864))
- removes need for `unsafe-eval` CSR ([3f62dc5](https://github.com/blockstack/ux/commit/3f62dc5edb7b185715300a47648420cd1b6be293))
- rpc-client version ([83cf48b](https://github.com/blockstack/ux/commit/83cf48b679fa0938f6550c02472a97400dd009bf))
- run new lint:fix ([c84c893](https://github.com/blockstack/ux/commit/c84c8933ce6d9f748ae531f40d37c364fde157da))
- sanitize input ([7f289a6](https://github.com/blockstack/ux/commit/7f289a68cf84a0e69db3988cd580db4984103b12))
- show correct secret key on home screen, fixes [#517](https://github.com/blockstack/ux/issues/517) ([e14afcf](https://github.com/blockstack/ux/commit/e14afcf036ef25d45a541005aa9bb88cd218f4ab))
- show loading when reusing account, fixes [#464](https://github.com/blockstack/ux/issues/464) ([19fbf4e](https://github.com/blockstack/ux/commit/19fbf4efdc5755d26587ca01f225557082d61701))
- spacing between reused account icons, fixes [#509](https://github.com/blockstack/ux/issues/509) ([f47c8f2](https://github.com/blockstack/ux/commit/f47c8f2ef5a5025255dd67b57e8c2c839aa84807))
- tweaks to get extension working ([e068dce](https://github.com/blockstack/ux/commit/e068dcec1eca8c30375564a748ff3df4f0e8c715))
- ui version behind published ([8198ca0](https://github.com/blockstack/ux/commit/8198ca050baa5e7294f99f4521aba78cab7635d8))
- update node api url ([7c71cc7](https://github.com/blockstack/ux/commit/7c71cc7fd47cdb5626d618be70c953f3bfb9d7f7))
- use const instead of let ([b93c712](https://github.com/blockstack/ux/commit/b93c712f0fa0fa21f105697dc4b022c284048445))
- use spread operator ([f432d74](https://github.com/blockstack/ux/commit/f432d74fb4b0c2143e2e7f1eae7cb56676a508c6))
- **app:** use BigNum for fungible post condition amount ([633ac80](https://github.com/blockstack/ux/commit/633ac801b9a0f2f17eadd2dd302b8c4c235233de))
- use async dispatch, fixes [#441](https://github.com/blockstack/ux/issues/441) ([b097348](https://github.com/blockstack/ux/commit/b0973483dac295747cd511af87e42d3b5e156185))
- username capitalization, fixes [#419](https://github.com/blockstack/ux/issues/419) ([97cb976](https://github.com/blockstack/ux/commit/97cb9764ddacccba820ff42cdf1734b230dbeb27))
- **app:** routing bug when trying to create new key, fixes [#381](https://github.com/blockstack/ux/issues/381) ([66f78aa](https://github.com/blockstack/ux/commit/66f78aaf64c3dd38555173ba68ca49ef9445bb53))
- 16px below app icon ([4097510](https://github.com/blockstack/ux/commit/4097510df66c28343782af3cb558348689bb9b36))
- add account loading/transition, fixes [#163](https://github.com/blockstack/ux/issues/163) ([fbd063c](https://github.com/blockstack/ux/commit/fbd063c740698d0269d3f6cd862a112a9fb082b7))
- Add hover action to '<Account/>' list ([c405989](https://github.com/blockstack/ux/commit/c405989b071adc070463a2047e9e7ae6751e974b))
- add spacing below title, fixes [#139](https://github.com/blockstack/ux/issues/139) and [#234](https://github.com/blockstack/ux/issues/234) ([336a235](https://github.com/blockstack/ux/commit/336a23562f4f5d769d6c0e846afac79c9e8b29ae))
- adjust task names, add bootstrap task ([099038f](https://github.com/blockstack/ux/commit/099038f26e6664a6de9a64c86dfb24eb03d94a31))
- Alignment of the onboarding create screen, Closes [#136](https://github.com/blockstack/ux/issues/136) ([7e16aa5](https://github.com/blockstack/ux/commit/7e16aa52f207146ef01bd5698bedfdb3eaf978db))
- All uses of seed phrase ([c9e32a2](https://github.com/blockstack/ux/commit/c9e32a2d7ba302c4669dcbfe416fa4be86dcd8e3))
- app name undefined on create screen ([d8930dd](https://github.com/blockstack/ux/commit/d8930ddaf5a7b157bf17fed134da0c861adc8125))
- change button sizes to lg ([9465556](https://github.com/blockstack/ux/commit/9465556a49dc73ba1e947c06ce196b486d8f34e5))
- choose account after sign in with key, fixes [#156](https://github.com/blockstack/ux/issues/156) ([432ab82](https://github.com/blockstack/ux/commit/432ab8236e9b135c836986e92292faf6dcd01469))
- choose account hover styles ([e924b04](https://github.com/blockstack/ux/commit/e924b04e9ad38b46353667b50d3eca87b30965eb))
- clear onboarding path on sign out [#341](https://github.com/blockstack/ux/issues/341) ([f0820c9](https://github.com/blockstack/ux/commit/f0820c999143f8a00d89bcc04ecef0fa1699b5f1))
- document.title bug [#335](https://github.com/blockstack/ux/issues/335), caused by invalid redux hydration ([882fdd6](https://github.com/blockstack/ux/commit/882fdd6bfcb34e1ff1caed114065dc7b7b228e4d))
- document.title undefined, fixes [#335](https://github.com/blockstack/ux/issues/335) ([378b903](https://github.com/blockstack/ux/commit/378b903af1d0c66eed499d4ddba951b3a62bb658))
- dont require built ui to build connect ([c354be7](https://github.com/blockstack/ux/commit/c354be7bae0937dbcfdbfbb971f1f85a0a6057a9))
- dont show secret key when logged out, [#340](https://github.com/blockstack/ux/issues/340) ([355d518](https://github.com/blockstack/ux/commit/355d518c545527337db8efad3038bf65544e5a33))
- dont show warning if app already used, closes [#188](https://github.com/blockstack/ux/issues/188) ([93e110a](https://github.com/blockstack/ux/commit/93e110a0f357b756e66546d13061176370583d54))
- Ensure key input trims whitespace, Closes blockstack/connect[#66](https://github.com/blockstack/ux/issues/66) ([5dc347f](https://github.com/blockstack/ux/commit/5dc347f79024b452ef1440e58701e05b77beb3e3))
- Ensure page events are tracked ([e64396f](https://github.com/blockstack/ux/commit/e64396fc2688d0cb62f14a8aa515b826907f9da8))
- Error message, Closes [#169](https://github.com/blockstack/ux/issues/169) ([02e7c46](https://github.com/blockstack/ux/commit/02e7c46b5d5522c165c0b045e375b75df2ca8ca2))
- ErrorLabels not formatted properly, Closes [#159](https://github.com/blockstack/ux/issues/159) ([981dab6](https://github.com/blockstack/ux/commit/981dab62c445e537cc5ee0df7ec1522b5eeb2a11))
- hard-coded "Messenger" in secret key page ([bfc0848](https://github.com/blockstack/ux/commit/bfc084809ff0e03ac588592d9c041e37fdfee21a))
- hide icon in ScreenHeader if missing ([75d0682](https://github.com/blockstack/ux/commit/75d06824fa47aa660772b185723d5882934e3633))
- Input/Textarea fields autocapitalizing on iOS, Closes [#180](https://github.com/blockstack/ux/issues/180) ([45ec252](https://github.com/blockstack/ux/commit/45ec25224633ea8cfaa43cd57377e23138b4fd64))
- long usernames text-align: left, fixes [#174](https://github.com/blockstack/ux/issues/174) ([0939f99](https://github.com/blockstack/ux/commit/0939f99efedb4ed9555df7d2ec742fbdadd8a3b9))
- magic recovery code flow getting stuck ([500fdeb](https://github.com/blockstack/ux/commit/500fdebfad77cb7690f6ba17dd2822c96c439aa7))
- missing app icon on username error, [#338](https://github.com/blockstack/ux/issues/338) ([7296f63](https://github.com/blockstack/ux/commit/7296f63c91d53bbc06fdc995d672c0c978c76adf))
- Prevent zoom on focus by increasing fontsize, Closes [#183](https://github.com/blockstack/ux/issues/183) ([4044c1b](https://github.com/blockstack/ux/commit/4044c1ba9a72ef03d402fa9fb27ae14c346c62bc))
- profile info not set in authResponse ([9e48475](https://github.com/blockstack/ux/commit/9e4847544e89dc1c8abcebeda6d34dc2bf8a4c7f))
- proper title tracking, [#201](https://github.com/blockstack/ux/issues/201) ([b715c8b](https://github.com/blockstack/ux/commit/b715c8b3eac8fdef953252e74912fdfdc36a68e3))
- Remove resize and spellchecking from all inputs/textareas, Closes [#153](https://github.com/blockstack/ux/issues/153) ([a0eff88](https://github.com/blockstack/ux/commit/a0eff8825ebe12dd0a66e713aeed823137eb9f04))
- remove undefined ([a50bcb4](https://github.com/blockstack/ux/commit/a50bcb492db9d5561e04b992d04c4cd931714b23))
- Remove username placeholder ([c6d6258](https://github.com/blockstack/ux/commit/c6d62587e01848d6a3fe66813157fd1038c42ec5))
- screens with inputs will now submit on return, fixes: [#147](https://github.com/blockstack/ux/issues/147), [#160](https://github.com/blockstack/ux/issues/160) ([31cbbe4](https://github.com/blockstack/ux/commit/31cbbe4df8e5a50744e2eaad0f9e18ee4f16fde0))
- send to sign-in if sendToSignIn, even if path = sign-up ([b397ff3](https://github.com/blockstack/ux/commit/b397ff39d6a78cb7ae4a7364b5ba4fcf1ee51163))
- sign in flows dont change screen properly ([3c162cd](https://github.com/blockstack/ux/commit/3c162cd8d9de84ece62b663d53003806e154fd1f))
- spacing on collapse component ([0541cba](https://github.com/blockstack/ux/commit/0541cba80df697541f4590cd7768dd7617c5c4c2))
- textarea height and title ([60df34a](https://github.com/blockstack/ux/commit/60df34a44fdcbe694f3db3809a8f89567e59e038))
- Tracking ([#111](https://github.com/blockstack/ux/issues/111)) ([4babe6b](https://github.com/blockstack/ux/commit/4babe6bd4235367ec09b43270b960d07dda41b23))
- ts error with react-router import ([8ecef0f](https://github.com/blockstack/ux/commit/8ecef0fbd537666c66f1f41bf85371b8ca80d166))
- typo ([5c40890](https://github.com/blockstack/ux/commit/5c40890f41678150fe3dee92aa67101326e552a3))
- update type for button mode prop ([3f8ad2f](https://github.com/blockstack/ux/commit/3f8ad2f15a6f2784b3440acf3265f991726fe8eb))
- validate that seed is not empty on sign in, fixes [#170](https://github.com/blockstack/ux/issues/170) ([e0ea149](https://github.com/blockstack/ux/commit/e0ea14909bad5b7f428a835953eb01230fa709f1))
- Visual glitches with account warning dialog ([ca2224b](https://github.com/blockstack/ux/commit/ca2224b9a034f01181dc905baca77a623bc74d22))

### Features

- add ability to view secret key ([440c3e5](https://github.com/blockstack/ux/commit/440c3e5420321e1a3bcfe409cf65b44fe45e1330))
- add button to get extension ([f0ba354](https://github.com/blockstack/ux/commit/f0ba3545226886f928b01dbf2fb2e3e620ac5bf3))
- add CI, proper connections between packages ([5934829](https://github.com/blockstack/ux/commit/5934829a40338ac269b80783912c8dad17af1962))
- add debug mode for transaction signing ([3c66887](https://github.com/blockstack/ux/commit/3c6688714b070a38c2eefe0d93a6218163917c53))
- Add identity validation and availability to the auth flow ([3f51783](https://github.com/blockstack/ux/commit/3f51783d33373cb815121a55772d751fe2c09504))
- add keychain logic to restore identities ([e2a18d6](https://github.com/blockstack/ux/commit/e2a18d6036327efe403892eeec721ad9951c8983))
- add link back to Secret Key page, Closes [#168](https://github.com/blockstack/ux/issues/168) ([5ed74c7](https://github.com/blockstack/ux/commit/5ed74c7cd417994667b325cf4ca96a3fd23c7ed4))
- Add loading spinner when selecting account, Closes [#96](https://github.com/blockstack/ux/issues/96) ([386235d](https://github.com/blockstack/ux/commit/386235d6ec7dd7dc62286e0bd16fe3a44448c7cf))
- add proper page tracking to first page ([89b9f5d](https://github.com/blockstack/ux/commit/89b9f5d5bd52550e1d8b53a06302ed708060df2a))
- Add validation to seed entry field ([#63](https://github.com/blockstack/ux/issues/63)) ([6a34531](https://github.com/blockstack/ux/commit/6a345311037f61d19992284065696631c42f3f84))
- add variants to username error state ([19b603b](https://github.com/blockstack/ux/commit/19b603ba4ba40b42f2d0a9d99cf274af1c3eaf20))
- add vercel headers ([ae3c72a](https://github.com/blockstack/ux/commit/ae3c72afff49c09145d896412356cd129668f29d))
- Add write key segment ([8ff9be7](https://github.com/blockstack/ux/commit/8ff9be77b1494f44a69e890c5d4b2c724ad7e00b))
- adds appURL to onboarding store ([5085bb0](https://github.com/blockstack/ux/commit/5085bb0072c8640110b12ebf8e8d98bdd1928dcb))
- adds onCancel method for when popup closed ([c5800ae](https://github.com/blockstack/ux/commit/c5800aeb341c65e108b93b5e7a17a6d937292fc1))
- adds screen changed event ([b1600b6](https://github.com/blockstack/ux/commit/b1600b6e41a70d39f92a9818eb203d6941e81b6b))
- change copy of intro modal CTA, fixes [#466](https://github.com/blockstack/ux/issues/466) ([6b64222](https://github.com/blockstack/ux/commit/6b64222fc31ab5af4b9807ae280101039388b223))
- codebox and highlighter ([b9056f8](https://github.com/blockstack/ux/commit/b9056f8102eff8d32898201717a3cd3699234561))
- dont use popups in mobile, adds method to handle redirect auth ([450f58b](https://github.com/blockstack/ux/commit/450f58bcb5c3431d6b1ac649d19f319da34d9f7f))
- expose connect, app version ([b90a618](https://github.com/blockstack/ux/commit/b90a618fbeaac0ed998ec5ecd10eda8facdc6e10))
- implement basic homepage ([10ac702](https://github.com/blockstack/ux/commit/10ac70200e769ae91544073e75347e9d1de33e81))
- implementation of router ([bd03411](https://github.com/blockstack/ux/commit/bd034112a098868d07e04dc6aba97d15145707d1))
- improve accessibility of connect modal, links ([74352c7](https://github.com/blockstack/ux/commit/74352c74b5894fa2a612a20f00c02d9f8791a5c2))
- improve extension instructions ([e4f9f89](https://github.com/blockstack/ux/commit/e4f9f899a3e42796e34e70943efc52f68a77eba0))
- Layout closer to designs, created <ExplainerCard /> ([#68](https://github.com/blockstack/ux/issues/68)) ([52f4fe7](https://github.com/blockstack/ux/commit/52f4fe75f93676e35d6986246262acf1eb6a6c2f))
- more detailed events to username ([5cc323b](https://github.com/blockstack/ux/commit/5cc323b4ba7b122e7f5a60dfee422b3ca7f21942))
- more events, mostly around choosing an account ([a1f7401](https://github.com/blockstack/ux/commit/a1f7401b226fe2ae196d8dadc8c4d3711fada998))
- move changing screen into analytics hook ([0be47b5](https://github.com/blockstack/ux/commit/0be47b54619f9bb0bd859b14ce6e253017cd1e03)), closes [#130](https://github.com/blockstack/ux/issues/130)
- move doTrack into hook, [#130](https://github.com/blockstack/ux/issues/130) ([6b1d390](https://github.com/blockstack/ux/commit/6b1d390e5f4ac36fd1aeb5d28f53daa9b8ae0bce))
- move username screen to the end, closes [#110](https://github.com/blockstack/ux/issues/110) ([942379b](https://github.com/blockstack/ux/commit/942379b3c7de757d20bc43b85e5ed426cc086691))
- Page title changes between screens, Closes [#149](https://github.com/blockstack/ux/issues/149) ([e1373d8](https://github.com/blockstack/ux/commit/e1373d8c657e861d71d19311d6426f1c37c2a7d1))
- prompt password managers earlier in flow, closes [#224](https://github.com/blockstack/ux/issues/224) ([12a6772](https://github.com/blockstack/ux/commit/12a6772fa86096687bcdc5801ea46f7ab42985ee))
- refactor connect ui into web components with stencil ([7f65900](https://github.com/blockstack/ux/commit/7f65900fd6f648dcad57502d985b8dc862e7b72f)), closes [#581](https://github.com/blockstack/ux/issues/581) [#604](https://github.com/blockstack/ux/issues/604) [#612](https://github.com/blockstack/ux/issues/612) [#606](https://github.com/blockstack/ux/issues/606) [#613](https://github.com/blockstack/ux/issues/613)
- remove auto username generation ([b160f2b](https://github.com/blockstack/ux/commit/b160f2b05613118cc920d2344defa06b45ce214e))
- remove connect screen at end of onboarding ([42c8958](https://github.com/blockstack/ux/commit/42c895838786c6843113409148c0e6b263e96e0e))
- remove secret key branding, [#334](https://github.com/blockstack/ux/issues/334) ([e57c8bc](https://github.com/blockstack/ux/commit/e57c8bc84540b352078e56f19cada41ba0ef6904))
- rename all packages to [@stacks](https://github.com/stacks) ([b56e750](https://github.com/blockstack/ux/commit/b56e750db5b30d4c56e9669285a11db565e8a675))
- send user back into unfinished onboarding flow ([5ccda3c](https://github.com/blockstack/ux/commit/5ccda3c278e0caac7b4669a193b8e62209fda543))
- show error page when username registration fails ([fd457c6](https://github.com/blockstack/ux/commit/fd457c60f7081ee44c7fa7ae2cb3ab06070293c2))
- slight speedup on final auth transition ([6fb56a8](https://github.com/blockstack/ux/commit/6fb56a89181cdb99d4b20d27066647dd93f46fcb))
- support relative app icons in appDetails, closes [#348](https://github.com/blockstack/ux/issues/348) ([40f27dc](https://github.com/blockstack/ux/commit/40f27dcb64eecfa7d5f85ff8fba18999a21ea97f))
- use .id.blockstack subdomain, fixes [#123](https://github.com/blockstack/ux/issues/123) ([59d3087](https://github.com/blockstack/ux/commit/59d3087654bb52396d242467cab897621dce3f6c))
- use stats package for metrics ([710f1fc](https://github.com/blockstack/ux/commit/710f1fca0a3fc8ad4aaed75ec828ddb815b1483b))
- use window.location for ios redirect ([9d83fc9](https://github.com/blockstack/ux/commit/9d83fc916e029d437f6a2e8af9b19b734f4aa3ac))
- **app:** hide default domain placeholder during onboarding ([8a12763](https://github.com/blockstack/ux/commit/8a12763d65112626766630ff915e3ae802fe82ef)), closes [#221](https://github.com/blockstack/ux/issues/221) [#220](https://github.com/blockstack/ux/issues/220)
- **onboarding:** update branding, copy ([7b4f6ac](https://github.com/blockstack/ux/commit/7b4f6ac43f5764626bd59608ec0d1eed8d664d69))

## 1.15.7 (2020-10-05)

### Bug Fixes

- **connect:** use authOrigin from authOptions ([e6602a8](https://github.com/blockstack/ux/commit/e6602a8a559158d3ecf92268495176619d1f340e))

## 1.15.6 (2020-10-05)

### Bug Fixes

- remaining broken sidecar urls, fixes [#615](https://github.com/blockstack/ux/issues/615) ([4c26fce](https://github.com/blockstack/ux/commit/4c26fcea34c1603e4ea63d1be7b576b9ccb45a42))

## 1.15.5 (2020-09-29)

### Bug Fixes

- update node api url ([7c71cc7](https://github.com/blockstack/ux/commit/7c71cc7fd47cdb5626d618be70c953f3bfb9d7f7))

## 1.15.4 (2020-09-25)

### Bug Fixes

- add yarn.lock ([24d88d5](https://github.com/blockstack/ux/commit/24d88d5a29d2a4d3d8acee5ce70cd5ecb3c997c4))

## 1.15.3 (2020-09-16)

### Bug Fixes

- keychain lib still broken ([1a7fd0c](https://github.com/blockstack/ux/commit/1a7fd0ced01a6ec8bdd31bf84140728e4b1d7e30))

## 1.15.2 (2020-09-10)

### Bug Fixes

- **keychain:** use correct filepath when writing profiles ([fa8098a](https://github.com/blockstack/ux/commit/fa8098ae13973dd5e53303a4b04967a956d8842b))

## 1.15.1 (2020-08-21)

**Note:** Version bump only for package @blockstack/app

# [1.15.0](https://github.com/blockstack/ux/compare/@blockstack/app@1.14.0...@blockstack/app@1.15.0) (2020-08-21)

### Bug Fixes

- keychain version ([e1618f6](https://github.com/blockstack/ux/commit/e1618f61b18490e87760b810766beab38e7ef16f))
- rpc-client version ([83cf48b](https://github.com/blockstack/ux/commit/83cf48b679fa0938f6550c02472a97400dd009bf))
- **app:** use BigNum for fungible post condition amount ([633ac80](https://github.com/blockstack/ux/commit/633ac801b9a0f2f17eadd2dd302b8c4c235233de))

### Features

- change copy of intro modal CTA, fixes [#466](https://github.com/blockstack/ux/issues/466) ([6b64222](https://github.com/blockstack/ux/commit/6b64222fc31ab5af4b9807ae280101039388b223))
- dont use popups in mobile, adds method to handle redirect auth ([450f58b](https://github.com/blockstack/ux/commit/450f58bcb5c3431d6b1ac649d19f319da34d9f7f))

# [1.14.0](https://github.com/blockstack/ux/compare/@blockstack/app@1.13.5...@blockstack/app@1.14.0) (2020-08-11)

### Bug Fixes

- dont have selected address when canceling reuse, fixes [#454](https://github.com/blockstack/ux/issues/454) ([27f8f61](https://github.com/blockstack/ux/commit/27f8f616549ef9acc1e121f1fda9a40f8a142898))
- prevent auto-zoom of sign in field, fixes [#510](https://github.com/blockstack/ux/issues/510) ([eea3219](https://github.com/blockstack/ux/commit/eea3219c2de0925b7dd34a5f9fe2e5f6adb0ddc4))
- show correct secret key on home screen, fixes [#517](https://github.com/blockstack/ux/issues/517) ([e14afcf](https://github.com/blockstack/ux/commit/e14afcf036ef25d45a541005aa9bb88cd218f4ab))
- show loading when reusing account, fixes [#464](https://github.com/blockstack/ux/issues/464) ([19fbf4e](https://github.com/blockstack/ux/commit/19fbf4efdc5755d26587ca01f225557082d61701))

### Features

- add button to get extension ([f0ba354](https://github.com/blockstack/ux/commit/f0ba3545226886f928b01dbf2fb2e3e620ac5bf3))

## 1.13.5 (2020-07-30)

### Bug Fixes

- reset text-align within connect modal, fixes [#458](https://github.com/blockstack/ux/issues/458) ([aecc700](https://github.com/blockstack/ux/commit/aecc70016809c3750d5cde730db4aeaffd52bb98))

## 1.13.4 (2020-07-28)

**Note:** Version bump only for package @blockstack/app

## 1.13.3 (2020-07-28)

### Bug Fixes

- cursor pointer on dont show this again, fixes [#508](https://github.com/blockstack/ux/issues/508) ([fe4dcf4](https://github.com/blockstack/ux/commit/fe4dcf418526289685687ad9f4526cd45db85410))

## 1.13.2 (2020-07-27)

### Bug Fixes

- **connect:** pass all data to token ([3f46f60](https://github.com/blockstack/ux/commit/3f46f600cccfeadca381574b2b493709b4bba590))

## 1.13.1 (2020-07-24)

### Bug Fixes

- send to sign in when using showBlockstackConnect, fixes [#507](https://github.com/blockstack/ux/issues/507) ([d7698e8](https://github.com/blockstack/ux/commit/d7698e839e44177e56617701d9df0bca5a60924a))

# 1.13.0 (2020-07-24)

### Features

- better bundle size with esmodules ([2c7046f](https://github.com/blockstack/ux/commit/2c7046f70d2ea10ffd973a4ea816a760ffc26952))

## 1.12.1 (2020-07-24)

### Bug Fixes

- force app icon 100% size in connect modal, fixes [#455](https://github.com/blockstack/ux/issues/455) ([4f69f75](https://github.com/blockstack/ux/commit/4f69f75cf7a153c6511cd200e3d1604e5a049226))

# 1.12.0 (2020-07-23)

### Features

- expose connect, app version ([b90a618](https://github.com/blockstack/ux/commit/b90a618fbeaac0ed998ec5ecd10eda8facdc6e10))

## 1.11.6 (2020-07-22)

### Bug Fixes

- docs not building ([d6acb21](https://github.com/blockstack/ux/commit/d6acb21d6e9d6ca171dbbac13a2cc38e7f68b4b9))

## 1.11.5 (2020-07-22)

### Bug Fixes

- workflow syntax for test-app deployment ([976fe54](https://github.com/blockstack/ux/commit/976fe54ee4e0e28833bad515ceccc5fd7f98df3a))

## 1.11.4 (2020-07-22)

**Note:** Version bump only for package @blockstack/app

## 1.11.3 (2020-07-14)

### Bug Fixes

- textStyles not being typed ([2428f69](https://github.com/blockstack/blockstack-app/commit/2428f69ddc39f20c566f2686a65959b59f52e9aa))

## 1.11.2 (2020-07-09)

**Note:** Version bump only for package @blockstack/app

## 1.11.1 (2020-07-09)

**Note:** Version bump only for package @blockstack/app

# 1.11.0 (2020-07-07)

### Features

- add codesandbox ci ([9e903d7](https://github.com/blockstack/blockstack-app/commit/9e903d7141c21503339159255cd06fb6701b1e3b))

## 1.10.5 (2020-06-30)

**Note:** Version bump only for package @blockstack/app

## [1.10.4](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.10.3...@blockstack/app@1.10.4) (2020-06-30)

**Note:** Version bump only for package @blockstack/app

## [1.10.3](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.10.2...@blockstack/app@1.10.3) (2020-06-30)

**Note:** Version bump only for package @blockstack/app

## [1.10.2](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.10.1...@blockstack/app@1.10.2) (2020-06-29)

**Note:** Version bump only for package @blockstack/app

## [1.10.1](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.10.0...@blockstack/app@1.10.1) (2020-06-24)

### Bug Fixes

- ui version behind published ([8198ca0](https://github.com/blockstack/blockstack-app/commit/8198ca050baa5e7294f99f4521aba78cab7635d8))

# [1.10.0](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.9.3...@blockstack/app@1.10.0) (2020-06-24)

### Bug Fixes

- better readme for firefox install ([cbecc86](https://github.com/blockstack/blockstack-app/commit/cbecc86e975a9b758260dbb16e3c29a938717d60))
- connect version was behind published ([2d7633e](https://github.com/blockstack/blockstack-app/commit/2d7633e8b842cf231f10c2ea032de3bcd67258ff))
- create secret key link not working, [#436](https://github.com/blockstack/blockstack-app/issues/436) ([c5870f5](https://github.com/blockstack/blockstack-app/commit/c5870f5422c49c754943eba70d7cc5285fc0ea01))
- home page alignment, [#440](https://github.com/blockstack/blockstack-app/issues/440) ([06dde15](https://github.com/blockstack/blockstack-app/commit/06dde15a651f901222650c015c75f8c1343068b6))
- keychain package was behind published version ([acbd4b0](https://github.com/blockstack/blockstack-app/commit/acbd4b064db61a60f01ce60ab75f9f2f39456eb8))
- remove unused perms from manifest ([52abc1f](https://github.com/blockstack/blockstack-app/commit/52abc1fc91396dd04d322894a18ed257f2a13864))
- tweaks to get extension working ([e068dce](https://github.com/blockstack/blockstack-app/commit/e068dcec1eca8c30375564a748ff3df4f0e8c715))
- use async dispatch, fixes [#441](https://github.com/blockstack/blockstack-app/issues/441) ([b097348](https://github.com/blockstack/blockstack-app/commit/b0973483dac295747cd511af87e42d3b5e156185))

### Features

- add variants to username error state ([19b603b](https://github.com/blockstack/blockstack-app/commit/19b603ba4ba40b42f2d0a9d99cf274af1c3eaf20))

## [1.9.3](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.9.2...@blockstack/app@1.9.3) (2020-06-10)

**Note:** Version bump only for package @blockstack/app

## [1.9.2](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.9.1...@blockstack/app@1.9.2) (2020-06-07)

### Bug Fixes

- better handling for mobile and blocked popups ([3151863](https://github.com/blockstack/blockstack-app/commit/31518632bf91c6217734c21c1163ae076f22368a))

## [1.9.1](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.9.0...@blockstack/app@1.9.1) (2020-05-21)

**Note:** Version bump only for package @blockstack/app

# [1.9.0](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.8.0...@blockstack/app@1.9.0) (2020-05-15)

### Bug Fixes

- **app:** routing bug when trying to create new key, fixes [#381](https://github.com/blockstack/blockstack-app/issues/381) ([66f78aa](https://github.com/blockstack/blockstack-app/commit/66f78aaf64c3dd38555173ba68ca49ef9445bb53))

### Features

- use window.location for ios redirect ([9d83fc9](https://github.com/blockstack/blockstack-app/commit/9d83fc916e029d437f6a2e8af9b19b734f4aa3ac))

# [1.8.0](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.7.0...@blockstack/app@1.8.0) (2020-05-06)

### Features

- codebox and highlighter ([b9056f8](https://github.com/blockstack/blockstack-app/commit/b9056f8102eff8d32898201717a3cd3699234561))

# [1.7.0](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.6.1...@blockstack/app@1.7.0) (2020-04-30)

### Bug Fixes

- clear onboarding path on sign out [#341](https://github.com/blockstack/blockstack-app/issues/341) ([f0820c9](https://github.com/blockstack/blockstack-app/commit/f0820c999143f8a00d89bcc04ecef0fa1699b5f1))
- document.title bug [#335](https://github.com/blockstack/blockstack-app/issues/335), caused by invalid redux hydration ([882fdd6](https://github.com/blockstack/blockstack-app/commit/882fdd6bfcb34e1ff1caed114065dc7b7b228e4d))
- document.title undefined, fixes [#335](https://github.com/blockstack/blockstack-app/issues/335) ([378b903](https://github.com/blockstack/blockstack-app/commit/378b903af1d0c66eed499d4ddba951b3a62bb658))
- dont show secret key when logged out, [#340](https://github.com/blockstack/blockstack-app/issues/340) ([355d518](https://github.com/blockstack/blockstack-app/commit/355d518c545527337db8efad3038bf65544e5a33))
- missing app icon on username error, [#338](https://github.com/blockstack/blockstack-app/issues/338) ([7296f63](https://github.com/blockstack/blockstack-app/commit/7296f63c91d53bbc06fdc995d672c0c978c76adf))
- ts error with react-router import ([8ecef0f](https://github.com/blockstack/blockstack-app/commit/8ecef0fbd537666c66f1f41bf85371b8ca80d166))

### Features

- remove secret key branding, [#334](https://github.com/blockstack/blockstack-app/issues/334) ([e57c8bc](https://github.com/blockstack/blockstack-app/commit/e57c8bc84540b352078e56f19cada41ba0ef6904))

## [1.6.1](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.6.0...@blockstack/app@1.6.1) (2020-04-17)

### Bug Fixes

- profile info not set in authResponse ([9e48475](https://github.com/blockstack/blockstack-app/commit/9e4847544e89dc1c8abcebeda6d34dc2bf8a4c7f))

# [1.6.0](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.5.1...@blockstack/app@1.6.0) (2020-03-12)

### Features

- send user back into unfinished onboarding flow ([5ccda3c](https://github.com/blockstack/blockstack-app/commit/5ccda3c278e0caac7b4669a193b8e62209fda543))

## [1.5.1](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.5.0...@blockstack/app@1.5.1) (2020-03-12)

### Bug Fixes

- hide icon in ScreenHeader if missing ([75d0682](https://github.com/blockstack/blockstack-app/commit/75d06824fa47aa660772b185723d5882934e3633))

# [1.5.0](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.4.1...@blockstack/app@1.5.0) (2020-03-12)

### Features

- improve accessibility of connect modal, links ([74352c7](https://github.com/blockstack/blockstack-app/commit/74352c74b5894fa2a612a20f00c02d9f8791a5c2))

## [1.4.1](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.4.0...@blockstack/app@1.4.1) (2020-03-12)

### Bug Fixes

- send to sign-in if sendToSignIn, even if path = sign-up ([b397ff3](https://github.com/blockstack/blockstack-app/commit/b397ff39d6a78cb7ae4a7364b5ba4fcf1ee51163))

# [1.4.0](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.3.0...@blockstack/app@1.4.0) (2020-03-10)

### Features

- add ability to view secret key ([440c3e5](https://github.com/blockstack/blockstack-app/commit/440c3e5420321e1a3bcfe409cf65b44fe45e1330))

# [1.3.0](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.2.0...@blockstack/app@1.3.0) (2020-03-10)

### Features

- use stats package for metrics ([710f1fc](https://github.com/blockstack/blockstack-app/commit/710f1fca0a3fc8ad4aaed75ec828ddb815b1483b))

# [1.2.0](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.1.2...@blockstack/app@1.2.0) (2020-03-10)

### Bug Fixes

- dont require built ui to build connect ([c354be7](https://github.com/blockstack/blockstack-app/commit/c354be7bae0937dbcfdbfbb971f1f85a0a6057a9))

### Features

- implementation of router ([bd03411](https://github.com/blockstack/blockstack-app/commit/bd034112a098868d07e04dc6aba97d15145707d1))

## [1.1.2](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.1.1...@blockstack/app@1.1.2) (2020-03-10)

**Note:** Version bump only for package @blockstack/app

## [1.1.1](https://github.com/blockstack/blockstack-app/compare/@blockstack/app@1.1.0...@blockstack/app@1.1.1) (2020-03-10)

**Note:** Version bump only for package @blockstack/app

# 1.1.0 (2020-03-10)

### Bug Fixes

- 16px below app icon ([4097510](https://github.com/blockstack/blockstack-app/commit/4097510df66c28343782af3cb558348689bb9b36))
- add account loading/transition, fixes [#163](https://github.com/blockstack/blockstack-app/issues/163) ([fbd063c](https://github.com/blockstack/blockstack-app/commit/fbd063c740698d0269d3f6cd862a112a9fb082b7))
- Add hover action to '<Account/>' list ([c405989](https://github.com/blockstack/blockstack-app/commit/c405989b071adc070463a2047e9e7ae6751e974b))
- add spacing below title, fixes [#139](https://github.com/blockstack/blockstack-app/issues/139) and [#234](https://github.com/blockstack/blockstack-app/issues/234) ([336a235](https://github.com/blockstack/blockstack-app/commit/336a23562f4f5d769d6c0e846afac79c9e8b29ae))
- adjust task names, add bootstrap task ([099038f](https://github.com/blockstack/blockstack-app/commit/099038f26e6664a6de9a64c86dfb24eb03d94a31))
- Alignment of the onboarding create screen, Closes [#136](https://github.com/blockstack/blockstack-app/issues/136) ([7e16aa5](https://github.com/blockstack/blockstack-app/commit/7e16aa52f207146ef01bd5698bedfdb3eaf978db))
- All uses of seed phrase ([c9e32a2](https://github.com/blockstack/blockstack-app/commit/c9e32a2d7ba302c4669dcbfe416fa4be86dcd8e3))
- app name undefined on create screen ([d8930dd](https://github.com/blockstack/blockstack-app/commit/d8930ddaf5a7b157bf17fed134da0c861adc8125))
- change button sizes to lg ([9465556](https://github.com/blockstack/blockstack-app/commit/9465556a49dc73ba1e947c06ce196b486d8f34e5))
- choose account after sign in with key, fixes [#156](https://github.com/blockstack/blockstack-app/issues/156) ([432ab82](https://github.com/blockstack/blockstack-app/commit/432ab8236e9b135c836986e92292faf6dcd01469))
- choose account hover styles ([e924b04](https://github.com/blockstack/blockstack-app/commit/e924b04e9ad38b46353667b50d3eca87b30965eb))
- dont show warning if app already used, closes [#188](https://github.com/blockstack/blockstack-app/issues/188) ([93e110a](https://github.com/blockstack/blockstack-app/commit/93e110a0f357b756e66546d13061176370583d54))
- Ensure key input trims whitespace, Closes blockstack/connect[#66](https://github.com/blockstack/blockstack-app/issues/66) ([5dc347f](https://github.com/blockstack/blockstack-app/commit/5dc347f79024b452ef1440e58701e05b77beb3e3))
- Ensure page events are tracked ([e64396f](https://github.com/blockstack/blockstack-app/commit/e64396fc2688d0cb62f14a8aa515b826907f9da8))
- Error message, Closes [#169](https://github.com/blockstack/blockstack-app/issues/169) ([02e7c46](https://github.com/blockstack/blockstack-app/commit/02e7c46b5d5522c165c0b045e375b75df2ca8ca2))
- ErrorLabels not formatted properly, Closes [#159](https://github.com/blockstack/blockstack-app/issues/159) ([981dab6](https://github.com/blockstack/blockstack-app/commit/981dab62c445e537cc5ee0df7ec1522b5eeb2a11))
- hard-coded "Messenger" in secret key page ([bfc0848](https://github.com/blockstack/blockstack-app/commit/bfc084809ff0e03ac588592d9c041e37fdfee21a))
- Input/Textarea fields autocapitalizing on iOS, Closes [#180](https://github.com/blockstack/blockstack-app/issues/180) ([45ec252](https://github.com/blockstack/blockstack-app/commit/45ec25224633ea8cfaa43cd57377e23138b4fd64))
- long usernames text-align: left, fixes [#174](https://github.com/blockstack/blockstack-app/issues/174) ([0939f99](https://github.com/blockstack/blockstack-app/commit/0939f99efedb4ed9555df7d2ec742fbdadd8a3b9))
- magic recovery code flow getting stuck ([500fdeb](https://github.com/blockstack/blockstack-app/commit/500fdebfad77cb7690f6ba17dd2822c96c439aa7))
- Prevent zoom on focus by increasing fontsize, Closes [#183](https://github.com/blockstack/blockstack-app/issues/183) ([4044c1b](https://github.com/blockstack/blockstack-app/commit/4044c1ba9a72ef03d402fa9fb27ae14c346c62bc))
- proper title tracking, [#201](https://github.com/blockstack/blockstack-app/issues/201) ([b715c8b](https://github.com/blockstack/blockstack-app/commit/b715c8b3eac8fdef953252e74912fdfdc36a68e3))
- Remove resize and spellchecking from all inputs/textareas, Closes [#153](https://github.com/blockstack/blockstack-app/issues/153) ([a0eff88](https://github.com/blockstack/blockstack-app/commit/a0eff8825ebe12dd0a66e713aeed823137eb9f04))
- remove undefined ([a50bcb4](https://github.com/blockstack/blockstack-app/commit/a50bcb492db9d5561e04b992d04c4cd931714b23))
- Remove username placeholder ([c6d6258](https://github.com/blockstack/blockstack-app/commit/c6d62587e01848d6a3fe66813157fd1038c42ec5))
- screens with inputs will now submit on return, fixes: [#147](https://github.com/blockstack/blockstack-app/issues/147), [#160](https://github.com/blockstack/blockstack-app/issues/160) ([31cbbe4](https://github.com/blockstack/blockstack-app/commit/31cbbe4df8e5a50744e2eaad0f9e18ee4f16fde0))
- sign in flows dont change screen properly ([3c162cd](https://github.com/blockstack/blockstack-app/commit/3c162cd8d9de84ece62b663d53003806e154fd1f))
- spacing on collapse component ([0541cba](https://github.com/blockstack/blockstack-app/commit/0541cba80df697541f4590cd7768dd7617c5c4c2))
- textarea height and title ([60df34a](https://github.com/blockstack/blockstack-app/commit/60df34a44fdcbe694f3db3809a8f89567e59e038))
- Tracking ([#111](https://github.com/blockstack/blockstack-app/issues/111)) ([4babe6b](https://github.com/blockstack/blockstack-app/commit/4babe6bd4235367ec09b43270b960d07dda41b23))
- typo ([5c40890](https://github.com/blockstack/blockstack-app/commit/5c40890f41678150fe3dee92aa67101326e552a3))
- update type for button mode prop ([3f8ad2f](https://github.com/blockstack/blockstack-app/commit/3f8ad2f15a6f2784b3440acf3265f991726fe8eb))
- validate that seed is not empty on sign in, fixes [#170](https://github.com/blockstack/blockstack-app/issues/170) ([e0ea149](https://github.com/blockstack/blockstack-app/commit/e0ea14909bad5b7f428a835953eb01230fa709f1))
- Visual glitches with account warning dialog ([ca2224b](https://github.com/blockstack/blockstack-app/commit/ca2224b9a034f01181dc905baca77a623bc74d22))

### Features

- add CI, proper connections between packages ([5934829](https://github.com/blockstack/blockstack-app/commit/5934829a40338ac269b80783912c8dad17af1962))
- Add identity validation and availability to the auth flow ([3f51783](https://github.com/blockstack/blockstack-app/commit/3f51783d33373cb815121a55772d751fe2c09504))
- add keychain logic to restore identities ([e2a18d6](https://github.com/blockstack/blockstack-app/commit/e2a18d6036327efe403892eeec721ad9951c8983))
- add link back to Secret Key page, Closes [#168](https://github.com/blockstack/blockstack-app/issues/168) ([5ed74c7](https://github.com/blockstack/blockstack-app/commit/5ed74c7cd417994667b325cf4ca96a3fd23c7ed4))
- Add loading spinner when selecting account, Closes [#96](https://github.com/blockstack/blockstack-app/issues/96) ([386235d](https://github.com/blockstack/blockstack-app/commit/386235d6ec7dd7dc62286e0bd16fe3a44448c7cf))
- add proper page tracking to first page ([89b9f5d](https://github.com/blockstack/blockstack-app/commit/89b9f5d5bd52550e1d8b53a06302ed708060df2a))
- Add validation to seed entry field ([#63](https://github.com/blockstack/blockstack-app/issues/63)) ([6a34531](https://github.com/blockstack/blockstack-app/commit/6a345311037f61d19992284065696631c42f3f84))
- Add write key segment ([8ff9be7](https://github.com/blockstack/blockstack-app/commit/8ff9be77b1494f44a69e890c5d4b2c724ad7e00b))
- adds appURL to onboarding store ([5085bb0](https://github.com/blockstack/blockstack-app/commit/5085bb0072c8640110b12ebf8e8d98bdd1928dcb))
- adds screen changed event ([b1600b6](https://github.com/blockstack/blockstack-app/commit/b1600b6e41a70d39f92a9818eb203d6941e81b6b))
- implement basic homepage ([10ac702](https://github.com/blockstack/blockstack-app/commit/10ac70200e769ae91544073e75347e9d1de33e81))
- Layout closer to designs, created <ExplainerCard /> ([#68](https://github.com/blockstack/blockstack-app/issues/68)) ([52f4fe7](https://github.com/blockstack/blockstack-app/commit/52f4fe75f93676e35d6986246262acf1eb6a6c2f))
- more detailed events to username ([5cc323b](https://github.com/blockstack/blockstack-app/commit/5cc323b4ba7b122e7f5a60dfee422b3ca7f21942))
- more events, mostly around choosing an account ([a1f7401](https://github.com/blockstack/blockstack-app/commit/a1f7401b226fe2ae196d8dadc8c4d3711fada998))
- move changing screen into analytics hook ([0be47b5](https://github.com/blockstack/blockstack-app/commit/0be47b54619f9bb0bd859b14ce6e253017cd1e03)), closes [#130](https://github.com/blockstack/blockstack-app/issues/130)
- move doTrack into hook, [#130](https://github.com/blockstack/blockstack-app/issues/130) ([6b1d390](https://github.com/blockstack/blockstack-app/commit/6b1d390e5f4ac36fd1aeb5d28f53daa9b8ae0bce))
- prompt password managers earlier in flow, closes [#224](https://github.com/blockstack/blockstack-app/issues/224) ([12a6772](https://github.com/blockstack/blockstack-app/commit/12a6772fa86096687bcdc5801ea46f7ab42985ee))
- **app:** hide default domain placeholder during onboarding ([8a12763](https://github.com/blockstack/blockstack-app/commit/8a12763d65112626766630ff915e3ae802fe82ef)), closes [#221](https://github.com/blockstack/blockstack-app/issues/221) [#220](https://github.com/blockstack/blockstack-app/issues/220)
- move username screen to the end, closes [#110](https://github.com/blockstack/blockstack-app/issues/110) ([942379b](https://github.com/blockstack/blockstack-app/commit/942379b3c7de757d20bc43b85e5ed426cc086691))
- Page title changes between screens, Closes [#149](https://github.com/blockstack/blockstack-app/issues/149) ([e1373d8](https://github.com/blockstack/blockstack-app/commit/e1373d8c657e861d71d19311d6426f1c37c2a7d1))
- remove auto username generation ([b160f2b](https://github.com/blockstack/blockstack-app/commit/b160f2b05613118cc920d2344defa06b45ce214e))
- remove connect screen at end of onboarding ([42c8958](https://github.com/blockstack/blockstack-app/commit/42c895838786c6843113409148c0e6b263e96e0e))
- show error page when username registration fails ([fd457c6](https://github.com/blockstack/blockstack-app/commit/fd457c60f7081ee44c7fa7ae2cb3ab06070293c2))
- slight speedup on final auth transition ([6fb56a8](https://github.com/blockstack/blockstack-app/commit/6fb56a89181cdb99d4b20d27066647dd93f46fcb))
- use .id.blockstack subdomain, fixes [#123](https://github.com/blockstack/blockstack-app/issues/123) ([59d3087](https://github.com/blockstack/blockstack-app/commit/59d3087654bb52396d242467cab897621dce3f6c))
- **onboarding:** update branding, copy ([7b4f6ac](https://github.com/blockstack/blockstack-app/commit/7b4f6ac43f5764626bd59608ec0d1eed8d664d69))
