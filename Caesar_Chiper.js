function caesar(pesan, key) {
  const katekter = [..."abcdefghijklmnopqrstuvwxyz1234567890"];
  let enkripsi = [];
  for (let i = 0; i < [...pesan].length; i++) {
    const word = [...pesan][i];
    if (katekter.indexOf(word) != -1) {
      let index = katekter.indexOf(word) + key;
      if (index > katekter.length - 1) {
        index = index - katekter.length;
      }
      enkripsi.push(katekter[index]);
    } else {
      enkripsi.push(word);
    }
  }
  return enkripsi.join("");
}
let data = [];
for (let j = 1; j <= 50; j++) {
  data.push({
    key: j,
    pesan: caesar(
      "dyvayv9 f6b dr5a a6 b5t6cv9 ayv 0vt9va0 6w ayv b5zcv90v, 69 f6b 1b0a dr5a a6 7b90bv r tr9vv9 z5 ayv ih0a tv5ab9f, sr0zt t647bav9 796x9r44z5x z0 r5 v00v5azr3 02z33 a6 3vr95 - 0av7yv5 yrd2z5x",
      j
    ),
  });
}

console.log(data);

// semua data di bawah ini dengan key 1 - 50
// menurut saya di key 19 itu pesan nya dengan pesan sebagai berikut
// whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn - stephen hawking

// [
//   {
//     key: 1,
//     pesan: 'ezwbzw0 g7c es6b b7 c6u7dw0 bzw awu0wba 7x bzw c61dw0aw, 70 g7c 2cab es6b b7 8c0acw s us0ww0 16 bzw jiab uw6bc0g, tsa1u u758cbw0 807y0s5516y 1a s6 waaw6b1s4 a3144 b7 4ws06 - abw8zw6 zse316y'
//   },
//   {
//     key: 2,
//     pesan: 'f1xc1xa h8d ft7c c8 d7v8exa c1x bxvaxcb 8y c1x d72exabx, 8a h8d 3dbc ft7c c8 9dabdx t vtaxxa 27 c1x kjbc vx7cdah, utb2v v869dcxa 9a8zat6627z 2b t7 xbbx7c2t5 b4255 c8 5xta7 - bcx91x7 1tf427z'
//   },
//   {
//     key: 3,
//     pesan: 'g2yd2yb i9e gu8d d9 e8w9fyb d2y cywbydc 9z d2y e83fybcy, 9b i9e 4ecd gu8d d9 0ebcey u wubyyb 38 d2y lkcd wy8debi, vuc3w w970edyb 0b91bu77381 3c u8 yccy8d3u6 c5366 d9 6yub8 - cdy02y8 2ug5381'
//   },
//   {
//     key: 4,
//     pesan: 'h3ze3zc j0f hv9e e0 f9x0gzc e3z dzxczed 01 e3z f94gzcdz, 0c j0f 5fde hv9e e0 afcdfz v xvczzc 49 e3z mlde xz9efcj, wvd4x x08afezc ac02cv88492 4d v9 zddz9e4v7 d6477 e0 7zvc9 - deza3z9 3vh6492'
//   },
//   {
//     key: 5,
//     pesan: 'i41f41d kag iw0f fa g0yah1d f41 e1yd1fe a2 f41 g05h1de1, ad kag 6gef iw0f fa bgdeg1 w ywd11d 50 f41 nmef y10fgdk, xwe5y ya9bgf1d bda3dw99503 5e w0 1ee10f5w8 e7588 fa 81wd0 - ef1b410 4wi7503'
//   },
//   {
//     key: 6,
//     pesan: 'j52g52e lbh jxag gb hazbi2e g52 f2ze2gf b3 g52 ha6i2ef2, be lbh 7hfg jxag gb chefh2 x zxe22e 6a g52 onfg z2aghel, yxf6z zb0chg2e ceb4ex006a4 6f xa 2ff2ag6x9 f8699 gb 92xea - fg2c52a 5xj86a4'
//   },
//   {
//     key: 7,
//     pesan: 'k63h63f mci kybh hc ib1cj3f h63 g31f3hg c4 h63 ib7j3fg3, cf mci 8igh kybh hc difgi3 y 1yf33f 7b h63 pogh 13bhifm, zyg71 1cadih3f dfc5fyaa7b5 7g yb 3gg3bh7y0 g9700 hc 03yfb - gh3d63b 6yk97b5'
//   },
//   {
//     key: 8,
//     pesan: 'l74i74g ndj lzci id jc2dk4g i74 h42g4ih d5 i74 jc8k4gh4, dg ndj 9jhi lzci id ejghj4 z 2zg44g 8c i74 qphi 24cijgn, 1zh82 2dbeji4g egd6gzbb8c6 8h zc 4hh4ci8za h08aa id a4zgc - hi4e74c 7zl08c6'
//   },
//   {
//     key: 9,
//     pesan: 'm85j85h oek m1dj je kd3el5h j85 i53h5ji e6 j85 kd9l5hi5, eh oek 0kij m1dj je fkhik5 1 31h55h 9d j85 rqij 35djkho, 21i93 3ecfkj5h fhe7h1cc9d7 9i 1d 5ii5dj91b ia9bb je b51hd - ij5f85d 81ma9d7'
//   },
//   {
//     key: 10,
//     pesan: 'n96k96i pfl n2ek kf le4fm6i k96 j64i6kj f7 k96 le0m6ij6, fi pfl aljk n2ek kf glijl6 2 42i66i 0e k96 srjk 46eklip, 32j04 4fdglk6i gif8i2dd0e8 0j 2e 6jj6ek02c jb0cc kf c62ie - jk6g96e 92nb0e8'
//   },
//   {
//     key: 11,
//     pesan: 'o07l07j qgm o3fl lg mf5gn7j l07 k75j7lk g8 l07 mfan7jk7, gj qgm bmkl o3fl lg hmjkm7 3 53j77j af l07 tskl 57flmjq, 43ka5 5gehml7j hjg9j3eeaf9 ak 3f 7kk7fla3d kcadd lg d73jf - kl7h07f 03ocaf9'
//   },
//   {
//     key: 12,
//     pesan: 'pa8ma8k rhn p4gm mh ng6ho8k ma8 l86k8ml h9 ma8 ngbo8kl8, hk rhn cnlm p4gm mh inkln8 4 64k88k bg ma8 utlm 68gmnkr, 54lb6 6hfinm8k ikh0k4ffbg0 bl 4g 8ll8gmb4e ldbee mh e84kg - lm8ia8g a4pdbg0'
//   },
//   {
//     key: 13,
//     pesan: 'qb9nb9l sio q5hn ni oh7ip9l nb9 m97l9nm i0 nb9 ohcp9lm9, il sio domn q5hn ni jolmo9 5 75l99l ch nb9 vumn 79hnols, 65mc7 7igjon9l jlial5ggcha cm 5h 9mm9hnc5f mecff ni f95lh - mn9jb9h b5qecha'
//   },
//   {
//     key: 14,
//     pesan: 'rc0oc0m tjp r6io oj pi8jq0m oc0 n08m0on ja oc0 pidq0mn0, jm tjp epno r6io oj kpmnp0 6 86m00m di oc0 wvno 80iopmt, 76nd8 8jhkpo0m kmjbm6hhdib dn 6i 0nn0iod6g nfdgg oj g06mi - no0kc0i c6rfdib'
//   },
//   {
//     key: 15,
//     pesan: 'sdapdan ukq s7jp pk qj9kran pda oa9napo kb pda qjeranoa, kn ukq fqop s7jp pk lqnoqa 7 97naan ej pda xwop 9ajpqnu, 87oe9 9kilqpan lnkcn7iiejc eo 7j aooajpe7h ogehh pk ha7nj - opaldaj d7sgejc'
//   },
//   {
//     key: 16,
//     pesan: 'tebqebo vlr t8kq ql rk0lsbo qeb pb0obqp lc qeb rkfsbopb, lo vlr grpq t8kq ql mroprb 8 08obbo fk qeb yxpq 0bkqrov, 98pf0 0ljmrqbo moldo8jjfkd fp 8k bppbkqf8i phfii ql ib8ok - pqbmebk e8thfkd'
//   },
//   {
//     key: 17,
//     pesan: 'ufcrfcp wms u9lr rm slamtcp rfc qcapcrq md rfc slgtcpqc, mp wms hsqr u9lr rm nspqsc 9 a9pccp gl rfc zyqr aclrspw, 09qga amknsrcp npmep9kkgle gq 9l cqqclrg9j qigjj rm jc9pl - qrcnfcl f9uigle'
//   },
//   {
//     key: 18,
//     pesan: 'vgdsgdq xnt v0ms sn tmbnudq sgd rdbqdsr ne sgd tmhudqrd, nq xnt itrs v0ms sn otqrtd 0 b0qddq hm sgd 1zrs bdmstqx, a0rhb bnlotsdq oqnfq0llhmf hr 0m drrdmsh0k rjhkk sn kd0qm - rsdogdm g0vjhmf'
//   },
//   {
//     key: 19,
//     pesan: 'whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn - stephen hawking'
//   },
//   {
//     key: 20,
//     pesan: 'xifuifs zpv xbou up vodpwfs uif tfdsfut pg uif vojwfstf, ps zpv kvtu xbou up qvstvf b dbsffs jo uif 32tu dfouvsz, cbtjd dpnqvufs qsphsbnnjoh jt bo fttfoujbm tljmm up mfbso - tufqifo ibxljoh'
//   },
//   {
//     key: 21,
//     pesan: 'yjgvjgt 1qw ycpv vq wpeqxgt vjg ugetgvu qh vjg wpkxgtug, qt 1qw lwuv ycpv vq rwtuwg c ectggt kp vjg 43uv egpvwt1, dcuke eqorwvgt rtqitcookpi ku cp guugpvkcn umknn vq ngctp - uvgrjgp jcymkpi'
//   },
//   {
//     key: 22,
//     pesan: 'zkhwkhu 2rx zdqw wr xqfryhu wkh vhfuhwv ri wkh xqlyhuvh, ru 2rx mxvw zdqw wr sxuvxh d fduhhu lq wkh 54vw fhqwxu2, edvlf frpsxwhu surjudpplqj lv dq hvvhqwldo vnloo wr ohduq - vwhskhq kdznlqj'
//   },
//   {
//     key: 23,
//     pesan: '1lixliv 3sy 1erx xs yrgsziv xli wigvixw sj xli yrmzivwi, sv 3sy nywx 1erx xs tyvwyi e geviiv mr xli 65wx girxyv3, fewmg gsqtyxiv tvskveqqmrk mw er iwwirxmep wompp xs pievr - wxitlir le1omrk'
//   },
//   {
//     key: 24,
//     pesan: '2mjymjw 4tz 2fsy yt zsht1jw ymj xjhwjyx tk ymj zsn1jwxj, tw 4tz ozxy 2fsy yt uzwxzj f hfwjjw ns ymj 76xy hjsyzw4, gfxnh htruzyjw uwtlwfrrnsl nx fs jxxjsynfq xpnqq yt qjfws - xyjumjs mf2pnsl'
//   },
//   {
//     key: 25,
//     pesan: '3nkznkx 5u1 3gtz zu 1tiu2kx znk ykixkzy ul znk 1to2kxyk, ux 5u1 p1yz 3gtz zu v1xy1k g igxkkx ot znk 87yz iktz1x5, hgyoi iusv1zkx vxumxgssotm oy gt kyyktzogr yqorr zu rkgxt - yzkvnkt ng3qotm'
//   },
//   {
//     key: 26,
//     pesan: '4ol1oly 6v2 4hu1 1v 2ujv3ly 1ol zljyl1z vm 1ol 2up3lyzl, vy 6v2 q2z1 4hu1 1v w2yz2l h jhylly pu 1ol 98z1 jlu12y6, ihzpj jvtw21ly wyvnyhttpun pz hu lzzlu1phs zrpss 1v slhyu - z1lwolu oh4rpun'
//   },
//   {
//     key: 27,
//     pesan: '5pm2pmz 7w3 5iv2 2w 3vkw4mz 2pm 1mkzm21 wn 2pm 3vq4mz1m, wz 7w3 r312 5iv2 2w x3z13m i kizmmz qv 2pm 0912 kmv23z7, ji1qk kwux32mz xzwoziuuqvo q1 iv m11mv2qit 1sqtt 2w tmizv - 12mxpmv pi5sqvo'
//   },
//   {
//     key: 28,
//     pesan: '6qn3qn1 8x4 6jw3 3x 4wlx5n1 3qn 2nl1n32 xo 3qn 4wr5n12n, x1 8x4 s423 6jw3 3x y4124n j lj1nn1 rw 3qn a023 lnw3418, kj2rl lxvy43n1 y1xp1jvvrwp r2 jw n22nw3rju 2truu 3x unj1w - 23nyqnw qj6trwp'
//   },
//   {
//     key: 29,
//     pesan: '7ro4ro2 9y5 7kx4 4y 5xmy6o2 4ro 3om2o43 yp 4ro 5xs6o23o, y2 9y5 t534 7kx4 4y z5235o k mk2oo2 sx 4ro ba34 mox4529, lk3sm mywz54o2 z2yq2kwwsxq s3 kx o33ox4skv 3usvv 4y vok2x - 34ozrox rk7usxq'
//   },
//   {
//     key: 30,
//     pesan: '8sp5sp3 0z6 8ly5 5z 6ynz7p3 5sp 4pn3p54 zq 5sp 6yt7p34p, z3 0z6 u645 8ly5 5z 16346p l nl3pp3 ty 5sp cb45 npy5630, ml4tn nzx165p3 13zr3lxxtyr t4 ly p44py5tlw 4vtww 5z wpl3y - 45p1spy sl8vtyr'
//   },
//   {
//     key: 31,
//     pesan: '9tq6tq4 a17 9mz6 61 7zo18q4 6tq 5qo4q65 1r 6tq 7zu8q45q, 14 a17 v756 9mz6 61 27457q m om4qq4 uz 6tq dc56 oqz674a, nm5uo o1y276q4 241s4myyuzs u5 mz q55qz6umx 5wuxx 61 xqm4z - 56q2tqz tm9wuzs'
//   },
//   {
//     key: 32,
//     pesan: '0ur7ur5 b28 0n17 72 81p29r5 7ur 6rp5r76 2s 7ur 81v9r56r, 25 b28 w867 0n17 72 38568r n pn5rr5 v1 7ur ed67 pr1785b, on6vp p2z387r5 352t5nzzv1t v6 n1 r66r17vny 6xvyy 72 yrn51 - 67r3ur1 un0xv1t'
//   },
//   {
//     key: 33,
//     pesan: 'avs8vs6 c39 ao28 83 92q30s6 8vs 7sq6s87 3t 8vs 92w0s67s, 36 c39 x978 ao28 83 49679s o qo6ss6 w2 8vs fe78 qs2896c, po7wq q31498s6 463u6o11w2u w7 o2 s77s28woz 7ywzz 83 zso62 - 78s4vs2 voayw2u'
//   },
//   {
//     key: 34,
//     pesan: 'bwt9wt7 d40 bp39 94 03r4at7 9wt 8tr7t98 4u 9wt 03xat78t, 47 d40 y089 bp39 94 50780t p rp7tt7 x3 9wt gf89 rt3907d, qp8xr r42509t7 574v7p22x3v x8 p3 t88t39xp1 8zx11 94 1tp73 - 89t5wt3 wpbzx3v'
//   },
//   {
//     key: 35,
//     pesan: 'cxu0xu8 e5a cq40 05 a4s5bu8 0xu 9us8u09 5v 0xu a4ybu89u, 58 e5a za90 cq40 05 6a89au q sq8uu8 y4 0xu hg90 su40a8e, rq9ys s536a0u8 685w8q33y4w y9 q4 u99u40yq2 91y22 05 2uq84 - 90u6xu4 xqc1y4w'
//   },
//   {
//     key: 36,
//     pesan: 'dyvayv9 f6b dr5a a6 b5t6cv9 ayv 0vt9va0 6w ayv b5zcv90v, 69 f6b 1b0a dr5a a6 7b90bv r tr9vv9 z5 ayv ih0a tv5ab9f, sr0zt t647bav9 796x9r44z5x z0 r5 v00v5azr3 02z33 a6 3vr95 - 0av7yv5 yrd2z5x'
//   },
//   {
//     key: 37,
//     pesan: 'ezwbzw0 g7c es6b b7 c6u7dw0 bzw wu0wb 7x bzw c61dw0w, 70 g7c 2cb es6b b7 8c0cw s us0ww0 16 bzw jib uw6bc0g, ts1u u758cbw0 807y0s5516y 1 s6 ww6b1s4 3144 b7 4ws06 - bw8zw6 zse316y'
//   },
//   {
//     key: 38,
//     pesan: 'f1xc1x h8d ft7c c8 d7v8ex c1x xvxc 8y c1x d72exx, 8 h8d 3dc ft7c c8 9ddx t vtxx 27 c1x kjc vx7cdh, ut2v v869dcx 98zt6627z 2 t7 xx7c2t5 4255 c8 5xt7 - cx91x7 1tf427z'
//   },
//   {
//     key: 39,
//     pesan: 'g2yd2y i9e gu8d d9 e8w9fy d2y ywyd 9z d2y e83fyy, 9 i9e 4ed gu8d d9 0eey u wuyy 38 d2y lkd wy8dei, vu3w w970edy 091u77381 3 u8 yy8d3u6 5366 d9 6yu8 - dy02y8 2ug5381'
//   },
//   {
//     key: 40,
//     pesan: 'h3ze3z j0f hv9e e0 f9x0gz e3z zxze 01 e3z f94gzz, 0 j0f 5fe hv9e e0 ffz v xvzz 49 e3z mle xz9efj, wv4x x08fez 02v88492 4 v9 zz9e4v7 6477 e0 7zv9 - ez3z9 3vh6492'
//   },
//   {
//     key: 41,
//     pesan: 'i41f41 kg iw0f f g0yh1 f41 1y1f 2 f41 g05h11,  kg 6gf iw0f f gg1 w yw11 50 f41 nmf y10fgk, xw5y y9gf1 3w99503 5 w0 110f5w8 7588 f 81w0 - f1410 4wi7503'
//   },
//   {
//     key: 42,
//     pesan: 'j52g52 lh jxg g hzi2 g52 2z2g 3 g52 h6i22,  lh 7hg jxg g hh2 x zx22 6 g52 ong z2ghl, yx6z z0hg2 4x0064 6 x 22g6x9 8699 g 92x - g252 5xj864'
//   },
//   {
//     key: 43,
//     pesan: 'k63h63 mi kyh h i1j3 h63 313h 4 h63 i7j33,  mi 8ih kyh h ii3 y 1y33 7 h63 poh 13him, zy71 1ih3 5y75 7 y 33h7y0 9700 h 03y - h363 6yk975'
//   },
//   {
//     key: 44,
//     pesan: 'l74i74 nj lzi i j2k4 i74 424i 5 i74 j8k44,  nj 9ji lzi i jj4 z 2z44 8 i74 qpi 24ijn, 1z82 2ji4 6z86 8 z 44i8z 08 i 4z - i474 7zl086'
//   },
//   {
//     key: 45,
//     pesan: 'm85j85 ok m1j j k3l5 j85 535j 6 j85 k9l55,  ok 0kj m1j j kk5 1 3155 9 j85 rqj 35jko, 2193 3kj5 7197 9 1 55j91 9 j 51 - j585 81m97'
//   },
//   {
//     key: 46,
//     pesan: 'n96k96 pl n2k k l4m6 k96 646k 7 k96 l0m66,  pl lk n2k k ll6 2 4266 0 k96 srk 46klp, 3204 4lk6 8208 0 2 66k02 0 k 62 - k696 92n08'
//   },
//   {
//     key: 47,
//     pesan: 'o07l07 qm o3l l m5n7 l07 757l 8 l07 mn77,  qm ml o3l l mm7 3 5377  l07 tsl 57lmq, 435 5ml7 939  3 77l3  l 73 - l707 03o9'
//   },
//   {
//     key: 48,
//     pesan: 'p8m8 rn p4m m n6o8 m8 868m 9 m8 no88,  rn nm p4m m nn8 4 6488  m8 utm 68mnr, 546 6nm8 040  4 88m4  m 84 - m88 4p0'
//   },
//   {
//     key: 49,
//     pesan: 'q9n9 so q5n n o7p9 n9 979n 0 n9 op99,  so on q5n n oo9 5 7599  n9 vun 79nos, 657 7on9 5  5 99n5  n 95 - n99 5q'
//   },
//   {
//     key: 50,
//     pesan: 'r0o0 tp r6o o p8q0 o0 080o  o0 pq00,  tp po r6o o pp0 6 8600  o0 wvo 80opt, 768 8po0 6  6 00o6  o 06 - o00 6r'
//   }
// ]
