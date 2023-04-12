#include <stdlib.h>
#include <iostream>

using namespace std;

struct Node
{
    int data;
    Node* next;
};

// Node* head = NULL;

 void Insert(Node** pontertoHead,int x)
{
    Node* temp = new Node();
    temp->data = x;
    temp->next = NULL;
    if(*pointertoHead != NULL) temp->next = *pontertoHead;
    *pontertoHead = temp;

}

void print(Node* head)
{
cout << List is;
    while(head != NULL){
        cout << head << " ";
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
Node * head  = NULL;
    int n, i, x;
    cout << "How many numbers: ";
    cin >> n;

    for (int i = 0; i < n; i++)
    {
       cout << "Enter the number: ";
       cin >> x;
     Insert(&head,x);
       print(head);
    }
    return 0;
}
