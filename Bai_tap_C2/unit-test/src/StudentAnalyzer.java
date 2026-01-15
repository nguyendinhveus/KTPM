import java.util.List;

public class StudentAnalyzer {

    /*Phân tích điểm số và trả về số lượng học sinh đạt loại Giỏi (>= 8.0) */

    public int countExcellentStudents(List<Double> scores) {
        if (scores == null || scores.isEmpty()) {
            return 0;
        }
        int count = 0;
        for (Double score : scores) {
            // Bỏ qua dữ liệu sai
            if (score == null || score < 0 || score > 10) {
                continue;
            }

            if (score >= 8.0) {
                count++;
            }
        }

        return count;
    }

    /*Tính điểm trung bình hợp lệ (0 - 10)*/
    public double calculateValidAverage(List<Double> scores) {
        if (scores == null || scores.isEmpty()) {
            return 0;
        }

        double sum = 0;
        int validCount = 0;

        for (Double score : scores) {
            if (score == null || score < 0 || score > 10) {
                continue;
            }

            sum += score;
            validCount++;
        }

        if (validCount == 0) {
            return 0;
        }

        return sum / validCount;
    }
}
