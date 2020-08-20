const slides = [
  {
    title: "The Earl",
    subtitle: "Cocktails Bar",
    description: "Enjoy a delicious cocktail in the heart of Bath",
    image:
      "https://lh3.googleusercontent.com/II5TlhwIIaJrvwGA4LHjTwS0xO3jvFTuUlrHrMRuYY-xhgDT3oRyH1YSjqKhlv7u1V0Zmydt5tzQjY0WONCWcU54dJBzG0uVpXFE-_W4jgrx2ELhilDKjfVCFIcMr7gtjfp9hBj2BLwyH0xFmq-7IToUFCRv7_sb7KlIJMX5uttjuwt0k8HCPd5lhgY65vpq21iSK5YZTeV27__Iw1oaDOpN07NOyZ-7ctGx-XgjPW1Nh8nbqIVcfjTXA3EJToWc4GF1Ss0NHEgVhCrbYR4ZQVoPhl7sHGkPReNdt00YSPYSqfNdE2u-5YD_AL_btsjmYWgLVffQgj9EoZdB4b5_2Z5PErh_-4YhWV7Sjz_udC3jVUc3-Xp-4RovVQpJjE8F9u85XvclypbYTKP-Wvgmc3Hv8dEJ1smc0npf0USXKJPjzTxDYgfJHRTEru0xj8GSd8AjtaTA9-Ucc9Vi2XQylOQRCfAfvTTQZfY4Z6uqjdhSb7sptWCiT8ZsehfTHn4Eseghwu4JP6tZjy7uG7a9ZdcRPMON1d9I-DddKpr1n9nZ8eHC9Rp7BfmDoxMZ7or-QgApLB_uRoIrr6KkgGUJQG1kNOSzE-qwQu0wiHGzFr35r4Y7abupJG6DUTw3XlXUzgRVd9M7wqEwJDYrjZHFTccWUXNSg12O3qV85OlVNc2hJ-0EdLYCnheSoXxb=w1919-h1221-no?authuser=0",
  },
  {
    title: "Happy Hours",
    subtitle: "Mix & Match",
    description:
      "Our welcoming atmosphere & delicious cocktail options create the perfect setting for a group gathering.",
    image:
      "https://lh3.googleusercontent.com/LzhlDhboFs-dIA17j1Wsa3hgsikf55a6rZRsEHgxPhFKnCG4OVX_BjUFUk_rZYVgoRQDil4-J-FMQhjccebsIDqK8avF9de2mdUqo0C_BtSJq0Y9NIpz_dRM60zC0hzbimmqh8W8AAQGB7cyc6ZQXRA4c6kETmNrjpAZw4Cezsh3jHDO-q_P_5EI1MPTH_WCfe9C7_hwhbYbuQRFmpaFqMmtOiq2uEccZro2JTQ1mVBwIYHJn7mopC3567hHaIaeXY7wdDvrm4txBUa80JQvOH-HtE-Imd-xpyB7Xp2OJ6FfTn23mQt7PAhG6zUcTPALCrZJHggUGlzDf2jNQkfpALIeYX46ZnuUmPcrkqgdycfpmO0oMLG9EF6lQcMREHajR6CdVqrArX2xUHzR-3wEr37mq1AsicseggfN_Oj-IHfIuWEA6oMxoOYteCYJH7xQmOAOEucZULkpUnNQFbKe8EZN9DCfhV1MTzNZvYD1WDNLCkA0fx0L9jclqFOECgHM0oarNx4fgEK5qj7_2ebIYGhQq6ZsWf9WuxyVbOpp5KNgGSfw17CEMaN-Sr356b4XQyyZExVFbJeitJLmZpvCJ7iPxPDLRPAmX-iYs_2MXZ_HtuMkKhW1bHY02zA3LaHtVJEkJ27wQCh5NiKLi79Zu9SZ_ObF3aeQixCMFWuwcKNBBTh5hA5Xj5E2-XnV=w1919-h908-no?authuser=0",
  },
  {
    title: "Lounge Zone",
    subtitle: "Relaxing & Friendly",
    description:
      "A relaxing environment offering flavorful iced hookahs, friendly staff, delicious drinks and chilling music.",
    image:
      "https://lh3.googleusercontent.com/-E_8zKLQp7WI16SPU-hB9iBsG2zZdcPcS4166MNRV9uZWXsjF0QGSwtI-9lF9chetPFRvpQSBF_7rwHlkVlEmEDeGwSPp3od9DpZWbhEEahhC0KYeLn61GO56pc0MjEa2yX6n4Ay6_8gAHi4OPiC9w5Xd-ZFrmYuyD1BfFTyZSKuPs9gGHRxbZH6I8Of0EaLZzKLohNDCUYYPz5NwPoNWAfthK50IQT_Qg6q2wDRw8CgpQ8bx_CTBsrpDY0SEBR3hZ0HMEZH9BaTjMkYVa-O0ZBAWzTEVIgYQk0Zsd_dVEVE3KPwlVvvqwuQb6DtIpgCb5XsNAbO-ezkWqw2zrZWJ_Zzt93UjT-ceCzJNcW6iTocwnS6QqGukEZHmgcK2tUtUeZTfZAlL1QayUZv8GKd6SQVwcV9mVTQ4y9jQdN1zplji_RMUnALAhp5LEovkzPmhokJ7GVkR_yCbK1U7CkR_7EtP1bA4trOjDP-T-AlyR0kGKBt7Bb_77RxX-9gIURArDKDXaI9DoqvcM6pdssEIYiBsCpbbW2UQA4L22mWjkafdr8Z0vep_TJWcv2M-pyfgaXuMS6S4kCHjXQW8-9mz7iESpEUmh4WLkFaCNwdNWitBJ8j3RPwYm18jYv3Xr42yDdwDN6GyCeV0YjnaPYNf02c98omddlYDDLzoLOAk4nxGyPXVdlF0vO5NyAv=w1919-h1281-no?authuser=0",
  },
  {
    title: "The Terrace",
    subtitle: "Shisha Bar",
    description:
      "Distinct Hookah bar providing the cleanest and best Shisha brands, an experienced and knowledgeable staff.",
    image:
      "https://lh3.googleusercontent.com/A7dCdIF9kDscXkqGiDqkLBWnF8tzRlY-MkUGvyJXxlE2ApOFaGewpnCloAi27LPfnStnU3obqu7WhIFTnqiUdhbeae_VyBcv8TNaNJoMsJ3zRL3NJxo9I3j2pSPQLEN2XeLghfUiOgeyF3Raoev7b9KXGGi_q_EXcSlWXF-lOMQVriVma04l-0oigxzlrnLRhLRnHgbZ3c3un-wF-DxEmsJ3gf8t-3Jv7w_HQ-z8ndWjZjOu2dBwGSEokOcY87ZlIgihbIhc4mf09XyU16DnG6CFErwZ6WP7EyLT1Kaz3ZB6p5bHaN1bRGjJ1ihLhNWrYJOIo8zezJth34DWpuFgFM0RQGsNo35vLKZoV_wzDNlQQVQsdozWqjI3H60S3MZp5ZHEjUUDXTSgaHC_pl7rBaqYqUL6ExGo8bQWX4JNU-s0z0sVYje1zorYZSHEgxw5CIMOfFMcytAadpjk724YjB6Y2TYWE74ZyH81GlIe4p5w9FhwqMau2ZAbGs_2WyPbuwqztYb9d07HetvXK8OHAWVKqaCb9eZwRiKI0KA6rwYYsQRJ8iQN8G9a6rELY-G2nYyLaUl3HKpQOxbwE3dhbblMpqM6esefBCtIxu-SU1rIUC2dxBW0fD8xjJbIUj3gwxP7VF50-9AFI77tY-FC24wSXi_yJM8Zpk0DF-Hnmg9ozXxjfB2Cd9wG3fjF=w1919-h1281-no?authuser=0",
  },
];

export default slides;
