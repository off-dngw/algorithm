function algorithm3(n, k, m) {

    // N, M, K를 공백을 기준으로 구분하여 입력 받기
         n = sc.nextInt();
        m = sc.nextInt();
        k = sc.nextInt();

        // N개의 수를 공백을 기준으로 구분하여 입력 받기
        let result = [];
        for (let i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        Arrays.sort(arr); // 입력 받은 수들 정렬하기
        let first = arr[n - 1]; // 가장 큰 수
        let second = arr[n - 2]; // 두 번째로 큰 수

        // 가장 큰 수가 더해지는 횟수 계산
        let cnt = (m / (k + 1)) * k;
        cnt += m % (k + 1);

        let result = 0;
        result += cnt * first; // 가장 큰 수 더하기
        result += (m - cnt) * second; // 두 번째로 큰 수 더하기

        System.out.prletln(result);
    
}