// MANTENHA AQUI SEU BANCO DE DADOS COMPLETO COM TODAS AS CARTAS
const cartasDatabase = [
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMB1y4y5iHs4vhhPFjjGJLyqvXeI-FA-P88CB9IkuyqpITTXi3N0SiqzlCW4XK4KDT2Agg17QJkorGP_UzltUIwcfGBcXBU6klP-IHSEmIcoU3SqMiE0bAZ1ENUrvAP4E1RsV9y8bmgPVkC-9MMIYeBD5Cel4NDsVmxaEV9k-KB533HG_DtwzqaSWyMyOj/s320/1000112550.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixBnJcMWLRkXYm35pHkKMB2BEJ8rRvTINUlI7zyD-Lst5CXmW14_BgkPC96gah0Dp11832AZtqnVw8OGKTCqZS1bybm8yqQNbvD8uDI8IFTdSpFLjvMz21__cvhVuf4dOPI6JnKm0uF_YlWMGT5WabU7TKwT6zK_bEoiQEhB6z1PFjukH1oBLR6zCuAIfj/s320/1000112551.jpg", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNyB4UsteMcFf3oPFo2wGe9ifYZii-gIYrk3MVU9v3r3lZBBex7IwSjH6aqFKYnHoah7_VmNsRD3Jm-cRdJ9qOOsW0AI9atuOBiMUaV-oUHBgsg0G1j7GaCd_LfPxvOjKa9Rs_FrORj30Cleem9TZknW3SDSmHIUCuqwnIpMSkJ7ZIr_yvrJzDgjFMHbys/s320/1000112552.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNNAe1l72eGBpTmPk79V84cg0q5nAovmLsnApwSSN3nx6ASJNl53LnweeKhxuuUzeR-NJIlm11vXNrFVwI2eOUrnYTOV1GtRFoXFOteupqgJe5MOI9sZphlvNCop_V9kCbbJ015GiXXSFQChxS_xAfbFsIYKonI837LI5Vvtn4RGah0weoMQmFauEvaGmB/s320/1000112553.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD7WVnllsTJJev4ZU7VZfNl3YUOKm7rmB3l5FJBeJa2eEiO-5_D-4IJ8eaWIvuZHAHgwyJNH0GyPtimVa7I5v0dHFDbnpmlQIImCi_Fm8OrmGuxju2yQUmEWjq_ivhrUy97JJ_iymXbfZff-5aaQnrETFzN_7CMmm9xW_z-XZ9dOSiCmJkmJ7Rb09y6aU-/s320/1000112554.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFSjMIKUuydPsOWMbZKQKaFbjTx5MLI-vq-hjXHGwzmIQ5cNeOMxEXbC_c-Vf1JAjVLQURuv8JetiT9MuV7mw_O8XkKN25IO6SHFw454cAe0u4IeDxvTpJ6BZhKcItl4dTYd_Noa7Lr-L0TF4l8Ntfhj4IWWZyZfTmpGDn3ziR_9ioHzQbel2_T5-5s5I4/s320/1000112555.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWZdw-29M0XXAtyad8aDN7NHftt8_MUprZ_KSTK4p-WRTCZ34JmdFWhH4-Vb_xZX3dxfZ47JndRSkUrfOor0UnwtOA38RStGzw93IxmckAs4pOYkfQGiCwZ7fZ4qjIW0iCRDIIBTEZODKxxv8qL6iQpK60zflMOjH6vrnIuIsm8wQ_tHp09sRNQuY_drjs/s320/1000112556.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdontmHG133TJKICxoqGxsdAA8IaNgMrZ4Qhuglfosc4IAasFXZMIYQ40AUweerJlC_VvOwSEJ2dZQSTxjlrqq_eMSe2G9nDeZpXCtviVLKNs3QQrZv9FyxzB3_R-HX3Q3-2uHOyimgLYfQf0eurERbvh0L4WqBm2hTiQIjKYOf6Z-cjwuMUJnECpYht4b/s320/1000112557.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ_gNfAWgEk6uI7EOonVXo5pwcRZ1SRxdqn1Luqcg-YB7Hns6kF1tUCrKcl935FQXTllAeyuSM5A4uy8BnPhpNS-vkDWwSP7HocmuqWD58IJx1yiwtKds4qcm7t5aJ2PouB61iVsurJ47pFqTS22SD3cWB-PwFDpbDH3wm2aZwpirUYz99014mCVi8Mx1p/s320/1000112558.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZWu7nSSWDHpOsNXFlHq0p1zDnYFqOaXRxfTyPjaOiWuQNW2oKlxj1nqPsIse2W4wpMKMhr5xJXC2KbcwPnpwAv-KHmgs6QQB3d0gy0LZKThcTHcsSeETI9UyWKfCmFJC6C6QdaLDtrfMvAT45HCBPMnnw1zE-jWxQUO6hRBTreO1jnpIR6RqHH8rQeArg/s320/1000112559.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkwM8nTZFXaSGIvcAnSxxQtasbLaPMQ3xSCH_Qv_T5S30c1-wbSCUH_fOxhSMr8CvnQEWz756Wh7rgyNmYLL588sDHzyxLGvTNYMptjEuaUhi1nOxmUiDlxu9ysocKVPlka3VMsUi-t74Af6akMHbt0LMtczUAHzs4Kc8tXIyeZt0uAbDWKGuCpQJl2FHn/s320/1000112560.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOsbxoDd1Rw_K90Xe2ttsNIbs-MmlU3aToxNokbyYRX17ENhdcdLWqBa4gX_uDJ8si1BnzGeZ6bNUVGMQ1YiGOlVfZHpuUK3EQLCGj1oxxbYUs_50GVjth3xWQS8EK267LbHntxkprFcBn3O2p-zgmLfDqkv7LGEn1M40yx8M-V1Nmhy2eQe9mI18FRR8_/s320/1000112561.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTmXFQZ-H19JzmOnWNGfD0d78cYZKi6v_FVSLiFEju-NzR04ktHKV0Y56yXuSKyL5DmVqPeoE2x2H3mBAzTK5pTDo_XDXHs0KtcQ1mqHkymM21FyBNRJZogZVt2P2t_wAevbzxDEXrh5P4SdrEjlLPOp0Kxaw0iU9GrHRvYxx0xCdEJ0jfHMukMGNsnNjI/s320/1000112562.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvTdQ5J5WPfNklAODbyDTdQmCQ51c9fPlCr_GcUFdh0a4tHsmGsikGGoxWVbHfSB2hpVhteyQPz75SlSYSQHN1xOqmJtLne_NQIfXgTHAcB4N97AteC7v2e5QxIrgRn5Tzks-_Z7Tbo4ry6EOCez1QkhKaI68IwafuFvxK9sZpaBBs2PiF6MbNEah6OGtT/s320/1000112563.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZO62zvwQPg98ldqqHxmv7o7e4pcQGKIBW4Ga7xdeqSwgnOND3FAfKdxvJCr1Aj2Ew1UjIrUe2b1rWYXi-wA7nUtfbm35Oims146bVWOU10c99l1auYrSW98GXQPKP0hPO4q8MqkY_RVQ4-jL6Avt9-KaqT-aJD0Dw5PhanFstqo9Q3VePjZj-hIP6jkND/s320/1000112564.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh10Y4wxZtUMHPynxwhF7yl9f7y-s2BVF6IPJav8nckiqkbzMHN6FpK3p0OKApx4_J88R26q1SoASi_4-LF70nbRb_3eMg5r4JDX9Q1PbvTTyr14Tui8pPficwE29-T0OaHT_nRZWKNzuKiwqZ0XuWQx6MelVjtvCcdDkjHWlBSgWKaS5HWuE15QJKRUCjz/s320/1000112565.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjut-sjHPNZNY7xZg6S3IOvY7yJ_J5fEzwhl7TdO8D6rq5bmmED63vaFGQpUjDrI8yxsU7SbpQa7aqUgswX0PD2A2zjKJwQ2KYNkRK1KBX1MQ5a2EAeSXwCANv_wRbH1Z15ic6aCWh0Y9xoynrimpeHmLX26BWDEVcXVdmkoCl30gGr08Y0S5NyxtZzfYV6/s320/1000112566.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMziTNZyZG8mjWDku1CDiqguqCNSy83tqWwX959lOPyOCG0ZOWl7Od4g13yCNwbyTWJH-CIzr3O_fs4CY9hJXg181Y-m6a9geVO4DpKYBORsRJi67bIrT4OgoTxev_5IRDUZNyQeJ7MM4dB7f6rHjrYs0UEamRfD5xvCzerMDqqZdiRMA53RV-Cg-Y9EEf/s320/1000112567.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUAEF5FG4v-rE-gLOgLwzqlh5XnFy0yGAxnXM9Dgfz2sD5up7tC2MbO8Li6RFKlaNaTuWHUX0u7OHTYQrfkIb-TroLHqMIxZEmqsXQluti4iZmEnit50Jbf-vE3dfZpXpGmD3zPgvY8ASK1-JeFnNQWtox73I6Vj0r-xIskpCImx8nI_q1-8YphBCtISev/s320/1000112568.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7r954KbhipybQYvQ6qrEiKs3COw2X_PHkT2wAtcdGC8nU6ihCQ8bG2fTZ9KyeaTxf2Jj9N0RLbbTWzaE-SOo34g6bFeZSegiUhWt_tsH1uI017HbHJpN9wMA5DYDYXDBJ4ek5ZPhL60Wm3kbFTXPb3Zcw3AAbBK4cQ27N7qWcSnFKBHS379Q4EBq06SjC/s320/1000112569.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0XWqUyMdF6emz9mZlLpZFpa1q8DV7fCm6FKiAqAau2N9mM7y6xoMTotVrV67BwlKWYp9coKd1Etn2iAQyr30UHOsiGVt2NbJJLlwzZyKF1ufRJ3_8H8KmtEDzrpJkyfk4v9vQsV3EjVKwKpBp6BxNeFTUgZW13lcUAJhU_b5NZhRpRsu28DZR7wTd8_CK/s320/1000112570.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4WSAgjFPLqqa6Nq5lPv-yRLcPgOoBcYO3XVNTjATbaZmiDiAl6-1sXz5WL3KbGugWxUBauT1bpg9jfUnCCOD4qdm1B_IHC5LcCeqwiC8jCx64jM7dzXGEVfRc0GmxhUP1RzR6otNsQc7vn7s2l5WwjER0HcGT9lRQd_kKHuJe1I4X6UiBP8q3uyxpMIZo/s320/1000112571.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqf5ryxR9a-SfjCjAUjSrWaCfiGP6OXuc1oJmJ9D37mt72ly3bilab_qHU3IsQ8NWmp1nQz_mVX7L0IidLpkX2-H9RNlaYCZRxErd7pI2XNxqQDI31Ij_UKx8c8_DLVaXfRlk8DyHbiNyBzaC_1Sxu7OQSkjoB6Dvfa8bfmBj97O2IgIsUgwxHDVmD9W-P/s320/1000112572.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu7LNisO2i_lgnYNAXGvc168bQxfAMFO2Tr8f6Roxiago-W7AtuM9P-aP9P7bpVFuPKeCF6BZr_4zD-faavhvlfdu7xF3oY0FiP8vh-fVXcpOP5z_zdhTzEG2ia1l4EWGkBM9iuBwhTDhBCotn_PJdPYoY9bZz8Q_niI9sycTHkG0IeW12nXFl-fQrEY2E/s320/1000112573.jpg", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTULLDcrdWnnLET179xnxWLrxUQuO63rNzkrCGDehKx_8EfdJKxmRk7ZHLNsupZ-d6gxLQanb91Fcby_KBunRv9V0dZXheukClQtU3pi8DCiCKqULFFdNyfrkFoJcw8Beh9c88dvfRto8JbINGAI09dccMdtaAlcqI0JZZ5hcVOAQ2XfYgLSqK-Ok_bBFa/s320/1000112575.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifNkH5QW-5h1Xdql8YGzV0NlRxyJUkjhyphenhyphenfV-V3AIme4BnAJ5i_14Ng9KRfEhnXydkRU5yvvozDzvz1P4VjRVq_mFxEBnTtbG8Kfhwr2AU7wXKXwoICPGMTfKaDs4wkphAfN0rv2ktzmldyhoMKX6ZzjcURMlcuQgRsCe4VY3LTcr-MyhKxOYtQNLWIF1sr/s320/1000112576.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2c5d2s5LIs_WHgLUk3rHb6oWFDLmIzbAfwAWXTAz_fzbxuV2YEIvZtpKhqIH6hC2syUxn395bFvPwdbqDe4XKMQ83b4v2WxNxvr48pbkUdmElhZQ1jynQC8LwHdueiRtbBIFX_bucRf46IGE1Mli0URmB2FRdomtllxHt_1NMejJ-QDJgeCV-s_9NirD-/s320/1000112577.jpg", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-fwXg7hswsCOGMExoJb1zFL9QEQVD1SHhiZgfSOadYTubF4Fgsfrw5cfNMTKWLxew2lP-pM_9-yRYjp68WvHhVArevMyUZiqiQEPsuwbVjd77MMPvla8V4JRAdLjtw9wC7AprfTWBOrgjMSo2xB8gCLuJvOllErbX-BhJEGGED_nJiyRywKPksCe40nX4/s320/1000112578.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCK5jp4v2LWQFMO5nAGJCfW1EJFfLU8xcibqwV1CqYA0gq1v7QomVfmpd8hJRrxy7btxjcNxZSqK7WyX4hQqQfKrTFQWXxWS-TWsXni1FqWr0PEPRjuqMfNrzCxaD-3sF-_hmYQBerNVhghYNE-VzLnY9Ed3jjnPBB2X4Fje25KG2JD-LEPspe7J8slWI9/s320/1000112579.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyEvPPv3UJYX71TaE6-wd8HElRChCP3kL1lkvL_oqqs3hK0a-Tyo5MJah27ANztbVvMDeU0sEI9J7GVpF5c9AuHPYNb09GkAMUssSNffo86EHUKZQfiiUtvGxU9XI9ySI98gWaBrMWYdZ8eZLh9myoiVs1JiN-kc7JlAZPVV_rbCAgwY4YJgbHoG36KHRZ/s320/1000112580.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDFhCPsmfYwcAMH0yl0kxifmZH8UnsUOUzQwHEy-mpObjRm3COklQGhNtFhiYSIJiyS7QWVokiejkCE5Blmn_m-6lpqqPXfWZo-PWBWaJKAlUWMT4_uYaMKRYFDzG87fg8AnSLkGDpfkSbKuT2WnjCA-x9fgpDGk6fuhmFu5pwifMcZEndrcJIMJGu2LUq/s320/1000112581.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiy2iNbAhyphenhyphenxg74JsJ4xrU62SH2asZgw1QUnLSvInu6HhXySIMFLfVL9n9vrsV4_wkr0VuKHeBTrWQ0X2hkgI3B2y7VAq_3DlDIub0sElYPMfVzID6RJ86om6En2trYCe9TdE03gRDwd-nwZyxsMq5C-F85i2uaDQS7Ujz_Fp_A1NBcAGK-WPyVxzwzgLugx/s320/1000112582.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKFfCeV8AWzgxPr5QkNp2eH6fUCuYyFKAz458Nc7P-G8CmlgvMIxnPah2oJwa7kncML9eZe2NYZyxvqfVMn77v7JVLt0DAGeqlAlmPuhiMPX0pT7z6RoLxgQRTBBrl1Lf-L1eXDtc0i8Yj_bEzU1DQh6SkTP5VFN8eVkYve8HDhOv7OkWt1D4L1MLVMKte/s320/1000112583.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggrn0ZYWbKzUpf8Z0rIvO4HBDJCEWZ1c8iZZEX4t-HHECFCyzbWqClfRm1vfSzy6RT6n-Bz5WJv-XYbp8G1T5Ng-IpR5I4Bde392hjQGlTwJzJwmByG9e78IskRweEUrCgi5YbxMlc_Xk0i0YKEfVF3vzcyNCPQy1e_gjynfKL2OSgAw1mcxGTR2NkNHcA/s320/1000112584.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifeRHRF0tTommiWgDd8VXoZM7OdFZhn3RjZAFQA79ylfnr2Zumo4ocrjBx8UFZktqj3ii-wFiGajHNlTcVjmIPXGgD4768jz6zNprqoUJhOlroO3InhH23lTffE5JP0o-27AnGi3oBRspT1kr4K57CP-Bsif8XWcOyf4V-c5lZTiL-2f7K4RIzXtSnogjE/s320/1000112585.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpXaGUeRmqYJpROVKN-Tcgm2vqG2FT1gZ6j7-a__EY-8TSpd1rKbq3eYS6aEqbvkDnJ_USeD-OOp1p1D1_7UQ0_FYKV6SohgPbUX8MxilSBXPLqV5O73ss63w4tszF1y6Qh-BfZPDKjzV7-YI2vbpV5Y3RVmUppz4-Jcy4IxbA6jYHh9sDWCo7bEpdlOF5/s320/1000112586.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvVSBrPA1qui8Tq_CUQ1oTVed2-NlveEdRhp7J0zQ84ZsJOk4oB0MMPmybqPtdJhjKyQl5Hxodj4D_JXDPHOkAWxjOqF5Nz3SWHaMSasjLfK8YXrhXiJSrtg5Y0hoDWds4plbmaR_8llb5i-Bw-VNz_tJKbsWKNaywdpsUgguARrvLzTcgEC-_2nIP7vKk/s320/1000112587.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdsr_mewDRfFtq-brBfi3yjZfLEubBq0g8nN8852rUD8j5aAp3WfqjXXNM6Cv4Obdg1GZ1OndsxaA12pG_8ShRjBXjY2eHo22-eKcRuPXXHNcEAVU4gnbFOyqsgeLLY0YazOTarbZV4vCHk32D2ANIs49G7L2TmnaCLe5AvK0l51rh5MdLDd32UAblkMn6/s320/1000112588.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwFLAk4_UMo9TP9Z_Hn8FYgnh7D7P-UfJdq-0kGM8KIc18dzGl5voSyAKu2hyphenhyphenm6fQxCnKjxyIxdnEb2FsvBG53AtJ_uSZbTqqGU8PRw-c5vXVT3akj4kuj4HW1VCX0Icx0KlvuCO2387bkoNB5Lgol5ak9Qb9tuoC2wUSsjvpVyvLPn9Ilia9ppZcOTmMw/s320/1000112589.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm1ponM45vefbvVmGoNTzawu07OJ2GLab9htFN33M4hYxl39mAfSaTuLkPwE674RUIr7uD4-gsVF65B-2ZbdrxdUEgmGHeBNpj_8RocRrdDA5U9CVE4NmxIsm6J4b1Er3zpHUHVGzOtWC8i7Xqxfz9tVeBLFrAS1J2GrOupk79yJ_jhkHe04qYQi_UA610/s320/1000112590.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir4_hSHnynVGxvv8yUxNcfZzjKNPgGqQq38nA3hzCDBOFBOAYhWG7eIggErYWimJTyKwkG534mwI_7tUMp4B_AjRY357V6xBp95M1d9CLZYjHWvNJjoBd1PAUTckstrxI24idjYa5PCyl5GGP3R97XVCAN8sOOSLY_Fr6jKNISUPAojskRCVNhCZYrCIm5/s320/1000112591.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV8BtPpS6GteGewTwx7UWU6M2UN7OFdVAYkcdDFCUkpfv-aooYuzc8-HDOUsg5dNLrAH8577IitIHkeDmHZcquH3Ul6AroubRMNhk98OmkHnSWT7vHq9rbiZaEy98Y8IHrYCx5cuyX4m4SxrsRSm5V9khA2Beg_grgszxlgUiB-656TlsA2I7g9FKcUAaw/s320/1000112592.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxTfIM8UltGRgdjKWjxFNayIlpeC8X6TpfKm8Yu59fTB-VSG7HVzbnIOVSSuimz4HOWXK2IwDL4YNJJpt8-UNcOspzxEGTX70JGv5ALsh2oiMuH-S_s4q4QPmOwSraeVaG-gD7PWWI9VLGxSQujmIZWasa_MdT0t-f4DHU6nXvvDyXN8aipZHVhFXooB1i/s320/1000112593.jpg", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnZDf7re-YRTrGHJJ8NQI9t7NCsO3GcstL0sj92xaHIreYhjD8F3t3C9FNyN353_nyf_Vdtp5ox1164poNL_XHwlEvbRyRRWVWm65DC8MHS4I0-rs-fgORpqMcuAicfF4NJpFYuOgadBzw5ljvQUnszQtdrwHthQJq4p5p2YFjZITeFi0vCayBMHDPzzy1/s320/1000112594.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC9s13uZIv_fi3CRxIro01JX_AJF5rcJPzDIDSwBRQY6njjaPHUGZBj9CQa4DuAbULmLlH0aY74ccvS_uuIe_-IidePd5tBLMoeLttOl7gxHNo8hE6kVCySLWo1ne3oHEr5EFQL1RlFl4es4OiHNhb12d_ngWZDKxHAMOXm-yqIMr0feFsDwmLwaB6YxmI/s320/1000112595.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXLb0JkPqs-EBjnu8uEii2Jp_Iw4MLDRo-jcvuwawL6G6WvSzMvkZZIkFklllSTA0B9TQYSmPWtyOFOmp_Wr19na0t01KCmOalOCNwHaPQbhcXur4cH4J_enOVa_EBuTyZnRuPoEpwHl8oEVTOspo33LvPXiRYcsQfmQjRWj0AvEpq-1fICmof1wOrV6ql/s320/1000112596.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrOfhnAMTZdvanG0E6SPMox4LtLNfN8vutu8CDa2Ufr37pVVOrq8vS_Y9C9EtLNV_PrPuYZjpkrODsE47t7V7aGsEYFkCptagUMgLkKTr11DONpO_OnM-f4GPMTx4RcDpdhtR0WQ7iAL3c28LZnRfRans7Lref_sB4cY4Ukxdp08T3X63X3jSuU6lfpWHe/s320/1000112597.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEPpptKec68N10KF2fBmgYnqi3DBngfspCYGmlGZklwdidLK9mm2KIRiFr7ARA_5IUn7zNqtW_SXJU2OMheeM9olZADxRW3wbVfoFEM8Wm7CXCO-KbesvAKlfZHpWVWsSb4N4g0FQH4dNfvI8QtC7bAnONpCWBENYsi2r4h2W0G80p8By9SWmxiXEtWmWz/s320/1000112598.jpg", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilFPhJcJR0GuFeKnzSpKAQRMI-w4cTQg5t-8t8JP6cGOfWccy9AHRwtYe9eHhgYvgagZAN4MyheTXuDy3mcQA2TfhiZe501TnNgFsTOJX6peqduKmzfwEPYQMqeFYJ4LCS0b6nWt0wwSOdqZI_ztfqQncalFtiDvHKvj_K1hWWnYM20afpnLyrXX2Tq6uJ/s320/1000112599.jpg", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjG98lxwUno6WzauI-jCq2Nj9JDz9duIC-rEW-9eMeD6LcoPM4dVcAWsNvyqckU05WKRjsVnGVNj9LPTYLsbCOb1pT1HuSK7_9HCqE2462XwnhcU618mXJarURH4T4oDgxTfCcqHb-_7496aN-phk0lXxAXFmawucxNB9rSsdcZKQn_wdfJxWhI2fFNgy1U", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgVFNsVwQTnCaVjRS-6ZeHh90-2_qSuLvxOcWkuwIyEo9sgR2W6ayYLKGMynpurtv3ZfKZiaeEW2i-rJ3b3BzkLhzEM87pEAE5DEDPLHALhu9Tw-qznKqmbvT1T2ozgR9dFEeWV_mMwEQ7YnnMQ1AtK_9vO-UnC3yMKerUTWXlJtReuOftATXMXs7_f_Q53", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhnqQK1Cvm0UC-bMYdqdC-7VKExusewQWsPHsVOxgS4T5YHG_td8j_KkB7sOOBQuLbTCGywvmyYiWXtmW_WpQ1t__8fV224rR9dqqu1jEu3TEkoHpnn4O6DgKsrRv8esuh8iPASFrW8O9_A8NgPNCsNe4m_J6RKFyIR02BPIAc-WmAjOPOHE0yuBVWKD9g2", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhbupNK2b6hodf-f-yW716AWDz8-4SqGbfASso7ELeffbY0SiR1YjFb6dx757v2f0NUyAv6Eqgx0VBBKZNY2DxCfsBJAESTQbFS5aCl0FKV3h4LoMSoRevDRxBQo-BBXFTY-fiCjvWjamrCJWHR31SUpjtjAZEoY4i8W1VrAsRLHHn8pBjhga6--1EI4ryE", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEi4tdsroCD-mmBOrIBafmnK5T_qMMXIUo6XnLws-D4FuH9E5IsMlC34WIwXviIfStxMEXXpbSbPAhcjJHWBvXCxPEXH2iwS1HMjVsp4vebPdZDGeLm48Qu_NHuT7mHBs-KIr20Nq1_CozmNyNyrpNcBixjdXOqhq054s1bYtKDPnDUGFpig9FCvh167QhiK", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjyyygNQoaW69PkN7ZhALNiheu-gadqfD03YopqOf7LcEn6Rm5lFqxstz_n29Lp9KdL2UVzgFF1nEy6bFMLJ-PCQfu9EuucriH8cMsZil54bF0qV2YZXRcTI2RBvBFeikkJZd2fZ9LnZHfGShTRgHSRQVCD4hRQt0Q4F4aoxUWL_qP3bAdbhW1CZ-DGFzRc", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEicKv2pZWEjMELgbMGVVF-KYfA1kCHD-rO6h1Wd5R2EVahjyDgW6bG1uBJ1jzSR5cgYPSwKPywSkK4Nt4v229sCtBpdLmiQpybWOfxUJTE_QnsL6oSeLAef_FHgwOrxAZOB-SAB54bKBKWeq-0DhsGy74UzCRKsq45iGK8sX0tleOb8_Bp2OIzpquHZYHJq", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhYpJfGZZmw73taZ8qdWKb7v6FzbsR2OWvxLmPesuihIv3ZOIXy1Lg_6F3RAfao92Ed7F2oJQGJUhSdZhdbQEIE7MFuMCQYlq2kQJQs6BFYBmWVtnPOSQXbcHdOs5XsXM5YDtminNcDLYg6UQeu1eS_KGNDstVEOnqt9Z92TzLyGWsBOnp5gjcb4KP3MuCl", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhSdallD3zg18kmN1Crvj3KIoVWHO6jN-TysA2L3sscxABjguyhBOKdsxsAkNtHH7Wmf7M__jPqKOw_lUnPZUPF_yr6yztFuUOQIRYMZM_a4iWBq3xG5Yzzr_q4fPFtUIqM4urhRm9VBMGnDk_watnu_R_UTcqxhzTDO_zdPRQ6CF0uvL3fjNmxKBM2xBsM", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjP9wxB911nkgy4zf_Ans7AEnHcIlykIhAPZRlnkwKL3QfEGU0L_7RfT4WCWRIbOQBtCvOLI919MMK4xnx-XexSfVYWHB0_uhdIMOO10qm8lXpDi3EMhsJ-WJ8QHPZhwc4Cp1c0D5qGk3nIGA2-n1u4mYevb2vNgK-TMxMvUCioW1mKqoSzFYeEshFsJDbN", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgbXxtWM25KKpqclJ00aGJyGRVwNmVUUzWYVp0NND5PtQjIIODwwMmJKdPJGYgd_--AKtulL6nJlTA_PsEfPE2XNRRg9Qn-z7W9oVgaPAaZT-IRafd0ydTvxrKiA2tzpYBEyUcgeqB_SDQDj6gKacmnykX3vnGqTRGel7PGhkcSaN-ZIgOU-qX3eJtHm1Mh", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgqDL4osyuIT9ZhZwQ7xQZhvJGqm_0_GsAek_xkKYJz9g0TLpjwqvCDm67Hn3lhSpziuM2cdZqsTFff7PycUQgOQJJJHfSMnWc2calPfxupnCONMz1M2_bSXADdQ8Id7RqX9eB9xUYqokgaaDCnpLcDA9nG-2Oxsc32v5O1ZMd8BQ26-LYb0GTIJ4Lotio3", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiJM9RbBU_fpHlIt1oqJYnKu1jEN-MyQdF8hPdY3fhZ_sOIWKcuwWvB3cUMLZZiWbBNdz_lv0fi7_WNujoKzvgclE70ogPlsNP35u8ymQ-WVG8G7S66pNrPYKKu3H15cYtTOD-r9Ai92zxCUDE6j6ZHaiFXkfaQG2o-Yx5c-GYiUC87DgI_KpEI6YPCweL9", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhfoXdEIA1i1PGXRFO6es3fG_b5iarMup2nOVtIn0GM8KUcUNPNDxwW4X5Fm4q2EDdwh_xoyn-gjuRqxvdKOWypo7xkh_DVuNICkXo90SXukfkg3tnpu5zcADv0IApuDx1na4N2d6Dct5sjK13vHv1B34bKjbU9U_XHYeoEu8cK4WPaYEz0u1qqNCnLqYb9", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiBP6S5TwsLIdqMfIk9KCINE0R1o_6TC_O1UZNbckq-YLvjTfCRMNAVxHF5a44u7mfZ9-dRDQ6hM4Plmd1xBXhV7TA83R9ZeJfkOoAyiSkAozEaIQSBKdjq-TmskRtKSmlJBa6VWx_ZfEk9QRUsB28uRyLYwou64jXJMoqqEYUkbDyMkyGPLFWghcaD3BVt", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhe1GNaKat5obBFGpyqTLIYnYmRtRJC2_2N_ghBpHYKXK-pdkCJ-zzzCbxQCYd9q0XcC5oPQN-u0BuM3i8XPgPwNVeqMZBIKOXfn6gAoHC8CdnxUSAawrfNRQspdti9b35mW9oqG83AlFK51380bt9yLFi0pL4g_NF0NV3EgZqvwEOA6fk4AY7FppPvq9UJ", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhyQOYv2Y3n6TwcO_XHQ7xej2wwvAiHP3G1qDsdhL67_Y1Dh3R8z3p_STcxsG1VO9BGqUA8hwO-U48EWn--Opy_ZUmMFDh69IqR_p83YOgm6-XZMPLEURJV4EZcfXEvMOFnC1b9jzU53Bey5e7z1e2TfDgAQXfTitzYHrcM5tx77ltVvFjwAvOJI8l8Bokq", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjksp6s6EMoyWwbK84Bs1M8UJvy-Ko7aQN7kCOAjqg4QCxPxxOkwfzQCSp4JcQv_du1V1yZEYSj1tFSm2oryedFCuRdWOCIjPBjdCH6llTE2veQzT-mpAr2FWakUP3rqzaSYwWgWz1mauTUXipntFtp9rYXXNuxqta7CQD7FsxoWkYiWXPwpY-vXuk3uc7G", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgTP2l--u9OFSdULbPKEm-oWY246ilfUDGL89P-Qt6K1mTUAjqZi3o-89X2hgC_PGUH5UmDWUxUm0sU4uh-T3_pfItZ_7_w1RGxcpgHGXamINS4CW-YH4dQp6ZeA0mG6D_xZQ2BPInwENO5bThT2Owg5pC-kzPkMQ0XVgjT_rgty2JNveTqX6xxSZHzc5aR", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjY934k08VDdwaMvRp8acvY7vajJB-DakTGi9HUomTmhEiuQ88AKmjDgymlLkzzPdAL6Y7BAzqX5AN58MgioluMYooWB97u49nzftYl2BsmOz9TOOn-YUZYzouWaNi4fTeTbD3ZjUWw1xUj1OECPKqTu9z50leyunnPOz6DbaYHRW4F5hAoleYtI6PkIqNV", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgnkDkWAbsF0wYtvMiIFQsyD5K8ciClZvK1laVeuAS-h0BfCEhOXpDxzJDQ2m9gqFUQ0csQdhBvmCNWRpIYoNjPK32IJFG_KKR0R_v-Ul0l8eP9-ClslBgyDAQ1uSkEH0lAqcY-K1uHV7ryJp9k1jxkiaWr0mAST_9SjV4cgN_Ps55xJD2apEuD8G7JcNJw", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiH889P076rh5IVFOMFzcfp9eHTea89OxH0r-nycwT139oWIVVLOV45mZ5JwNxIyvRgBef7k00OEfDqutVW2XBiG7ikYZ0otU-zjQwbcOGys7Epu5FKlLQRhaHZz7ybb21waQMHjyDNpwYRpnvTOmUWH5wwERxYleyDArygcHT70vSyyPFi-_yWd33Dn06W", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEh9vO7zOgW0Px7xICRs7gkBfVaacJGJjPCfIkSs9QyI2sAhSmxXb_Dhnoz5AqzpUFScUr3O-xgKrqkN0ACLCfHVMrXRVRed5WCoLGKwqpxGEmyRxYMNYWikfM1a6ewCeYdxfuVp9Fct7jNJNuXntUwBstHqZULNlV6xnIfQXVKglmSHLnw9TnBfzDGnF32W", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgntu5981fAHijEYxHX3uTwM_nPYGkxby6jrrZ4ar0OOriiUqwe3ktWwbehD4bdpRiU9JYi4UMXWFOtSAekVa3JCy-SFAf8_HzGEFEZLGm76Qggx4vxt4WM4ogYJs1AU5tDruQvEYS37W2MevCD5lxzt5G7myGr96p36Cq8ri9J1YmGgwJv4xeMmXRguq9n", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgphSO4c2ciWNWXpX0-tsf-rZBs1pZgTIBZZsHK9BxdhCGOiIfZpWexwgzv3oZVhRu34r3dyim9goPVcv-BhmhX9CaPPGGUCDS4ZFnUu-WAHyMBrXnHyn1BZlmtprxWIhL2qxf-RYr53rgf3Z-a60k-LUiJFtwPInnsp5L4rxxCpGzNwwfkwkCnaw9bkIze", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhhEGJXWhqM2FSetmnxF3MBi4nZgxJrDMBGVxCYzn7c6AQUt6qPPGrpIZ3UY3PFBdW7tXDaz4Y6sB7sMBq7nGor10TqM4ai1x_p4GD6FjImZj7njq4Gl3r8PnF9VA4BIB8nmhqMA_taEZMYSQy4KROa_pAdGzgDfh9bJbnL3qX-wU9zCSZKxuYRnCC4XKef", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjm_6mZ4mVq838UcbNWfCSX8aJhsRwJyCSuEChZIxtuIAoBzjBdgGSa5PPCLoTFPpyqwMTdbi4zuf4TdjMmX7fRvSb_gVxGlZj1TfRE1f3-LvoQoUnNChAGM98I4QWNL540fLMFr92dyULd6qke2XNW2RxsLsLpHcO9BSoZS-7JjAkKj2hV80JMEIn-YGav", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhhwEiQSsBRS3nSiYJTQJWmCGqPv9xC2xApN-Fs4JqmOAkoJDJgEhOhy7hk0aTgPUP05mQBYILSB_bEh67qd-3gH7jAgXiSEaeZkmMij5gU0q3dQP1zqtF0kdYr3prYHN3eECpIXFoyPqROI0DaohiDzeI5XUEmdnNZocA0fqhV4UMD7dQ53T-RUIIvynag", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhZWiyH1yA-0brGJzCIY4AQEFS1pM5lNpnzdkNt-UDItq85YVsRVI3SkT8jcN5dvHA1A9LKI1Gu1ZmGIBhV2jzJpJpsYp9o9ldiqHm_nnzYqPv2Kqp60HcuR-rRdx2A4FeV1ouApoBB6Kp8wwkI0rC6acq3hwOcxj0_gSeAKSyR0-JlbohjvDXfWSNJhCMN", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEg79pXfpdQfJ02mUZICV_KZbYfOUWUnaRKK2FLG1UTIkIJGFKanN2TbE09IXjVRKwX1b7Q7NfiOILjoXsis2nBDVxIRg9uxmjjEhcozNJI-C93P1w7T66KKY9cx4ZSlb-2E8EmGQ4noDsRslnTXFjy4SE5Zc1ztWZFSUghL7se1Ua1AK20d8UTlUiJpdkDl", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhgZV8JJbEvC3Ftku40Bg09w89OWp3zH7Jfeq6mXbiWJDHQi3fB9fm1Q749QL4du5_o8XPmRv5GrYokKl63KqDuKyR9xbIPSn_zXGcAS3Shg77ZYK8hb4Szxl11JVk7k005Y_VMQPE5N6qDiJoQoeFtuao1WE-WAcl-Avt-iUNQnjyqf09zOylvviVRMc_o", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEh-quVUw75thYm3LCm54WvP_hl2Sb3sZmv5Wzts1K-r6HVCQISCL6aMR4bMNoOrsBB3eqA9pa-7opr6umWlsGZHCz4Z9aVaUCz-wWa761Z-0Jyzr3AJ0wQb6sNEwjWwzbScBcUGZxhqzcLKQNG_06VJZZ2w-3-R311uCpDhVWDbp9KBPpdmsymLbNdpsuN2", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhmDDyXTDYCTutJIB2s-hwQNlNhGD-nRelPCeQNv2d0E_kJGTHjMD38wvJ7GmfKsUJ91xO2PwbUvnujFA1LBuu486YvSoxrs7c0xAbfG-vkKxBfThUjvk_VOBco7PwceFT2U0RceLuCWLO80kITGR_kDIvKIGTGx2Cd4vQfKT_4p6WP0OSFT2FIjBdB0YYN", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhbFoTAY-LJQVpMdcnWC5lGGuCLlNwQsftGZMn-3A2oHorQu0xyUp1JQRpA2tkvlpt40Xh8TQuc8mWKCpyuwl1vE5aHNW3liWyDwEQ8Ch2TxRHBAjHjEShIK5Jv-U1rPw7HWbf2S838uCiPGHtlIfCHNaMLV-GKaeQZxHznzCaa4tDSH-avP1qkUALsm0C0", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhQb0TklFJpVWfoMlUEzmiYTPAJZPRk_c49LmmxXWGk4amFaBZCVEOlAzXlAA_Ex85_pQVePQvXssGwj_IyTsgCLu2EFxek33K-Gzf89OT0Zh_tjHNlZ1xDctTKueZBLwTo5s83-HqU2zldmj6udQlSUNEQrITC93vMBS2d-eBg2ACso49w2fRHTCQgtVnv", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjVYT-RvcJJbKPpIAPS6H3kxoOowpc_nM7y1V5tKx-JnKw7JK411dHkPQM24k0WnlHTYGSwvvkVjjp324kC49yezGQpZ7Y4hypAX5FPJywwmyCwQfoILrzUzzJxXUZPQkbka08YGp9L36xdxUz5DU4BToqnUovaZ1GlIeZYaFeF0TFalYHHhzv4Ul8QZb26", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEj2H2n1LgS9XY-UOazaRjg2LPakeF8OyWUpdGmqVkwCWGNp-HKLF0eiPNIHi490u5r2t0QQYlzaRV9-bFR-diEhPfzT-EXA_RY_JwQQAVhl6vw_qF3XqIblrS7MvVNNblJcRsgbEETOoednaOOg-H-MHmt0jRBM-EO3OM1rdsN_NXeAJlVftzkhbIofpbm3", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiVbh46hVRrEX6UAIv8jJN5qYy-4kWfFMwoQl8-ripNbG2u1c4xdhvreN4eJ6c94OlDEmpiBYJkb1LscqEDYIae8Znn8QXb9JJvEwOBqBrDV9UQGDRT4rK7szH2OPvJwUijuVaSvMorIcnojqkwM2NhMK5FR2rkQxZrGPf32MUvMLKAtcBvT4drVmODdhlb", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgoiGZ3tWOJV3VMWPuqtjKKjvMj341OidqBUSFEgyhQZ7aQszNMwS6K8UKaXtzlRMA3LdO2ziVyQ5yVU5Ti80lwSEOEJg-ge5nK_xs2Ut1FEHaIlnIYgZU3FXWpPNct8A88oWw9QMrHX1eouRTvCA0CYnYidwipcQrrGHakQy07mxf_OONoaa2KUq32zmV6", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEh2_g0wSVQ9Uwj_qoAfiBqHjoiu1YenpRu5cLyQbjT6RIzGSR5KBfCwGeaRan_7YGv2hVTgGYy0hoYg9W56q0O7ulZNnx1TxUOJUjFoH9V_S8E-dpgS7DCGFXxqEV6WWVCVUihdtYmJdGQrOSNuXnX_vPv9Ec8_mun1P7ykXvJ_Y_9aA57JxKr9eVp7i4e_", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgOrrOpFTTIqxhdNXWtLRYpQrBio1WvbVX5MEwlCJIcmey5hDMRbXGnlvNpWbRm_imJIhsI99tJDbSeacKqJsQnKSHBHxxUQ5m551y1IdC2zfGDFyAPT8JmLfzVbrVrnH8FhBRpT2TS1_jYy3OWFDLky9r8EuMpyXXnaZ0dzFJW0jtncP3L1a-YdOEmE6A-", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiFbAiC9RqibLLCK6wNlogTVeoavBj7j1-HrGHuBaj1vZu-NTMowhZowY4P5hHYXV9MUBEmkVbBGPKEtIDvNp2f9Y9NnYYJ3FpGkKYKEonxDbfIqfDUpbeDlnayVmYyi3QsINqtxRgzIlWTXo8R-Um2PjzvwrlGMWqBCZ2tG9j9XYI3KCFEyQRKVQU54mch", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjaWBQEFw0sbIpxfaJCKP5IdYX9NSahUjRPGAPF-8YWBRu6FJ9DxRzzFnIQzk_gWvgoi4qAH0tWGx4_YYPEPkk4PU7x_HDQ3rsrV1F6dpikW4RZLmy4CFQlCbNB3DrWIZ5qBGfToUXuCpaMkhjaeUsZ3WuZ0kHMuI6aiheLwTvXUCCTYuyB89PURJZIQl3W", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiOufR1WoBSA8-pZJ9ykm0bM1Cy4TYsE3kz26uLcwDVi0UkzCgPm9EfYVJyJ-k_wWUi5I8-K5Cm6LB6HFKdQOkWBRidsLEqQ1CF6mfizEbZ8smd5rJmKWl_aRpMitaTbwcF-lhw4TikV2zNPPQ5rg7RenzqKm2Z9--xKiVbtJUGzeOQUtAHUxwlg89pNwiZ", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjo95J8ziqUzqerdIORRAqV3roiRKI5GDk7Eamsz1yVkeh3WLq5olHgrnUK8l3l9sxC00cSfwsJt9nilJDXx6luiCZi-yvSCKhUoDkz63mJdDss43yo-LFrpf_VDx913uRFmGmr___JW9l70XH2EttqQHEhjPMfbOjfLMVi5Oa2ggiabD0fdqWb8zoqP88f", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjhqObFrVCL1gc_XAIOO1udNxvEuTRyeBAnnUPH6coymRAlXFVTmApA1vHODhIKBKJ02aRJKkwmUfW6SJkVvIiilhP5Id-MPbtm1tJgGFzbFN33udeC9hbGsvOjyhAtaH6C3vYNCUmIoCoWqB0qvfcoRzzu8a6MEZqzllDqdFZ3HyaSf5PsHwT9BEjsY4fO", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiuO60v3ncxsMNCjN682olcipV5EJGBxOWsD9-brMbt4-4PQXKfan0MY2y_Tgf-jQE70NyXMJhIz0CEyQbbU2eQlvCAq7BVc0BxOwM_6uyiD_wY_ValSFy0Ha6220jkzXzftT0jqIYkulLtr81I0-W1SBqGIRebScZCJ_Nt7qjKEva_ZRwU-Nn6dcXjUzM5", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjmXpPZzgB4PTb7DXOU9Dv90vC4KlHMCCQrrs-u-U9TqHV2KmOgmPaqIqwhF2EQBEWEzYKod9WLhekILP8A5hHLLpcZWot8MJJb-JPMWOwasBENQ99lPuxJJWdee6xfZ17UG_WbiK1aAzJO85USeaj2RbUavi5XJ0diEGzHxCcvjQD1gS_eUST6_AxCPVo5", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEh41bu45eYTXl1ORmWl8tkgsClo04d-2gHGJdMzEoWLoN7p5RyP4tGUIaXKpogYoa67TxhYJl1PJDq-bP1Xwo5CPwQNAh3yANYi1i6NtH3RvdqmnSn4qZVANb82KJ2NsR0bdgSyx3fhcQPMKIGiA7lFKg47zWUYAZTNsAFePfd0UtbAvW-nMQY9rqIAGsxH", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEicuCjKGyBaEIUg6BtoXpayjWTbehN9vG05hcbyqjQOfiebJqezht_gk94YiNUjvkk84i8Ky76EE8weYDMjPjSi-VY72JC8-oGGdvCNtzVl458T_B1HkSpofPUPUoVMaUkSMT7xdcGqRFglRGd_pQZNNxgkFEofC8l7AX9H6rDKbNxBmRdiJCLZp_bGjCm7", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEibGY39GogGDmw9y0J08SrTROtvCP6YWDOBfaBWKQLSUcEC1vWt7h84T2YWqHy89PL5iNgqiygkZOvIoBzKRkl9TnDjz3ftmt8mCCGAJJwW-aQ8fZYJqn4WAJJ2oZW2Is0K-PHNzCz1BTgTbiy8njcAPByB6ZIAvMQV5anLp9qwUKaLXLdnS9PtqJqoCglv", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhsr4dVk19hbABMMQ_-lAQgEWBX97eSdeMlxazT-jnJc0WfPXBsF00irzv-RaKdN42zSHUifiR2N6fisYt4Clx3kWL6JRe2boH27_maKDKZOmo8Nn6LthtS-6awGE3VU_5net5DP0HSj88mq0UudFzB3leKZ6zJu8k5C-4GRRxO_7nZV_2TPpg8YaFlT8Kx", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiM2x86a5LW4KcbDahtWhffBnm5iBR80Q2CQ75TKzacNffg3rzHJY2z-_wOQ115Z0wrmlf32cLKtautNwO69lDr_AdxMDIWVMlcOrknCTzvjjPnPoxAKQVQBE6s6wtEEU7UW_Gnovt60KTUYmGBASVwOYdWnQ_rzZ5N0anpzqNb_w_dr1dUwqhjVv11S4GK", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjiTtFUiupbRgbxBWpa-BAEfe68bNa-8WC45Wn6Fk1cHkEb2nP3_1V0OgS_o1R4xPjYZ17CjC18rFkz6qEj3RX-lRsaTQ3yJe4RJMsS98M4gGgyfQeic9qIR42wsKw5_KU-S6UY1YXOE1_5xvA3Z4Wst3mvYgdSa4lZw6_AR5a1NCqCBFqdQayePTVFJpQ6", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiVyOzgbqS4fof8hHwnLIvYXgJkWnX6r0xwPBqRS7TjMjbBuf-hnLZn1jeJtLaTTsJ-HniFKBol3xyh8dw2B6LHiPnvzPGJrosVpxqmbrkCbtUf9kFcq8eH-mJyh2z4fJs9zrHAngNATzexkYS-2ZyOBkkCp_qdfPnA9pwsGVw7FpHcpeKn1TetamlVeFOJ", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgllD04C465TClSEYmnajq-XvnbSOCdTDIe4jjbEU-NJ-6yGiTfxVcp0iyCtvXARIzMcDPtZXp-nFDJKk-_Oe4S2rqFCcjpwBo0QdIVhHuNI4yz4rC0KIR2Uw2sWNwAWZY5cWDomrzNxu4lwtjLBdTUxM7M7xm__294A0nsYbPkwPgyRTyVYX2UhC8uoKU0", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhypy1Vp5ordYEYQ35m5eND_8RHGMpsSvtT2ZRowPs0Sgb1ArPPiqKo8rPje16fGo0TsHMXpb_JlxbYVFktTcgJWYnDamQKTBXMfEw-uus0oQetwXm4cnpOetA6AuKWRp9u73uDcBtMuQaVwo7twu-j6RRcP3FncPoOOWgNVa-MnK20df0iUnO6UXqmyLFw", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhiOo6vTpcLbISEd1mpBWpIDeXgAv6T4EoC7xi5Yaed9sfjohdJH6e68nfFLkpeNW52KClJd-Eqw9vtlGNT5GOi7j38mgFWW7v8YLfjFpff1JUcocL7ZKRZMVBIfjc3MtO3boriBM14Ok2V2ojg9lQ6DwFhqvyjE-xQazLlTOBpDBbUBMyL_kTeQb7lTFRk", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjE7yp1WcduOxBE8VrDJkLtM6r1Lhj7AFJTXMTiRHpMpoieFKrkfw0agOCmKavX_r6T0IR8ZlhS4n2fgTWm0byj0PvNjbWa_HTNSh_TCdqNXoWEQ1uGLlJevaTinxB8Oo6JQEoXJkTN06UQ8lYUox-zVu8uRrGxIzsZEei0j8idr-DySqkoa6Z6AWc03Id9", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgsFNTmvx1aC5R35VoUxm8Oa765hez7O3pvC9f1Hq75iPu7kxxa4fN1ou_5cvGf3ZHg73xsJ-7yewt4KTsixMuNpqLEhqpSZtEdV2To-6DTr3WAgSOMJWDVUJj_fSnWDdybtNC2u6ecAGM9Ei6vp5d3FYks3xNbo6SOBXKyTTT-oR08vBxnezzgZAo5mMBV", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgsrYXf4cmHwC120xPYIGrXyUKvG5Df4NBW0AbjopieTl8KsR0b7P6rSf9bqfJeDDJgsT16KXguLdxvpjI3Hm1mqNIYtjY_fK3qU-CpO_s5F2DeyYLBDWqBExgSVIWuFpLKWY5JFLUQkncRnpNDHGJrFcBWdXs3030M_jebzsXz7_zuavj3QesQB3n7V1gj", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhlPtOrbjrvd-GbSjgcozMi_GZAOSH0JDoa5OQJmxMUlvXUBfi3pZHdLjvmx0-RkCOXpWnzIZF5PtPKXj85mUCQ2jJZIDEYwXdE3guBQo2k1T4v1Wr47CnEtj1zF_U37k66a_r9zha-EqPmvj0YKc_j3CwydFU3HeL_kZVte7vtiTBvmxBAOjq1JCI_pFkd", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgrT4kghDVe8vnLug-0IRn-kjohTUf1URHV49rNeGDNsh8e-GwIjFe2WssEWEccSzRwO7tqcyBgnG4d6_vAenj9ZsCwZfOwE_d-_ihXvOoxJwOCMYemdsE_BPFSDns9Qb4G_849HtlBQ30LXSVj7OtqtLSYXMGV60_uHtlRVpStaqOOyDVDbrLUexkN9FwH", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiB3v-A2oT_lIpBYMU3inCtMoY36ZtKelSi3TXGuH6tm0e-b2PkYFp3ot2EltmQCYK2qZ-S9qg076rtsRIormd7JQDziPtjauwsdtitubJYohd3Mr6vbvXhRDisRmQ2MtLuV-CoUjTIvClfB6ckHuuI6TrrRZdpMJj8jTNeosc0qgyVrPhu5fRjO_dKIiIt", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiYBosp1JJtEPsNqYP-9e4XThVTLMMjTstmWHVJCJPMJex-nHEUDO9DAEZl2SNhKYLACgovKgebkT9-8QHCqNsCgYT_fTe8vs6m2t1BlUBg7Hyj4COWFpwa3xuYxFbnfGomYHC5CDQ4UL4dh_3U_OB6Y8tMuo-0vz1-iXv2RqbBUmjJcZPr54sDju0-OeDO", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEh-UPKfXthsYUr2YJyvkOy6utLUU4mqVE0dX-lsQI1DhVwm8Ezw6By13_ac6k4mCGlD2FA_9xP27Kxgjtxpy4aqZTfqApkfcstVzlhDpPqVyVetwCuE-mC_uKmNkF0Z66Mpl8ozV2tdhu5UjueKBc4K9t-U2bWjIXQ-BVhw6RA4SylJgydvYeUM-sLD7PCS", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEh8oSCBpB-c6kaGLgkVayOF3cu0ASBISuu-UGpXY5ldDKFSFXhzBEhIcvtA3wFfGfUIgQaH4P5O_48N6YBxbDyhufJJBqaR40_kR_oQ-h36TJOaHbvwAi-OxFEwhQAgP1yMgrV1H7lyBkP4b0wJm9vesO3kVG4IPSc_AD7pDo-cvtIrprVT8Kv6RGKqGG1F", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiK8bBULY8m_JyXUqj3TSnFXn-spIdnyK61FRpDAzjtq4fofpEzTSTlnAqCsIrHQYRbPBA8DQegNmZPRjtUA0Y3O9Lbyzzl0vQoz2OSWJxZT4DJXbDbjvjUCLEzwXV17bziibkOZwSzkmcEN8VZDuZ63VOewKOIFfH2l-GSFDu6Sx0IwGpcOPfOCmHp_6zL", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjOaxCJbsL-UeYUdd2RIiWIRsweg6hlO2ONYdnFcCX6DAcbsDAQNshx3wYcz0Vu5AUpv2EwNxoqp3-gTx0Dk-fJtiyrg_LgKLrqL6EhKAREfR9Lq1HBQ2ENyFLEi8soUkpjLnRBK6kyWcNqy51iDHQxKXHJAL0bqaVPXF4pDeTKXMWfnK4vzVdaQIRNiT8u", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhCLHgwwbvUlOO3oNOqclNVhM4WrbK8gQWo2qe7TxIa9fycgP3wF1OqDPoLfIO5LqrFfWetPEXghdGqWLCLSkGe2P-P3OsOZ6nnefg7G_KQRFwaHxuGWskeZQJg9qBJKlJ7jgLjKKNCQ4186aJYx1_zAx39XbwoXn8wA2JdkFuqBK8aeNphAe4TkzfbNBx_", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjDXAfePTTA2o5R2Mt7DgW1Rfc6CvIy7xlmKUNOpSht76KDeUzDT0kWb0F4EQKe408PtneBbQtg7W_cPCZbO90hKq7ocHtulHI1nxEnYLBP7thX9V_nTcMWTqJDAQNrsT1cSUt3DCucrBEI5_wh1dWJT6-GHNr7_5ZvseMBrNqPEeUyqy35_spgZpABi2YO", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhVbr3jlQTl_lPLxKKccw98w53wOrH7YQJAG_lGkRLY9fxhqNQB9hSdk7YsMoboZfmHYeSJWJ6fC64oa_VCJP8UAA9vTLWg3ZtyzlSPKWsXYkVPWdHoWfJMVm2kk4P1NIO6xPVEPvKRYtUVQe9ndMyfoxvdSv4rpS8eMz_g5wXh4Y4IfDOczEe6M7H-XwQo", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjpne8PIFEQX_KufevrIKMdOyl0rSL-ftbaV8lhCbAegFroQcjSKlwol-xPboX-SvboErgL8iWOREV65_ML3x_L3ma0UTqa2bkDWQ2Bl1WHZ_sSLCFJ-CSmQNuPRaHW2vhrPMyPN8Iz6Us1NfZwhQKxF1DPqi4f_WdYZtODQyDNqZJj0zfgAybOBTZYLDKj", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhLb5aiIfXz20F9Eu-P6qSgkdyy0tUhIVaT3zFLKf7liVPXqpJPLtsalKVjfMjK8KmZp0C0QVX70Ut-pKG_tso0ZI-5J_iF1AfHu3LeUHdvd5ttr5GUU7PEadnh23aKGRcKmXTWWYq6JcWVaHB4oVbzPxuqq1eKy8Qyc16UtKDtUPrzVZNu8rXy04oz2NPv", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhDdSafk5M4fHY3RFRGGgtxVBmLqr-kUs1mu7oKJ-3wYj8rxNRMdoR2eg72EiPDPau3x3CUgxU_0eQx3GXrymZvOuOBhQ12TFReN5Z3hQYjdBt40VN5Z1t6_EWSAjZ7WIMXzFQmS8dCXH0_G6h01LuLCm0mXv4_w_6KVcEoikyjg9YGh3MvFXH-kMuTxyPq", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhiMSXWwzJ7d2SPI3bwldD8KsERzL8JF-spQoVcDcXJuvrD9Oab6V5U7beGYlb7sIVrNJeXSyXBq24E8CJMo_yTUKeAUfoI29ka14n2YCvR1jFZKtneMs6s7FOShZ0F_4S5L9np5myhzueChjkknDj2xyfyIdLrbXkFOZeWK3V1KFIWyCcWy2S-Rl9f_YIA", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhCYXCPAgEp9oxqKluZS9RFQQsboeroPt9P7z70d8B9Ku22xlAWzpq9JW1E5rixxKwdb0grUXchh82IelxZx3hoNgOblbaBdtjjwVtQKAJi_bj_WTI6ovP7tbzUjgut-g7Ugyd_jA0Q1AkRIWZuXXPt60512AWimywbsLgZpAZVAZY0dNfLiRvaPLzg9nFO", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhQm1keLm7d8By3Dz4-LOXlK65l9xoENvO_9fF659mzFyn3Y8xYSsiBSuzbRmXl4jDs2QVMOElWXsBNKbrf9nb718WDyjWqPRCy3gkP3msQ1JBx9hCpIW01X0Zl9z9N2dbSoC8HCbu_k_EKpbENMei5ZaHsffdlQQEDIu26VNEkLABxAwwZ0iX8CHhGET7P", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgoxtsI518lr8TT7LhUQl6SNv4y57BJzCJUcoRWLa97z0C5CXn_QcrDCy1ek-odJbPbxJ8W1tnpMmfhWl_jjcpptSAQY7ffN5wMhMC7HS8AA-4rEJmxliKwgk2nx7k5GIN3Tij2gjeJGZmcUPVVDHKNZytc_WPH6WDMRfGpu5ANVDgahz2tY6wQ2-29cuqV", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEh1jViFcHRCy_7KdhRNhMIujf9u-GAW1Mj14mJtUO9373A59mtKdUWPUbBwmlAa4gBe-_PQuEoVQHpXkrxcD_OPK_eAwYSbyuZg2fi4xev_K8a-SYbozlaqpQ7Wb10jPOb247XU1GjEIjB-JFJQOfNhszrIhtsIwY0-Tnj0ThWZbLki71Ml1etvTE92JDfj", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhX6ueusSZaVh5PzAykd5I8RDPeS-gvb4vx8vEpHs4crCPKzWJjfDzTO20WNMiFHRy7yCVX-EaMI6XdZ4qSWVkoW2YenKrC6Hy7zZEU3Gj7AHDlMCjvTyYT99Wlbs1sRWKIqQmZg45KAu3sxMHMUppxaVS6MwdfyKQvcff_Nr_2g1qhbtTemMWV9t7SGzYq", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEi-QvB5kVgpo2c8VEW6EL-F6sGbeQdZmhRgaf8SsClJ3sJmnOn1nyVNXv5tpi1dZwBcO1mB9HLUtv_LFXTkZC4OLquGS0BNVcvkJIR-OAXM4aJ6rQMt6eViGaBvTxhfezXQ01xNsb_lY4ikwulj7-qraCpbQZJfAHO36eBmUdkGkewL5fO6o8NG6aVUEwgS", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjKaTEl3P8_tEs6LzjTAcrVzcv7qa_tU82EFoLT8B6fe2vnaJrAiBl0pZ-Dr1nmOEm79Jy4QL77fG4bDTEuUn46R75jn8hKLLWx5QKQ9DWS4dCHYNsgQMC0YAQyjzCHjBPGQ6vlgUYV1xKHwvyMKSIsrJ7wKzo-Huhc7lnvgtyIpTJQDR6_z0Hg97y8iX-S", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEj5DIAbpcKnOmo79q3SptAyH1cmTt73IxaPOewzhhB8FYkFZxIniUsw2oQoJJ-c4W24vZn-wME4cIrVbdcLgxQelLRmojGc3zSx-3Od-J2ZIlzYB21SwrIo-SBR7GO6xSgaB6bhIvpRe0XMr7D7dRLfWBjRGLmUoek6tF3IV3vod-TNdSVx8bWHm8ZiK_2n", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEirO-Ruz-IFNjMchv2IfBXYdqjkAJWKvADV41MDZ3L61MMKCuUODZH5fIqshJWHRnTfICffExy8e4s74So6U1NhqP3v9Il8_pUD3ldneuzWTUUg2GfKiDWyW7vTEophgUGwASyIzm8hxfuCqtdWjzLt1CPOImR2wvP6M63c8RkbaKN5F5M1GyXHKdiIWN5y", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgNutJV41ZUwr3yv85XlCvmfRWgG8fwLR_Rp8UHbT8yPmvKC7iAXNGIggSXEDYot_CPSca9dFe5M06r0sjJNVCr_00rOqa5_5ZrmpGLQnt9l-imK3sH5dgg-OeXT2tnO5hnJfrFzaGvIJB-ioD6vwb-QDriCp_iqxaN8hAWMPsAZWpjevW-Q3Fz1DsTi6kQ", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiUl2WXtf24x-W-0vPbnAMpR-bq-wBSSJKIlJOL0ptk7voqR7lVT05Q_wVQRfTQUwMsfl_FXz8snQzwBKszbxLIg0nsQJTlMHHWgxzqFe6PHcN_lIhxlR-4u6d4jN_6h7it5-BOTWXlsU5QcfizgEcTvfRX3WiqLbeT8l02FPx4D8gG7kbtWYEqplEMjkXW", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjg6WBUDmUkTLoeRQCsgfNw6rYg1CyUyEzoPfIc139FGTy74RPHSLQEGmSyGESEG3mAVNHu6JWjlJSdUabHMNRen32irXvgLyLHSkIe5sNgKP2lrPAdeZvmwuofk5oY9aVCHxHj8u0GPByi0rBgJMMmKIceW7oA1Gv4DMTo1s5FrRiqoy_Ct1MKh29liPhx", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgYB5bv0bqSfvmVYxyPoaDm6P7WJziNul7PvtWMVXcxC4WXze2XLbI-7Phpd9cxlFxq3fOqroUUhioFg_NmP1Ng_Zl0KKnZVNe4Zp-wDtULmrhxTDhdDAsfhR9Na5Z8mLHqwMbAhJSbaeTSdD-dXFVrgw07e0o3ZUMXzzjZoUr9MSdRHk5EAefxx9Gh7J4m", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhfIlXyjLY-NVpyddVnvy1tIG2HGfFNj66vlg7aPs4zQoJ2R85SJkOEEYZGPwQO2ZfyreAM16fyeqq28_zD5v04abEgUHtjjcOfQfIutI2JqG0fATJ60U0tiTr-vf22PkoBWjTH7MSyZXpc4qLVAuTej_a22r6scTxI_WACMwoopcSsIi6mHbYjy3Qu-DG4", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgyQMFzkORe4QJG1ZhsNRtXdy2woZABPn85Q1nT2OxEXWEuaiQTgNLSefXAiSOdrQA7wIu3IDoVUxOswEC3n4aSQamv3fosdUyLh4j0FcwMNWizqVLXHvEzsb096WpuN5SpU7AEgqc99Kflmakc3MWe9Lcd93tfShVToZSV1vVsGjAw7gxqGLP-BDB2yZfC", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhi9OAmGGOYKAzpkdjc0O-HR3W-sty8w_E4v_SBK5MTkFeF6xbbZWFZvRXTXgdohkROFSeBMGyVDTOkGXygPCd3gAkSKhf7XHNFBsdGbl947Z2_aG2Z6izlgCJvSDjaSfrL0DsPvtphnOIKri8n8H_ayrNTTAwpZVX_cwySXoE_5eOyd7nszJPNe5yNoRp6", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEg76vISWzUnCSR-fq2a1fiRBYIU6G_H_2doht0OWtMXIS9XfJMVeu7ky1IFb_aTR0imEtv7SpQl0K40UN5xP0E4ZF2lj5Gogy-YMOC0x4h2fiFrGEtxSRLcrj0a_m3iUPHIheaohE2cIPBuGFFxqIBalbVfCx0zwmmYY3INjV-os6CUukvAwnR6B0vlKtcd", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEi8IdRTmnx8GsaGo-doLAIXprCBiE7MlRL1Wpo2Jp12kL989mV20m19rL61It1HwQxKml8X8bj3M88fKWwR1Q2VXnfMRTIWTyIDF1heSwFlyVvplhFDNYb1Z1as8CGVOaIKLBsieGhURC-2iPCw-u-oETvJwgVuxfek_o00uiqIncSvQ7Sg_KtUYH8Qua1P", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEi5rAbVkg1Rq5Y6moerxIi__EvbqdxusplcjnGdgyy7BzI-fT3UGFiORtsKZJYJf0NluxFjASgj1Mkhp51FPdO3PshqTKZNR02bTXp2f6G6DXcHp3wtqRJYDF0JgAJJnuKmvRTDWFvdX2vV-XiR7aw22uSjqqXv5opWIGY3mTX4ylc-e3WS9KtYVx6UAwR1", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgPpewn0DSAMqYIoNwvn59mBSAcC99S4v5hDi_fbWy5W9-2SDUcdcaBN-hH0m6ExBKG5bsv6peVGaM9oRrIL1YsjpK8NkJIA6Q13HytIQUQ0xdzmrJBXjo4OoVqJQFQ1VqCcIn179tf_kjPwPeSaqw1gw2pnfXtgcXM-12HAFV-NZc0TJCa3hBWHxAw9auJ", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEj-YBhvWzQL0Xch8rcCfJdfxYlYGkcCch1-np_euxNgS_0LsY9IwYBAw8hPlkdDejUMWGbOgzi5Is5Ft-mvJ2tNW296X-CFuAcHBhNqqCo2xqn78P7IXETSPQ4f7zhXGCd6xHAG57bxB_VpqWbk_BR2oSPh4uGOHObZ29llX0NmSA6ipsfh75VIH6rRRS6S", tipo: "monstro" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiZOUHi-veVauhuPeH3VZlMGGcUFT2AB4l1X7kcneLzR29SGR_o-LJ1AGlgxg10q5uzVSjVUFAjIYsVG0UunNWJ6g6FLnoP16enpK6wTus8zyo8XlVrh_S4a08I7MEHoTm9oiLzxCXDI-1vSfv3ZT33kq6wFoGQ8W70eNGiGpD4kRJjG3bjHz0qyqar-tb9", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgy6_ATL64pvSdTHtYIKdkRcArZ6vftR2mJcNBbD2s9f6d0LR76YYWIV3Q-SjT4XJjqhfy5x9bqO-JqrYE2lAURSJByo9yBMlvBlU4Ly_52cLi9kuR2Aqi8mpi1FP4dFeMJYVk-eCLlmQe-BWS0U0YDmZVfPkPIZKK7ae4d-w9hgi3BOoOmM2QUveiJs2L_", tipo: "magia" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiIn1wgSKS6-TwYEC3z22we8FuaPX3K0Db7BMlPBrP6WvEvdyY-MxVx1kVtX7w3Bqn7W04Fk411FXgHJ80ksB_8PJGcJxqLPsSClDy-KjBPysQ1msdlPq_VOdtuxQIGdzVbdMcvt8tBpZani90art1HZA2J6dUrRhoLWnEKKbkQyPK8ccNC0C869Vs_enCj", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgJKk9u3rMZfWfSrLF6U2-0WP1YE-aqOubbWaN3WiBkb5spchYezYG_SAZ5B_hn9OaoYd4pMUL2EAHpTVklLwXk8fUW1kyHJuYLxCenOVBk4eRbk_6Ia0RE-7yBPTKotOuMRRBNfnmWwAMqK-Na0NQWe-z3YgH7QrrlzREgb3hrqp8wZJlqxDvq7CZexDGp", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEg_uQ0vVQsqgZh2fSurCyK1eC6SFPs6annfCcF2qdnvtYcSuNSrOYfWSbyrSsq7oBdKn6lFGbTiPCfpycwWeaJEX_A4EUQ9UM2TaGcKwtP1gGNZOpO65r2DXQxS1FhkhAn5VAQ7JpMgQ-1hB1tp4GnZCz5Sho5DJu02pO1Rs6ukGoUbzFgwkkf6JdybYnZ2", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjuiES3w3dDZbfDoNtbDDfreEIIOPzz1F443cIh6GrVgmc1pvmIgwohR5qsQ5L9aA306bqN_h96_N7VIgWpPxkPQ4TcqhbAdH4xlcGaRexOLqSs3QkWkttESW310k1N9lIHAZ7gR124lPNRadfCUdYPzQeTbC13sPFqFRIT-sdkI6j6DBxAhzkfMmAo1nx6", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhzedQ7aEtMw0Hyd0lvwEFW_i8cQyECY58I1riJv70vzlhoGUQDrURPPpxmM9Da7Dv_XmpnzO9D6R0rlQbFnXjVSfFD3o0mPqBZ98k1yc4eQT9odqJ8iP3SaHmJvnUOltkIvEhelFS4KgB9YG-vq-V2axw1F0d0N9YMCeBBg86yOdmwdmdXLM7iEGjPs_c1", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgfv5OwSiNbwMTLpqNTaayZu_MMGi7IQbqcDM2nQa2lTerhuhCbgxXV4xhRW60xiCua3b8ytpFpqBwIkGRPLa61GrP4lby6IYXm6fOUex8RX1MmniY8Bl65C2Ryw98mIK9eeEn58MkAmA0Td53J7aNLE7aDCFv3MvYSrkgPGqYpxABZi27TcXGqpkEkAVwG", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEizygJT4BTJvPq9fvw5tlsS2RbFXO3BsNMPUDH_RP0kdwRWsfVQfpQ2JDgjsETQK7Mww7Yfpf1Xxt8wGnNNBCnWW16TRPSlDRymHD4MJac94Ylsx6ynLgOswLsX2WB3ZLuZRj3hIlCQ3uZ1L9B9opvRLW4zQ1ra_ksiSi15gBqxDLd_1RypXlSYEW3aq7Uc", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgt9Vx1MZfzIGY8txPaBxAeLSGJk9ZNevIvwsBiopdaJzgNjDDHfWJnDuj21idgrrWWlBe8Yms2Imz6wS3xvRZj_Rp6WU-lVvtm4Z3GeWmtRKAJlgKBxlzx1t9ulfQ0-eQWBrBGQ_HegxcXqF3izYQVtqnvfM39Kn_k1PTpCyZH1bv5La1gWUPtPqyYii0q", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiF-JBjaijHWEBJuZ0vWS52J4-S71zZVg2mthez20XS1PzG0u4mXIBkia9798_shAkgGVDEJV6tlkV42pmBaI0_k21W6jInGtKKUfhN64LEuyw44cXkYak8kQx--oY0PhegSDUUfIf2hUpjycwR8xUlszM17I-WjWpsJiV-dMyda-0l_x9E1Rp_fp26MQ4O", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiuRlyGdywum6rt_xefzFTDZyRB_G09kCJDv8oJbTMcUNWBwiEZJlkEQ8d99igSVR8xxzVJWu_wGXYXTVRCyOaARqLtU6-xhaxz9D_EwJ5nAkHZrSTo0xBp8PMmMAqyBpFCXr2CvljnuBhhOufPoMIAgWxAVk5NTPt6fzUqA6E3AQUkwgA-hxHQxtR_uaZS", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiu59ISpl30FnfSmGigiQByLMVAmKFYFH1t3Ud1194JZSx_xSKYW7djQxgEduEe4Tzqhq9xqooxhcp2hF7wARrIy-DVusrvTiZBfgteENxoPt8Lxedobs3p-_-I0u7FgtvUUJj-KM_JTVu9Ntf_qCWvp--tH2zZYVFlPcJv8Pp2xD6TlzkVl5GgLg-nhUpD", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjmBh5EYy61lXVHUK_7Fyqm9XsZEicdmhsikFeQKY545xheD-TJpeZJ991zALgr5jQYxVycQBnySMr5xt75QRsDQY2wmf_wghdtKN2iNqnLiNDrBdnKG93qF5C4VGW_pU-7jOuOzm9KxpPgWIhJiKdxoVHgc51m4iiiAahoFKraPKK0keVg1iCe6IIb2jcp", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEh6qH5ASIngiICcXZU8pY4XoGL7oVXtOkiFOe1VYtdPjjwqlb8U9Jv3LM7dF_FgDGQ0cMgXSNWLPtTS3jLMeWPfUlWV1SWSAGNKF4XOLi2DsQxWr3CqhgbmjqRdxh5Y1G7LSkTjutejMXCpBMjR3oBPagdX8rB6mUZ_MiM_QEp1mDDjgSucPqF6AWJ6Ks3w", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgdiRKiqu7-5qzqBE5DZKE09X3uZLzf9FHmGsl8ic7JSwq-YdzY9gpC5vffvMHMeMymZ1zB1_Lg_aWuVQ33EtL7UKRkDkW_AIIlJmYCDFdD_D8y_XMbuu8uHBiEPIwTC-eu8ZkShQpQR41nHM4LEcHgDp18zzjzPwQ6VMBfYIpnFmPZcl9otwsdUsCjtBod", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhdin1w6pjdLiP4qReXt6BKIbXtLsCIhm_AkLqfCepYfoCjswD7_xke8ZrQZ5J21W3wD6F6KATR9TXFvh60ucese7Ag7o8repNl8Jao3VoF8L5b5EtemthZxWDbeQTpQVV5GNyA10tR0Z6PQOej1SMbybvY4obyuRK9JcoulwRCe5jhQQXXwlaRBaY9FW9c", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhHcF5shyTJVVk2O4IOkvEqJ0yrLZttJaDEBrhaEOc1aCkwBcVDzNug_6bZIGQXQ4pDgPoYN_iD3i7HRuLehsSdnNGKcZFZJ6w200WizI2-O43j5R8wilqh7CvgkclT6gmKsDmCVTT8NlJCIzOpTmxmfguhYTZRbS1wdHMIQLOWPxpNlfFAiflng03EBdKh", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhc8GNUsTP0qdO_hV1cpBz4ZkQtpUX6DRYRAz9Xv8BcVtALHSFE_VXL4FRGmL-BombGWpLGa9KRkmsEWP94nS7yq_C6C4gVm-6I_V4xDTwv5GfdvEUZiudiyV1nWvaFWKrzc45BWsGWedO5-xNmTcPX1wWl_GfhzolqwFeQm6zTApTrUJCjH7uxgqsyUrbp", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjEmHev4Dcq612jfnpb-d8Gmw5MzuHi06uhfcecC97siR9rMvFOrCby_UkjrE2vOG3mUbaFx9Zw-TqpWUQ38-XFEGEnBNJRzLYPqw1aPU1T-KnLNBBnVucHK2UeN0oiMm6IVz8vWLupgdfANVHXNcpWdn_8dRZGi9qlRoTs6saDRVnFv5qK8QCQRvbQqeZF", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEiJJEEouyLodpYJGfzsnOCiQoktm4kUp72st0BP8az09pm-mXz11kXZG76qctEvxgNd0raFZJ2xnLVWFP0pypZ-751TmWnQ_3-8eMZNZgCZRewExmy98OQMA1o_ckSaqAz1Fbh8-yhyUrcf7ztHwJFyuHEL7cnsYNkCFlr57Z1Gq1al7WZR5HlcCY5Lx_Yq", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEgwh6RkQda8lQaaxLmhKVACZcj380hiScJD8K3e18f8BpVCv6vQzJ2KDCERC4dqywj0GmSGyCq14aqdiUTku5Fh9PUP6EflEMr-ZvZtBZ4lOYp8_Pl88LZ2lbjjeJGX2gxu0by8a-mWl_o6tQyGrtb77htp6xLPGqnSvIwf1IkgOnZ6Y1nyua13tlpZPhbM", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEh4lCg79Lk0cG--iQiUXs53GWYOYfqDANzjOkj7DTjhqZWBpt1Y2josln_m8Koe-z2dVaP5KowecXINLT1WpFqBvOaIhI0Rpn9ifQdiDvrnUkRUXZfkyxEzIFYZ3CepcrRZnuQxx4F9cq-5g9OKEodaNtKZZfF--6EyiPTMRDJE1DAbURcSFVofksJQEtug", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEhJ1WnvPTAWSejf-hQ8xU10omj91CnwIdDgdPSroZ14O-Dj9MbOfPurr50gIrpy63DzDEDFxJhTXx3NaW0QELCXEhT928PpcQWRH2ZhDrOaZK4GIFba6EP-LsoEKx3q07bV5xA4gGaswSi0ks2Ez9k1sRWUZdm04fxlC4ULabjVCs133l0wL2uaF0ZiNZTe", tipo: "armadilha" },
    { url: "https://blogger.googleusercontent.com/img/a/AVvXsEjHUT9yK48OtG3zAeOR5rkEl7lcwvHYCA4_4-sde7dvS6YQWvOt6tc5hb5lz4s9PYiUHLX25TAzKGlTdWRmXgGBebXs-mMqH09VPXGjA5y1zhSQZmCwvp6yF3YTUP4dHL4y56qdudLtupk-vo_IrAdU4dE-fzWqDU7HSlMK3YOunu7oozVDFr4wGT2ftNMc", tipo: "armadilha" }

];

const scriptGoogleURL = "https://script.google.com/macros/s/AKfycbwMPfI5ATEwuVSB1Jfa4FiyL6KCvH_UbJIhLB60USzbxpYG2gfCzqwLjp1GWeBHBagABg/exec";

function registrarVitoria(campeaoUrl) {
    fetch(scriptGoogleURL + "?campeao=" + encodeURIComponent(campeaoUrl), {
        method: 'GET', mode: 'no-cors'
    }).catch(err => console.log("Métrica não enviada, mas o jogo continua."));
}

const nomesFases = ["Oitavas de Final", "Quartas de Final", "Semifinal", "A Grande Final"];
const cartaSegura = cartasDatabase[0].url;
const urlWallpaper = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo9rlwCqNwkgF_bbv409Mdqx24wJlql8My7Hjn1qc2EZnQJaWoNSWQVO_dzIBKjwTLdX_GZ77Q-Fv8Sr-fQNG1IV9aV2xlc5DYay2VFrsaBUm44Fce3uz0v5K1f-3qO-ZDrbTxVX1rQqDhsDrQNOMe0zFo6DV0XF43gfBRjcXzq83L1Km9rFyVgAD70wax/s1600/Design%20sem%20nome%20(14).png";

function otimizarUrl(url) {
    if (!url) return cartaSegura;
    const limpa = url.replace('https://', '');
    return `https://wsrv.nl/?url=${limpa}&output=webp&w=320`;
}

let megaPool = [];
let torneio = [];
let faseAtual = 0;
let partidaAtual = 0;
let campeao = null;
let poolDisponivel = [];

// Novas variáveis da Fase de Grupos
let grupos = [];
let selecionadasGrupo = [];
let classificados = [];
let grupoAtual = 0;
const letrasGrupos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function embaralhar(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// --- CONTROLE DE TELA CHEIA ---
function toggleFullScreen() {
    let elem = document.documentElement; // Pega a página inteira
    
    if (!document.fullscreenElement) {
        // Tenta entrar em tela cheia
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    } else {
        // Tenta sair da tela cheia
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
}

function fazerPreload(urls) {
    urls.forEach(url => { const img = new Image(); img.src = url; });
    const imgBg = new Image(); imgBg.src = urlWallpaper;
}

async function carregarRanking() {
    const telaArena = document.getElementById('screen-arena');
    const telaBracket = document.getElementById('screen-bracket');
    const telaRanking = document.getElementById('screen-ranking');

    if (telaArena) telaArena.style.display = 'none';
    if (telaBracket) telaBracket.style.display = 'none';
    if (telaRanking) telaRanking.style.display = 'flex';
    
    const container = document.getElementById('ranking-container');
    container.innerHTML = '<p style="color: #888; font-weight: bold; width: 100%; text-align: center;">Conectando ao banco de dados...</p>';

    try {
        const response = await fetch(scriptGoogleURL + "?action=ranking");
        const top10 = await response.json();

        container.innerHTML = ''; 

        if (top10.length === 0) {
            container.innerHTML = '<p style="color: #fff; text-align: center;">O ranking ainda está vazio. Seja o primeiro a finalizar uma copa!</p>';
            return;
        }

        top10.forEach((item, index) => {
            const imgOtimizada = otimizarUrl(item.url);
            
            const isTop1 = index === 0;
            const rowClass = isTop1 ? 'ladder-row top-1' : 'ladder-row';
            
            // Definição dos ícones/posições da ladder
            let posText = `#${index + 1}`;
            let labelStatus = "Líder da Ladder";
            
            if (index === 0) {
                posText = "👑 #1";
                labelStatus = "Rei da YGO Cup";
            } else if (index === 1) {
                posText = "🥈 #2";
                labelStatus = "Vice-Líder";
            } else if (index === 2) {
                posText = "🥉 #3";
                labelStatus = "Top 3 da Comunidade";
            } else {
                labelStatus = `${index + 1}º Lugar Geral`;
            }

            container.innerHTML += `
                <div class="${rowClass}">
                    <div class="ladder-position">${posText}</div>
                    <div class="ladder-img-box">
                        <img crossorigin="anonymous" src="${imgOtimizada}" alt="Rank ${index + 1}">
                    </div>
                    <div class="ladder-info">
                        <span class="ladder-title">${labelStatus}</span>
                        <span class="ladder-wins">🏆 ${item.vitorias} Vitórias</span>
                    </div>
                </div>
            `;
        });

    } catch (err) {
        console.error("Erro ao puxar o ranking:", err);
        container.innerHTML = '<p style="color: #d32f2f; font-weight: bold; text-align: center;">Falha ao conectar com o ranking. Tente novamente mais tarde.</p>';
    }
}

async function baixarRanking() {
    const btn = document.getElementById('btn-download-ranking');
    btn.innerText = "Baixando...";
    btn.disabled = true; 
    
    const board = document.getElementById('ranking-board');
    
    try {
        const canvas = await html2canvas(board, { 
            backgroundColor: '#0b0d17', 
            useCORS: true, 
            scale: 3 
        });
        
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const timestamp = new Date().getTime();
            a.download = `super-ygo-cup-hall-da-fama-${timestamp}.png`;
            
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url); 
            
            btn.innerText = "⬇️ Baixar Hall da Fama";
            btn.disabled = false;
        }, 'image/png');
        
    } catch (err) {
        alert("Houve um erro ao renderizar o download do ranking. Verifique sua conexão.");
        btn.innerText = "⬇️ Baixar Hall da Fama";
        btn.disabled = false;
    }
}
// (Mantenha as funções de ranking exatamente como você as tem agora)

function iniciarTorneio() {
    document.getElementById('screen-bracket').style.display = 'none';
    document.getElementById('screen-arena').style.display = 'flex';
    document.getElementById('screen-ranking').style.display = 'none';
    
    const filtroSelecionado = document.getElementById('filtro-cartas').value;
    if (filtroSelecionado === "todos") {
        megaPool = cartasDatabase.map(carta => carta.url);
    } else {
        megaPool = cartasDatabase.filter(carta => carta.tipo === filtroSelecionado).map(carta => carta.url);
    }

    if (megaPool.length < 32) {
        alert("Adicione pelo menos 32 cartas para jogar!");
        document.getElementById('filtro-cartas').value = "todos";
        megaPool = cartasDatabase.map(carta => carta.url);
    }

    let embaralhadas = embaralhar([...megaPool]);
    let cartasDoTorneio = embaralhadas.slice(0, 32);
    poolDisponivel = embaralhadas.slice(32);

    fazerPreload(cartasDoTorneio);

    // Monta os 8 grupos de 4 cartas
    grupos = [];
    for (let i = 0; i < 8; i++) grupos.push(cartasDoTorneio.slice(i * 4, (i + 1) * 4));

    faseAtual = -1; // -1 significa Fase de Grupos
    grupoAtual = 0;
    selecionadasGrupo = [];
    classificados = [];
    campeao = null;

    atualizarArena();
}

function atualizarArena() {
    const titleEl = document.getElementById('round-title');
    const subTitleEl = document.getElementById('arena-subtitle');
    const groupCont = document.getElementById('group-container');
    const duelCont = document.getElementById('duel-container');

    if (faseAtual === -1) {
        // RENDERIZAR FASE DE GRUPOS
        groupCont.style.display = 'block';
        duelCont.style.display = 'none';
        titleEl.innerText = `Fase de Grupos - Grupo ${letrasGrupos[grupoAtual]}`;
        subTitleEl.innerText = "Escolha as 2 melhores cartas para avançar";

        const grid = document.getElementById('group-grid');
        grid.innerHTML = '';
        selecionadasGrupo = [];
        atualizarBotaoGrupo();

        grupos[grupoAtual].forEach((url, index) => {
            grid.innerHTML += `
                <div class="group-card" id="gcard-${index}" onclick="toggleCardSelection('${url}', ${index})">
                    <img src="${url}" onerror="trocarCartaGrupo(this, ${grupoAtual}, ${index})" alt="Card">
                </div>
            `;
        });
    } else {
        // RENDERIZAR MATA-MATA
        groupCont.style.display = 'none';
        duelCont.style.display = 'flex';

        const partida = torneio[faseAtual][partidaAtual];
        const totalDuelos = torneio[faseAtual].length;

        titleEl.innerText = `${nomesFases[faseAtual]} - Duelo ${partidaAtual + 1} de ${totalDuelos}`;
        subTitleEl.innerText = "Toque na sua carta favorita para vencer o duelo!";

        const imgEsquerda = document.getElementById('card-left');
        const imgDireita = document.getElementById('card-right');

        imgEsquerda.dataset.erros = 0; imgDireita.dataset.erros = 0;
        imgEsquerda.src = partida.p1; imgDireita.src = partida.p2;
    }
}

function toggleCardSelection(url, index) {
    const cardEl = document.getElementById(`gcard-${index}`);
    const idx = selecionadasGrupo.indexOf(url);

    if (idx > -1) {
        selecionadasGrupo.splice(idx, 1);
        cardEl.classList.remove('selected');
    } else if (selecionadasGrupo.length < 2) {
        selecionadasGrupo.push(url);
        cardEl.classList.add('selected');
    }
    atualizarBotaoGrupo();
}

function atualizarBotaoGrupo() {
    const btn = document.getElementById('btn-confirm-group');
    btn.innerText = `Avançar ${selecionadasGrupo.length}/2`;
    btn.disabled = selecionadasGrupo.length !== 2;
}

function confirmarGrupo() {
    if (selecionadasGrupo.length !== 2) return;
    classificados.push(...selecionadasGrupo);
    grupoAtual++;

    if (grupoAtual >= 8) {
        // Todos os grupos finalizados. Inicia o mata-mata nas Oitavas!
        faseAtual = 0; partidaAtual = 0;

        // Torneio agora começa com 16 cartas (8 duelos)
        torneio = [
            Array.from({ length: 8 }, () => ({ p1: null, p2: null })),
            Array.from({ length: 4 }, () => ({ p1: null, p2: null })),
            Array.from({ length: 2 }, () => ({ p1: null, p2: null })),
            Array.from({ length: 1 }, () => ({ p1: null, p2: null }))
        ];

        let classificadosMix = embaralhar([...classificados]);
        for (let i = 0; i < 8; i++) {
            torneio[0][i].p1 = classificadosMix[i * 2];
            torneio[0][i].p2 = classificadosMix[i * 2 + 1];
        }
    }
    atualizarArena();
}

function trocarCartaGrupo(imgElement, grupoIdx, cardIdx) {
    if (poolDisponivel.length === 0) poolDisponivel = embaralhar([...megaPool]);
    let novaUrl = poolDisponivel.pop();
    imgElement.src = novaUrl;
    grupos[grupoIdx][cardIdx] = novaUrl;
    imgElement.parentElement.setAttribute('onclick', `toggleCardSelection('${novaUrl}', ${cardIdx})`);
}

function trocarCarta(imgElement, player) {
    let erros = parseInt(imgElement.dataset.erros || 0);
    if (erros > 3) { imgElement.onerror = null; return; }
    imgElement.dataset.erros = erros + 1;

    if (poolDisponivel.length === 0) poolDisponivel = embaralhar([...megaPool]);
    let novaUrl = poolDisponivel.pop();
    imgElement.src = novaUrl;
    torneio[faseAtual][partidaAtual][player] = novaUrl;
}

function escolherVencedor(player) {
    const partida = torneio[faseAtual][partidaAtual];
    const vencedorId = (player === 'p1') ? partida.p1 : partida.p2;

    if (faseAtual === 3) { // Mudou de 4 para 3, pois começamos nas Oitavas
        campeao = vencedorId;
        registrarVitoria(campeao);
        gerarChaveamentoFinal();
        return;
    }

    const proximaPartidaIndex = Math.floor(partidaAtual / 2);
    const isPlayer2 = (partidaAtual % 2 !== 0);

    if (isPlayer2) torneio[faseAtual + 1][proximaPartidaIndex].p2 = vencedorId;
    else torneio[faseAtual + 1][proximaPartidaIndex].p1 = vencedorId;

    partidaAtual++;
    if (partidaAtual >= torneio[faseAtual].length) {
        faseAtual++; partidaAtual = 0;
    }
    atualizarArena();
}

function getCardHtml(url, extraClass = '') {
    const urlLimpa = url.replace('https://', '');
    const proxyUrl = `https://wsrv.nl/?url=${urlLimpa}&output=webp`;
    const seguraLimpa = cartaSegura.replace('https://', '');
    const fallbackUrl = `https://wsrv.nl/?url=${seguraLimpa}&output=webp`;
    const tagErroFinal = `onerror="this.onerror=null; this.src='${fallbackUrl}';"`;

    return `
        <div class="slot ${extraClass}">
            <img crossorigin="anonymous" src="${proxyUrl}" ${tagErroFinal} alt="Card">
        </div>
    `;
}

function gerarChaveamentoFinal() {
    document.getElementById('screen-arena').style.display = 'none';
    document.getElementById('screen-bracket').style.display = 'block';

    const board = document.getElementById('bracket-board');
    const bgLimpo = urlWallpaper.replace('https://', '');
    const bgProxy = `https://wsrv.nl/?url=${bgLimpo}&output=webp`;

    board.innerHTML = `
        <img crossorigin="anonymous" src="${bgProxy}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; opacity: 0.35; border-radius: 12px; pointer-events: none;" alt="Background">
    `;

    function criarPartidaHtml(roundIndex, matchIndex) {
        const match = torneio[roundIndex][matchIndex];
        let vencedorId = null;

        if (roundIndex < 3) { // Mudou de 4 para 3
            const nextMatch = torneio[roundIndex + 1][Math.floor(matchIndex / 2)];
            if (nextMatch.p1 === match.p1 || nextMatch.p2 === match.p1) vencedorId = match.p1;
            else if (nextMatch.p1 === match.p2 || nextMatch.p2 === match.p2) vencedorId = match.p2;
        } else {
            vencedorId = campeao;
        }

        const classeP1 = (vencedorId === match.p1) ? 'winner' : 'loser';
        const classeP2 = (vencedorId === match.p2) ? 'winner' : 'loser';

        return `
            <div class="match">
                ${getCardHtml(match.p1, classeP1)}
                ${getCardHtml(match.p2, classeP2)}
            </div>`;
    }

    function criarColuna(roundIndex, startMatch, endMatch) {
        let colHTML = `<div class="column">`;
        for (let m = startMatch; m <= endMatch; m++) colHTML += criarPartidaHtml(roundIndex, m);
        colHTML += `</div>`; return colHTML;
    }

    // O CHAVEAMENTO AGORA É 16 CARTAS (Mata-mata começa nas Oitavas)
    let leftSide = document.createElement('div');
    leftSide.className = 'side left';
    leftSide.innerHTML += criarColuna(0, 0, 3) + criarColuna(1, 0, 1) + criarColuna(2, 0, 0);

    let rightSide = document.createElement('div');
    rightSide.className = 'side right';
    rightSide.innerHTML += criarColuna(0, 4, 7) + criarColuna(1, 2, 3) + criarColuna(2, 1, 1);

    let center = document.createElement('div');
    center.className = 'center-stage';
    const finalMatch = torneio[3][0]; // Mudou de 4 para 3

    const classeFinalP1 = (campeao === finalMatch.p1) ? 'winner final-card-slot' : 'loser final-card-slot';
    const classeFinalP2 = (campeao === finalMatch.p2) ? 'winner final-card-slot' : 'loser final-card-slot';

    center.innerHTML = `
        <div style="text-align: center; margin-bottom: 10px; z-index: 2;">
            <div class="cup-title-shape">SUPER YGO CUP!</div><br>
            <div class="cup-subtitle">A Grande Final</div>
        </div>

        <div class="match" style="flex-direction:row; background:transparent; border:none; gap:15px; margin-bottom: 15px; align-items: center; justify-content: center;">
            ${getCardHtml(finalMatch.p1, classeFinalP1)}
            <span style="color: #d4af37; font-weight: bold; font-size: 18px; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">VS</span>
            ${getCardHtml(finalMatch.p2, classeFinalP2)}
        </div>

        <div class="champion-section" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
            <svg class="crown" viewBox="0 0 512 512" style="width: 80px; height: 80px; filter: drop-shadow(0 0 12px rgba(212, 175, 55, 0.9)); margin-bottom: -15px; z-index: 3;">
                <path fill="#f1c40f" d="M476 136c-17.6 0-32 14.4-32 32 0 6.6 2 12.7 5.5 17.8L377.2 267.4c-8.9-3.4-18.7-5.4-29.2-5.4-8 0-15.7 1.2-23 3.4L281.3 128.5C286.2 122 288 114.3 288 104c0-17.6-14.4-32-32-32s-32 14.4-32 32c0 10.3 2.8 18 7.7 24.5L187 265.4c-7.3-2.2-15-3.4-23-3.4-10.5 0-20.3 2-29.2 5.4L62.5 185.8c3.5-5.1 5.5-11.2 5.5-17.8 0-17.6-14.4-32-32-32s-32 14.4-32 32 14.4 32 32 32c5.9 0 11.4-1.6 16.3-4.4L116 351.5C120.3 371 137.6 384 158 384h196c20.4 0 37.7-13 42-32.5l64-155.9c4.9 2.8 10.4 4.4 16.3 4.4 17.6 0 32-14.4 32-32s-14.4-32-32-32zM256 416H143.8c-10 0-18.7 6.1-22.1 15.3l-10.3 28.3c-2.3 6.3 2.4 12.4 9.1 12.4H391.5c6.7 0 11.4-6.1 9.1-12.4l-10.3-28.3c-3.4-9.2-12.1-15.3-22.1-15.3z"/>
            </svg>
            <div class="champion-badge">CAMPEÃO • CHAMPION</div>
            ${getCardHtml(campeao, 'winner-slot')}
            <div class="pedestal"></div>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        .final-card-slot { width: 75px !important; height: 110px !important; border-width: 3px !important; }
        .center-stage { width: 340px; min-width: 340px; align-items: center; justify-content: center; }
    `;
    document.head.appendChild(style);

    board.appendChild(leftSide);
    board.appendChild(center);
    board.appendChild(rightSide);

    board.innerHTML += `
        <div class="footer-banner">
            <div style="display: flex; align-items: center;">
                <div class="footer-qr">
                    <img crossorigin="anonymous" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://superygo.blogspot.com/p/yu-gi-oh-cup.html" alt="QR">
                </div>
                <div class="footer-text">
                    FAÇA SUA PRÓPRIA<br>COPA DE YU-GI-OH!<br>COM O APP YGO CUP
                </div>
            </div>
            <div class="footer-brand">
                YGO CUP <span class="oficial-badge">OFICIAL</span><br>
                <span style="font-size: 14px; font-weight: normal;">superygo.blogspot.com</span>
            </div>
        </div>
    `;
}

async function compartilharResultado() {
    const btn = document.getElementById('btn-share');
    btn.innerText = "Gerando Imagem...";
    btn.disabled = true;

    const board = document.getElementById('bracket-board');

    try {
        const canvas = await html2canvas(board, { backgroundColor: null, useCORS: true, scale: 2 });

        canvas.toBlob(async (blob) => {
            try {
                const file = new File([blob], 'yu-gi-oh-cup-resultado.png', { type: 'image/png' });
                const linkBlog = "https://superygo.blogspot.com/p/yu-gi-oh-cup.html";

                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    try {
                        await navigator.share({
                            title: 'YGO Cup',
                            text: "Montei meu chaveamento de Cartas Favoritas! Venha fazer o seu 👇",
                            url: linkBlog,
                            files: [file]
                        });
                    } catch (shareErr) { fallbackDownload(blob, linkBlog); }
                } else { fallbackDownload(blob, linkBlog); }
            } catch (err) {
                alert("Erro ao processar a imagem no seu dispositivo.");
            } finally {
                btn.innerText = "Compartilhar";
                btn.disabled = false;
            }
        }, 'image/png');

    } catch (err) {
        alert("Houve um erro ao renderizar o chaveamento. Verifique sua conexão.");
        btn.innerText = "Compartilhar";
        btn.disabled = false;
    }
}

async function baixarResultado() {
    const btn = document.getElementById('btn-download');
    btn.innerText = "Baixando...";
    btn.disabled = true;

    const board = document.getElementById('bracket-board');

    try {
        const canvas = await html2canvas(board, { backgroundColor: null, useCORS: true, scale: 3 });

        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const timestamp = new Date().getTime();
            a.download = `super-ygo-cup-${timestamp}.png`;

            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            btn.innerText = "⬇️ Baixar Imagem";
            btn.disabled = false;
        }, 'image/png');

    } catch (err) {
        alert("Houve um erro ao renderizar o download. Verifique sua conexão.");
        btn.innerText = "⬇️ Baixar Imagem";
        btn.disabled = false;
    }
}

function fallbackDownload(blob, linkBlog) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yu-gi-oh-cup-resultado.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert("A imagem foi baixada na sua galeria! Envie-a aos seus amigos junto com o link: " + linkBlog);
}

iniciarTorneio();
