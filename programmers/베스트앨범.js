function solution(genres, plays) {
	const list = genres.reduce((hash, cur, i) => {
		if (!hash[cur]) {
			hash[cur] = { plays: plays[i], music: [] };
		} else {
			hash[cur].plays += plays[i];
		}
		hash[cur].music.push([i, plays[i]]);
		console.log("=======>", hash);
		return hash;
	}, {});

	const answer = [];
	//console.log(Object.values(list));
	const sorted = Object.values(list).sort((l, r) => r.plays - l.plays);
	//console.log(sorted);
	sorted.forEach((g) => {
		// 수록곡이 2개 이상인지 확인
		if (g.music.length > 1) {
			g.music.sort((l, r) => {
				// 객체를 sort하는 작업
				if (l[1] > r[1]) {
					return -1;
				} else if (l[1] < r[1]) {
					return 1;
				} else {
					return l[0] > r[0] ? 1 : -1;
				}
			});
			console.log(g);
			answer.push(g.music[0][0]);
			answer.push(g.music[1][0]);
		} else {
			// 장르별로 한개만 수록되었을 경우
			answer.push(g.music[0][0]);
		}
	});
	console.log(answer);
	return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
solution(genres, plays);
