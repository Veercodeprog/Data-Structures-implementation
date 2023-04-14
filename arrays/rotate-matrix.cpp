#include <iostream>
using namespace std;

class GFG {
public:
    static void rotateMatrix(int N, int mat[][4]) {
        for (int x = 0; x < N / 2; x++) {
            for (int y = x; y < N - x - 1; y++) {
                int temp = mat[x][y];

                mat[x][y] = mat[y][N - 1 - x];

                mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

                mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

                mat[N - 1 - y][x] = temp;
            }
        }
    }

    static void displayMatrix(int N, int mat[][4]) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                cout << " " << mat[i][j];
            }
            cout << "\n";
        }
        cout << "\n";
    }
};



int main() {
    int N = 4;

    int mat[][4] = {{1, 2, 3, 4},
                    {5, 6, 7, 8},
                    {9, 10, 11, 12},
                    {13, 14, 15, 16}};

    GFG::rotateMatrix(N, mat);

    GFG::displayMatrix(N, mat);

    return 0;
}
